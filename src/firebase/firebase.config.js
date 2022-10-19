// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmvXqqbnPJZekYd1drxZ4s3QWAfxpQQME",
  authDomain: "dragon-news-e6a19.firebaseapp.com",
  projectId: "dragon-news-e6a19",
  storageBucket: "dragon-news-e6a19.appspot.com",
  messagingSenderId: "447691172747",
  appId: "1:447691172747:web:04fd589a9258168cc69d8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;