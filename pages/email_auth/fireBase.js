var fireBase = fireBase || firebase;
var hasInit = false;
var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
  apiKey: "AIzaSyDteONxAhfmva5yDgxgxebjIP4je5IHVbI",
  authDomain: "tracking-d23da.firebaseapp.com",
  databaseURL: "https://tracking-d23da-default-rtdb.firebaseio.com",
  projectId: "tracking-d23da",
  storageBucket: "tracking-d23da.appspot.com",
  messagingSenderId: "542283883500",
  appId: "1:542283883500:web:6ed68882a824cd095dd6c9",
  measurementId: "G-W4V9Z4H5H4"
};


if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}


