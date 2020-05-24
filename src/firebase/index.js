import firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyDKyNGUTnb0tK4UdSNx0EguiRU5sFvNYN4",
    authDomain: "react-drawer-a438f.firebaseapp.com",
    databaseURL: "https://react-drawer-a438f.firebaseio.com",
    projectId: "react-drawer-a438f",
    storageBucket: "react-drawer-a438f.appspot.com",
    messagingSenderId: "1074366238964",
    appId: "1:1074366238964:web:9ff5c159d460acf4858ea1",
    measurementId: "G-BN8B0RKVMC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  const storage = firebase.storage();

  export {
      
        storage, firebase as default

  }