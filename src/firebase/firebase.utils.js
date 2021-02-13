import firebase from 'firebase/app';
import 'firebase/firestore'; // for DB
import 'firebase/auth'; // for Auth

const config = {
  apiKey: "AIzaSyBp_IqINU0zSVlFAi6OFP6vchaRyJRuoKU",
  authDomain: "crwn-db-8fec8.firebaseapp.com",
  projectId: "crwn-db-8fec8",
  storageBucket: "crwn-db-8fec8.appspot.com",
  messagingSenderId: "855106551131",
  appId: "1:855106551131:web:53fec8dd149fbd69d0ee7e",
  measurementId: "G-TW7PK2LBDJ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;