const firebaseConfig = {


    apiKey: "AIzaSyCwDWYd20S-uwLkB4wv-vgQCm8FAzguToQ",
    authDomain: "paydaddie-3463c.firebaseapp.com",
    projectId: "paydaddie-3463c",
    storageBucket: "paydaddie-3463c.appspot.com",
    messagingSenderId: "968275713127",
    appId: "1:968275713127:web:ff49610b20397c57a3c8c2",
    measurementId: "G-2XXE49VGMX"


};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();