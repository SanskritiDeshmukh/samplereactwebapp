import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDMUMsaixvnwAojFe56jIxvxzJ36eM2OfU",
    authDomain: "reactfirebase-c9983.firebaseapp.com",
    projectId: "reactfirebase-c9983",
    storageBucket: "reactfirebase-c9983.appspot.com",
    messagingSenderId: "286647304063",
    appId: "1:286647304063:web:ecb360797311200e7d644a",
    measurementId: "G-ZMYWDDTFK8"
};
// const firebaseConfig = {
//     apiKey: "AIzaSyDWc3eDrFObCQuvAiRHGTLsfMAkweIPm6Y",
//     authDomain: "reactjsproject-7a079.firebaseapp.com",
//     databaseURL: "https://reactjsproject-7a079-default-rtdb.firebaseio.com",
//     projectId: "reactjsproject-7a079",
//     storageBucket: "reactjsproject-7a079.appspot.com",
//     messagingSenderId: "433522431357",
//     appId: "1:433522431357:web:c6798fc598115f647de814",
//     measurementId: "G-R9ZRH11D97"
// };
let Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;