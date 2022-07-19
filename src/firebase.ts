import { initializeApp } from 'firebase/app';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCOrQ1t8x8xh4X-karzUtfaL2FUw132ijI",
    authDomain: "lesbasesdudev.firebaseapp.com",
    projectId: "lesbasesdudev",
    storageBucket: "lesbasesdudev.appspot.com",
    messagingSenderId: "830500768255",
    appId: "1:830500768255:web:4cf1207d6f778bf249bfca"
};

initializeApp(firebaseConfig);

const db = getFirestore();

export async function addUser(email: string) {
    const docRef = await addDoc(collection(db, "users"), {
        email,
    });

    console.log("Document written with ID: ", docRef.id);
}




