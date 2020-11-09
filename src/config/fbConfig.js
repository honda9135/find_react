import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
import firebaseConfig from './fbParam.js'

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore()

export default firebase;