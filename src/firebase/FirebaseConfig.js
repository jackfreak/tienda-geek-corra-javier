/**
 * FirebaseConfig module.
 *
 * @author Javier Alejandro Corra
 */

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Our web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyBHc8x_e54JxVbM24tWX2u2CoWU7aa80_o",
    authDomain: "tienda-geek-coderhouse.firebaseapp.com",
    projectId: "tienda-geek-coderhouse",
    storageBucket: "tienda-geek-coderhouse.appspot.com",
    messagingSenderId: "697635311112",
    appId: "1:697635311112:web:71a1801bb72283a9e60bbd"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const firestoreDB = getFirestore(firebaseApp);

// Initialize Firebase Authentication and get a reference to the service
const firebaseAuth = getAuth(firebaseApp);

// > To start the emulator run in a terminal: firebase emulators:start --only auth
// > To view the Firebase Emulator Suite go to: localhost:4000/auth
//connectAuthEmulator(auth, 'http://localhost:9099');

export {
    firestoreDB,
    firebaseAuth,
}
