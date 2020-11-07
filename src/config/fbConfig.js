import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyB9SgM5QJ9lDDRc4jxCNuuM8e35OpYcSdI",
    authDomain: "findreact-6d035.firebaseapp.com",
    databaseURL: "https://findreact-6d035.firebaseio.com",
    projectId: "findreact-6d035",
    storageBucket: "findreact-6d035.appspot.com",
    messagingSenderId: "454198644716",
    appId: "1:454198644716:web:7a9d941a3a1f67be01bac9",
    measurementId: "G-N3WFRRL3WL"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore()

export default firebase;