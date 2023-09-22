import firebase from 'firebase/app';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAwmdFXOev8TotS5tSDwdH8twKYmVmrD2I",
    authDomain: "systemdesk-47142.firebaseapp.com",
    projectId: "systemdesk-47142",
    storageBucket: "systemdesk-47142.appspot.com",
    messagingSenderId: "675477570293",
    appId: "1:675477570293:web:952586e084d9b01094bbbc",
    measurementId: "G-LEH1TYE22M"
  };
  
  // Initialize Firebase
  
  const app = firebase.default.initializeApp(firebaseConfig);
  
  export default firebaseConfig;