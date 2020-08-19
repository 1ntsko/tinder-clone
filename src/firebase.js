import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD5U6EXGSkwI_vgt62YE1bf4jzo94LpsHY",
    authDomain: "tinder-clone-9aab1.firebaseapp.com",
    databaseURL: "https://tinder-clone-9aab1.firebaseio.com",
    projectId: "tinder-clone-9aab1",
    storageBucket: "tinder-clone-9aab1.appspot.com",
    messagingSenderId: "140468357058",
    appId: "1:140468357058:web:f75b6a0b3576675236b85b",
    measurementId: "G-JD74VFDDD0"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;