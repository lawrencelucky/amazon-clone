import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDThkAJ0gsXvTcyohgAyZMjZ-dN38nIlQM',
  authDomain: 'clone-7507d.firebaseapp.com',
  projectId: 'clone-7507d',
  storageBucket: 'clone-7507d.appspot.com',
  messagingSenderId: '192505608174',
  appId: '1:192505608174:web:9ef71be781ae44489240ff',
  measurementId: 'G-G0YM1QT079',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
