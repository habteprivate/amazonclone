// autentication
// Firebase 8 Compatibility Layer
import firebase from "firebase/compat/app"; 
import "firebase/compat/firestore"; // Compatibility Firestore
import "firebase/compat/auth"; // Compatibility Auth



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1kBcGw8cvFZKkpw44wZo3n6DCXILXREQ",
  authDomain: "clone-2024-68de1.firebaseapp.com",
  projectId: "clone-2024-68de1",
  storageBucket: "clone-2024-68de1.appspot.com",
  messagingSenderId: "789886314895",
  appId: "1:789886314895:web:7dbd6ab204a1df554183fa",
};



// / Initialize Firebase using compatibility layer
const app = firebase.initializeApp(firebaseConfig);

// Initialize Firestore and Auth using compatibility methods
const db = app.firestore(); // Compatibility Firestore initialization
export const auth = app.auth(); // Compatibility Auth initialization



