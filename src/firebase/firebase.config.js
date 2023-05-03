// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHIAgMq_XKM32XZYajAXf4SnQ7ExytKWI",
  authDomain: "modern-chef-recipe-client.firebaseapp.com",
  projectId: "modern-chef-recipe-client",
  storageBucket: "modern-chef-recipe-client.appspot.com",
  messagingSenderId: "1094223921300",
  appId: "1:1094223921300:web:b493c8ee3d41f9580ff481"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app