// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMc3yOyreyyPtFnUlRov9SiQp-io4rTjI",
  authDomain: "influenxing-app-bcd5f.firebaseapp.com",
  projectId: "influenxing-app-bcd5f",
  storageBucket: "influenxing-app-bcd5f.appspot.com",
  messagingSenderId: "638142985641",
  appId: "1:638142985641:web:44ff67919e112a281940b8",
  measurementId: "G-YJLN2DSZV2",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth();
