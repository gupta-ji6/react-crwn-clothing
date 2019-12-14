import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDokaIB-lO71jsIR-LT0YAU5fn2tcozTuk",
  authDomain: "crwn-db-56d45.firebaseapp.com",
  databaseURL: "https://crwn-db-56d45.firebaseio.com",
  projectId: "crwn-db-56d45",
  storageBucket: "crwn-db-56d45.appspot.com",
  messagingSenderId: "718434523101",
  appId: "1:718434523101:web:4f9e01a98330d64bcf4834",
  measurementId: "G-450BJWMGN9"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // if user is not signed in, then return null
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  // console.log(snapshot);

  // if it's snapshot i.e. user with this user ID doesn't exixts in firestore, then we need to create it

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log("error creating a user", err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
