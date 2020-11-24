import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyAkFbGsjvL6YmrXPWnuLEgHR0zvyVi0WsE",
    authDomain: "crudproject-a25b4.firebaseapp.com",
    databaseURL: "https://crudproject-a25b4.firebaseio.com",
    projectId: "crudproject-a25b4",
    storageBucket: "crudproject-a25b4.appspot.com",
    messagingSenderId: "211622587374",
    appId: "1:211622587374:web:7d6028fbd010f0beaefcff",
    measurementId: "G-MMH7942KHS"
  };
  // Initialize Firebase
 var fireDb= firebase.initializeApp(firebaseConfig);

 export default   fireDb.database().ref();