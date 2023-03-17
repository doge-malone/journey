import express, { Request, Response } from "express";
import db from "../../firebase/firebase";
import * as dotenv from "dotenv";
import {
  collection,
  doc,
  getDocs,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { broadcast, issue, transfer } from "@waves/waves-transactions";

dotenv.config();

export const claimRouter = express.Router();

const RPC_URL = "https://nodes.wavesnodes.com";
const SEED_PHRASE = process.env.SEED_PHRASE ?? "";

function awaitConfirmation(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function sendTokens(address, amount) {
  const signedTx = transfer(
    {
      recipient: address,
      amount: amount,
    },
    SEED_PHRASE
  );

  const txn = await broadcast(signedTx, RPC_URL);
}

async function sendNFT(address, nft_reward) {
  const metadata = {
    name: nft_reward.title,
    description: nft_reward.description,
    image_url: nft_reward.token_uri,
  };

  const myToken = {
    name: "Journey NFT",
    description: JSON.stringify(metadata),
    quantity: 1,
    decimals: 0,
    chainId: "W",
  };

  const issueTx = issue(myToken, SEED_PHRASE);

  const txn: any = await broadcast(issueTx, RPC_URL);

  const signedTx = transfer(
    {
      recipient: address,
      amount: 1,
      assetId: txn.assetId,
    },
    SEED_PHRASE
  );

  await awaitConfirmation(3000);

  const sendTxn = await broadcast(signedTx, RPC_URL);

  console.log(sendTxn);
}

// fetch all quests: https://journey-server.onrender.com/api/quests/
claimRouter.get("/", async (req: Request, res: Response) => {
  try {
    const query = collection(db, "quests");
    const querySnap: any = await getDocs(query);

    const fetchedQuests: any = [];

    if (querySnap) {
      querySnap.forEach((doc: any) => {
        fetchedQuests.push(doc.data());
      });
    }

    res
      .status(200)
      .send({ message: "Successfully fetched", quest: fetchedQuests });
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: "server error" });
  }
});

claimRouter.get("/:questId/:address", async (req: Request, res: Response) => {
  try {
    const { questId, address } = req.params;

    const docRef = doc(db, "quests", questId);
    const docSnap = await getDoc(docRef);

    if (questId === "journey") {
      if (docSnap.exists()) {
        const { nft_reward, completed_users } = docSnap.data();

        await sendTokens(address, 1000000);
        await sendNFT(address, nft_reward);

        // add user to completed_users array
        const prevCompletedUsers = JSON.parse(JSON.stringify(completed_users));
        prevCompletedUsers.push(address);

        await updateDoc(docRef, {
          completed_users: prevCompletedUsers,
        });

        res.status(200).send({
          message: "Reward successfully claimed",
        });
      } else {
        res.status(404).send({ message: "Journey not found" });
      }
      return;
    }

    if (docSnap.exists()) {
      const {
        token_reward,
        nft_reward,
        xp: questXP,
        completed_users,
      } = docSnap.data();

      // await sendTokens(address, 1000000);
      await sendNFT(address, nft_reward);

      // UPDATE XP
      const userDocRef = doc(db, "users", address);

      const userDocSnap = await getDoc(userDocRef);
      if (userDocSnap.exists()) {
        const { quests, xp: userXP } = userDocSnap.data();
        const newQuests = JSON.parse(JSON.stringify(quests));
        newQuests[questId as string].status = "rewarded";

        await updateDoc(userDocRef, {
          quests: newQuests,
          xp: userXP + questXP,
        });
      }

      // add user to completed_users array
      const prevCompletedUsers = JSON.parse(JSON.stringify(completed_users));
      prevCompletedUsers.push(address);

      await updateDoc(docRef, {
        completed_users: prevCompletedUsers,
      });

      res.status(200).send({
        message: "Reward successfully claimed",
      });
    } else {
      res.status(404).send({ message: "Quest not found" });
    }
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: "server error" });
  }
});
