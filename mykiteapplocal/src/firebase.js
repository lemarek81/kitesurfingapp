
import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCu0BHnOsHqzVStqcifRDNFwIvq4TLSs_8",
    authDomain: "kitesurfapplication.firebaseapp.com",
    projectId: "kitesurfapplication",
    storageBucket: "kitesurfapplication.appspot.com",
    messagingSenderId: "716097959739",
    appId: "1:716097959739:web:69f39ae86410e12183291e"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;