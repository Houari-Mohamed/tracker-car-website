const firebaseConfig = {
    apiKey: "AIzaSyDteONxAhfmva5yDgxgxebjIP4je5IHVbI",
    authDomain: "tracking-d23da.firebaseapp.com",
    projectId: "tracking-d23da",
    storageBucket: "tracking-d23da.appspot.com",
    messagingSenderId: "542283883500",
    appId: "1:542283883500:web:6ed68882a824cd095dd6c9",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

let cloudDB = firebase.firestore();
const auth = firebase.auth();