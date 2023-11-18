
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAP8-TTQuX-7ijDe4bGXQfB77itnCvEqSg",
  authDomain: "harmony-634cd.firebaseapp.com",
  projectId: "harmony-634cd",
  storageBucket: "harmony-634cd.appspot.com",
  messagingSenderId: "46025737483",
  appId: "1:46025737483:web:972df98b42a99e8f450e0e",
  measurementId: "G-WE5G5DP4M7"
};
 
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth(app);

export const googleProvider=new GoogleAuthProvider();