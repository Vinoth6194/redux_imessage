import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDCUAypDrhBH7YBT3-h-VBWq4TWOmxRD40",
  authDomain: "redux-imessage.firebaseapp.com",
  projectId: "redux-imessage",
  storageBucket: "redux-imessage.appspot.com",
  messagingSenderId: "451804994198",
  appId: "1:451804994198:web:700a2df79517026fa500b7",
  measurementId: "G-FNWQ00SFDK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
