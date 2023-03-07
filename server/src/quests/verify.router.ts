import express, { Request, Response } from "express";
import db from "../../firebase/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { Client } from "twitter-api-sdk";
import * as dotenv from "dotenv";
import fetch from "node-fetch";
import { verifyTransaction } from "../verifier";

dotenv.config();

export const verifyRouter = express.Router();

const client = new Client(process.env.BEARER_TOKEN as string);

// verify quest: http://localhost:8888/api/verify/:questId/:user
verifyRouter.get("/:questId/:address", async (req: Request, res: Response) => {
  try {
    const { questId, address } = req.params;

    // fetch user
    const userDocRef = doc(db, "users", address);
    const userDocSnap = await getDoc(userDocRef);

    if (userDocSnap.exists()) {
      // fetch user current quests
      const { quests, twitter } = userDocSnap.data();
      const questsArray: any[] = Object.values(quests);

      // find requested quest among active
      const activeQuest = questsArray.find((quest: any) => {
        return quest.questId === questId;
      });

      if (activeQuest) {
        const { currentStep, startedAt } = activeQuest;

        // fetch quest
        const questDocRef = doc(db, "quests", questId);
        const questDocSnap = await getDoc(questDocRef);

        if (questDocSnap.exists()) {
          // fetch steps from quest
          const { steps, numSteps } = questDocSnap.data();

          // find user current step details from quest
          const activeStep = steps[currentStep];

          const { partner_id } = activeStep;

          if (activeStep.isTwitter) {
            const { data } = await client.users.usersIdFollowing(
              twitter.user_id,
              {
                "user.fields": ["id", "name", "username"],
              }
            );

            const found = data?.find(({ id }) => id === partner_id);

            if (found) {
              res.status(200).send({ message: "Success: Verified!" });
            } else {
              res.status(404).send({ message: "Error: Verification failed" });
            }
          } else {
            const response = await fetch(
              `https://api.wavesplatform.com/v0/transactions/all?sender=${address}&timeStart=${1679537226216}&sort=desc&limit=100`
            );

            const result = await response.json();
            const transactions = result.data;

            let foundTxn;

            foundTxn = transactions.find((txn: any) => {
              if (verifyTransaction(questId, currentStep, txn, startedAt))
                return true;
            });

            if (foundTxn) {
              res.status(200).send({ message: "Success: Verified!" });
            } else {
              res.status(404).send({ message: "Error: Verification failed" });
            }
          }
        } else {
          res
            .status(404)
            .send({ message: `Error: No quest found with ${questId}` });
        }
      } else {
        res.status(404).send({
          message: `Error: User does not have an active quest with ${questId}`,
        });
      }
    } else {
      res.status(404).send({ message: `Error: No user found with ${address}` });
    }

    return;
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});
