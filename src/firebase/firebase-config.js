import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDLNZ16GYG3eNvPVxTOwlNDMH8e72w6wNM",
    authDomain: "react-app-cursos-a3faf.firebaseapp.com",
    projectId: "react-app-cursos-a3faf",
    storageBucket: "react-app-cursos-a3faf.appspot.com",
    messagingSenderId: "90325585234",
    appId: "1:90325585234:web:9aa15cb8bd9ed0b68e3e8b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


//base de datos
const db = firebase.firestore();
//autenticacion con google
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();;

export {
    db,
    googleAuthProvider,
    firebase
};