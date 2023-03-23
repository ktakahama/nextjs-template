// src/utils/Firebase/config.ts
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/functions";

import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_APP_ID,
  // measurementId: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_MEASUREMENT_ID, アナリティクス登録後に設定
};

// firebaseパッケージをAPI Keyで初期化
// Firebaseコンソールでさksウエイ他アプリとReactを紐づける処理
firebase.initializeApp(firebaseConfig);

// emulation用
if (process.env.NEXT_PUBLIC_FIREBASE_EMULATOR == "1") {
  firebase.auth().useEmulator("http://localhost:9099");
  firebase.storage().useEmulator("localhost", 8080);
  firebase.app().functions("asia-northeast1").useEmulator("localhost", 5001);
  firebase.firestore().useEmulator("localhost", 8080);
}

export const fireAuth = firebase.auth();
export const firestore = firebase.firestore();
export const functions = firebase.app().functions("asia-northeast1");

// ストレージ用のfirebaseモジュール
export const storage = firebase.storage();

// 初期化済みのfirebaseパッケージを確実に使用するためのexport defaultでfirebaseパッケージをexport
// eslint-disable-next-line import/no-default-export
export default firebase;

//TODO: firebaseのexport後で確認
