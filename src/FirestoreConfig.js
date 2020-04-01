import firebase from "firebase";
import 'firebase/firestore';


const settings = {timestampsInSnapshots:true}
const config = {
    apiKey: "AIzaSyCbkerBIedjhPngd6I6pWPVejqIk3fu00k",
    authDomain: "guglito-23eda.firebaseapp.com",
    databaseURL: "https://guglito-23eda.firebaseio.com",
    projectId: "guglito-23eda",
    storageBucket: "guglito-23eda.appspot.com",
    messagingSenderId: "543149140733"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

// Get a Firestore instance
export const db = firebase.firestore();


