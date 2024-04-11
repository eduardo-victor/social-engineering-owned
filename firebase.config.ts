// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTFlOdcoNZvjWk3pfEzESuwrQqXsmAUL8",
  authDomain: "soc-eng-owned.firebaseapp.com",
  projectId: "soc-eng-owned",
  storageBucket: "soc-eng-owned.appspot.com",
  messagingSenderId: "337962754647",
  appId: "1:337962754647:web:3a2d5fb76a9b61441a7912"
};

// Inicialize o Firebase
const app = firebase.initializeApp(firebaseConfig);

// Exporte o Cloud Firestore diretamente da instância do Firebase
export const firestore = app.firestore();