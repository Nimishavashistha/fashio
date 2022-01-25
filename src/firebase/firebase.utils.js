import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCMz1xflxstsyMVRNey6Ykn7zIWzbzSB3Y",
    authDomain: "fashio-a5310.firebaseapp.com",
    projectId: "fashio-a5310",
    storageBucket: "fashio-a5310.appspot.com",
    messagingSenderId: "33644825537",
    appId: "1:33644825537:web:e871babd1b7df41be33d40",
    measurementId: "G-GRQ1035RXM"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
