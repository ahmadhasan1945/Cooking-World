import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD0Bf3kBenDgsQg5LO853Zzv4_eo5kH72Q",
    authDomain: "cooking-world-93d81.firebaseapp.com",
    projectId: "cooking-world-93d81",
    storageBucket: "cooking-world-93d81.appspot.com",
    messagingSenderId: "535375055981",
    appId: "1:535375055981:web:a9eae8d4e819f83518c364"
  }

  // initialize firebase
  firebase.initializeApp(firebaseConfig)

  // initialize services
  const projectFirestore = firebase.firestore()

  export { projectFirestore }