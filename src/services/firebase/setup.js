// import firebase from "firebase";
// import * as firebaseui from 'firebaseui';
const firebase = require('firebase');
const firebaseui = require('firebaseui');  //autentificacion

const config = {
    apiKey: "AIzaSyBcvurJQnsf9XbCpP_2At5DR0F9vBWdAc8",
    authDomain: "fir-react-8e197.firebaseapp.com",
    databaseURL: "https://fir-react-8e197.firebaseio.com",
    projectId: "fir-react-8e197",
    storageBucket: "fir-react-8e197.appspot.com",
    messagingSenderId: "595025502192",
    appId: "1:595025502192:web:00c39c762afbc0e5e1c735",
    measurementId: "G-HZBDF5SP26"
};


//autentificacion
const uiConfig = {
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    signInSuccessUrl: '/',
};


// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();


export const auth = firebase.auth();
export const db = firebase.firestore();

// db.settings({
//     timestampsInSnapshots: true
// });


//autentificacion
export const startUi = (elementId) => {
    const ui = new firebaseui.auth.AuthUI(auth);
    ui.start(elementId, uiConfig)
}