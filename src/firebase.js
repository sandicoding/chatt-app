import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaxIBS0r8HsVMrF0s6au-oQKaA7SUWagA",
  authDomain: "slack-clone-35fa5.firebaseapp.com",
  projectId: "slack-clone-35fa5",
  storageBucket: "slack-clone-35fa5.appspot.com",
  messagingSenderId: "740879270896",
  appId: "1:740879270896:web:c6003b3defeeddc74ad335",
  measurementId: "G-E3PEGS7Z2F"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth , provider }
export default db;
