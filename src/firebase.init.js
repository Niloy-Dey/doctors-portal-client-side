// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_API_KEY,
  authDomain:process.env.REACT_APP_AUTH_DOMAIN ,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket:process.env.REACT_APP_STORAGE_BUCKET ,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,

 /*  apiKey: "AIzaSyDCdnE6aon9yttpu9JBnOzsEgn-B67pvoI",
  authDomain: "doctors-portal-535fa.firebaseapp.com",
  projectId: "doctors-portal-535fa",
  storageBucket: "doctors-portal-535fa.appspot.com",
  messagingSenderId: "4976188358",
  appId: "1:4976188358:web:4a943d573891331937f0c7", */
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth ;