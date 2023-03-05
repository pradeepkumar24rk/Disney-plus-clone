import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"
// import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyACQo8XRS_4kV0Z9CWDMELV36B5pqIOcYU",
  authDomain: "clone-d8c38.firebaseapp.com",
  projectId: "clone-d8c38",
  storageBucket: "clone-d8c38.appspot.com",
  messagingSenderId: "346888848625",
  appId: "1:346888848625:web:48dd9dade02c1bedc25550"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
