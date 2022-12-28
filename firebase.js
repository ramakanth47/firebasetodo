// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD69Rzoi8R_SdOA6nzr3Ok_rqXBXgxQVk0",
  authDomain: "todo-list-f2cbf.firebaseapp.com",
  databaseURL: "https://todo-list-f2cbf-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "todo-list-f2cbf",
  storageBucket: "todo-list-f2cbf.appspot.com",
  messagingSenderId: "57773289155",
  appId: "1:57773289155:web:11b61c53f69c88667e3c76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();