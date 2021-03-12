import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAWE1GCQLdT6-fjIHmTtrhYJGB3FlcF5wI",
  authDomain: "blubrry-db.firebaseapp.com",
  projectId: "blubrry-db",
  storageBucket: "blubrry-db.appspot.com",
  messagingSenderId: "237742195175",
  appId: "1:237742195175:web:16ee8534af6ec1b0f33d42",
  measurementId: "G-S8L0PG7TSS",
};

// Initialize firebase db with the details in the config
firebase.initializeApp(config);

// Bring in auth and make it available to class wanting to use it
export const auth = firebase.auth();
// Bring in firestore
export const firestore = firebase.firestore();

// Initialize auth provider
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

// Initialize sign in method and pass in provider
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// In case there's something else needed from the library
export default firebase;

