import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBD-EbTfLwe2rYeNIo3K1iHb4dxISMGjhw",
    authDomain: "test--routes.firebaseapp.com",
    databaseURL:
        "https://test--routes-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "test--routes",
    storageBucket: "test--routes.appspot.com",
    messagingSenderId: "421050487718",
    appId: "1:421050487718:web:46ab0299c74b37e45c3567",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};
