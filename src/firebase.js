// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDkZWfYTnlKRNPAuwX1pGKxgQXqwxKsYoM",
    authDomain: "clone-2ff3e.firebaseapp.com",
    projectId: "clone-2ff3e",
    storageBucket: "clone-2ff3e.appspot.com",
    messagingSenderId: "390941970451",
    appId: "1:390941970451:web:87ace5e8c7faf58c4c6fe6",
    measurementId: "G-D43Z1WJ30J"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth};  
