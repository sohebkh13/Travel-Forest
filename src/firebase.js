import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDt5K6vgixVDwaRrv7wpxA6797I0NTio14",
    authDomain: "travel-forest.firebaseapp.com",
    projectId: "travel-forest",
    storageBucket: "travel-forest.appspot.com",
    messagingSenderId: "398953744767",
    appId: "1:398953744767:web:1aa048ea2ca7ac69df324a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

var db_contact = firebaseApp.firestore()
var db_agent = firebaseApp.firestore()

export {db_contact}
export {db_agent}

export {auth}
export default db