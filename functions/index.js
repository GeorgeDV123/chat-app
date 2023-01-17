'use strict';

const functions = require("firebase-functions");
const Filter = require("bad-words");
const admin = require("firebase-admin");

admin.initializeApp();

const db = admin.firestore();

// Chat Filter
exports.chesseHaters = functions.firestore
  .document('messages/{msgId}')
  .onCreate(async (doc, ctx) => {
    const filter = new Filter();
    // List of banned words
    const newBadWords = ["cheese is bad", "i hate cheese", "i dont like cheese", "cheese is awful"];
    filter.addWords(...newBadWords);

    const { text, uid } = doc.data();

    // Clean the message and ban user
    if (filter.isProfane(text)) {
      const cleaned = filter.clean(text);
      await doc.ref.update({
        text: `Hey! You cant say ${cleaned}! Now you're banned 🤐!`,
      });

      await db.collection("banned").doc(uid).set({});
    }
  });