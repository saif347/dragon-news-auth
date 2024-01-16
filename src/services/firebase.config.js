// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQCmJMhRbboMjrO6hXl5-wON5QThXtF9Q",
  authDomain: "dragon-news-8079e.firebaseapp.com",
  projectId: "dragon-news-8079e",
  storageBucket: "dragon-news-8079e.appspot.com",
  messagingSenderId: "889385046304",
  appId: "1:889385046304:web:2b69df70396a302b834745"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth