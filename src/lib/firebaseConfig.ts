import firebase, { initializeApp } from 'firebase/app';
import 'firebase/auth'; // Import Firebase Auth if you're using it
import 'firebase/firestore'; // Import Firestore if you're using it
import { getFirestore } from 'firebase/firestore';

// Your Firebase config object (Replace with your actual config from the Firebase Console)
/*const firebaseConfig = {
    apiKey: "AIzaSyDNuhy2yAOwHMjrpdTw2p9L2r_FBPKjxaI",
    authDomain: "readingplatform-bb023.firebaseapp.com",
    projectId: "readingplatform-bb023",
    storageBucket: "readingplatform-bb023.firebasestorage.app",
    messagingSenderId: "482757714871",
    appId: "1:482757714871:web:44f3eb28f229b970757e32"
  };
*/
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


export default db ;



