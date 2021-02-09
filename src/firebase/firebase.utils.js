import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAX-2HHwS3Ccbko1kVicgyMp46XDrejY-A",
  authDomain: "crwn-db-8d60e.firebaseapp.com",
  projectId: "crwn-db-8d60e",
  storageBucket: "crwn-db-8d60e.appspot.com",
  messagingSenderId: "567680014995",
  appId: "1:567680014995:web:f048f3a466c37aa92c8b66",
  measurementId: "G-SVH7CKGSPJ",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
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
