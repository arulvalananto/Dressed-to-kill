import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBprPHtoiifjra2x5W4esCZJBWNlzIhIqk",
    authDomain: "dresssed-to-kill.firebaseapp.com",
    projectId: "dresssed-to-kill",
    storageBucket: "dresssed-to-kill.appspot.com",
    messagingSenderId: "903299166988",
    appId: "1:903299166988:web:d840a824b00e245ecd4f29",
    measurementId: "G-8V9PNVKHB4",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
