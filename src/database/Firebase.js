import * as firebase from 'firebase';


const firebaseConfig = {
  apiKey: 'AIzaSyDsnQ8AUUsXPBW-bV5asePbe9o78CGNApU',
  authDomain: 'asystentagenta-a0d7b.firebaseapp.com',
  databaseURL: 'https://asystentagenta-a0d7b-default-rtdb.europe-west1.firebasedatabase.app/',
  projectId: 'asystentagenta-a0d7b',
  storageBucket: 'asystentagenta-a0d7b.appspot.com',
  messagingSenderId: '538139465984',
  appId: '1:538139465984:android:a610200abd739acf767be5',
};

firebase.initializeApp(firebaseConfig);

/* Ref https://stackoverflow.com/a/67647563 */
firebase.firestore().settings({ experimentalForceLongPolling: true });

export default firebase;