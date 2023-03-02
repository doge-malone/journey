import db from "../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import { mockQuests } from "./static";

function migration() {
  mockQuests.forEach(async (quest) => {
    const docRef = doc(db, "quests", quest.id);
    await setDoc(docRef, quest);
  });
}

migration();
