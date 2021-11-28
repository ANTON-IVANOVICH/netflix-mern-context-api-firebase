import firebase from 'firebase/app';
import 'firebase/firebase-storage';

const firebaseConfig = {
  apiKey: process.env.APP_KEY,
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: ''
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
