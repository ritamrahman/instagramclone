import firebase from 'firebase';

const firebase = firebase.initializeApp({
  apiKey: 'AIzaSyDw6w2iPuWEMwRIEZgUKmdvGKpuIZmDMsM',
  authDomain: 'instagram-clone-app-312f8.firebaseapp.com',
  databaseURL: 'https://instagram-clone-app-312f8.firebaseio.com',
  projectId: 'instagram-clone-app-312f8',
  storageBucket: 'instagram-clone-app-312f8.appspot.com',
  messagingSenderId: '380371004221',
  appId: '1:380371004221:web:d311ef0c9af56dc93cf354',
  measurementId: 'G-JJNETRYJ4D',
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
