import * as firebaseAdmin from "firebase-admin";
import * as functions from "firebase-functions";

require("firebase-functions/lib/logger/compat");

export const processSignUp = functions
  .region("asia-northeast1")
  .auth.user()
  .onCreate((user) => {
    const customClaims = {
      "https://hasura.io/jwt/claims": {
        "x-hasura-default-role": "project_owner",
        "x-hasura-allowed-roles": ["project_owner"],
        "x-hasura-user-id": user.uid,
      },
    };

    // userのトークンにカスタムクレームを追加する
    return firebaseAdmin
      .auth()
      .setCustomUserClaims(user.uid, customClaims)
      .then(() => {
        return firebaseAdmin.firestore().collection("users").doc(user.uid).set({
          refreshTime: firebaseAdmin.firestore.FieldValue.serverTimestamp(),
        });
      });
  });
