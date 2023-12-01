// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsJablVXsqhqWWceMa2uWgNlgOAgZ9620",
  authDomain: "moody-c82d7.firebaseapp.com",
  projectId: "moody-c82d7",
  storageBucket: "moody-c82d7.appspot.com",
  messagingSenderId: "754352070888",
  appId: "1:754352070888:web:298dd371300dbdf9ef295d",
  measurementId: "G-8WWNQP2PHJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);