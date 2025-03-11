// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0NQF7tHz94dziOhJCbJ-DywC8-1lSBoA",
  authDomain: "my-netflix-5b8f8.firebaseapp.com",
  projectId: "my-netflix-5b8f8",
  storageBucket: "my-netflix-5b8f8.firebasestorage.app",
  messagingSenderId: "121654984972",
  appId: "1:121654984972:web:6795baf872d138ba578929",
  measurementId: "G-10W4B8KP4Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();