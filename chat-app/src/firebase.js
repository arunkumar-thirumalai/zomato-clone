import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDAjtIc6diiQeO9qNkd5RUR_FGtb2eBzpY",
    authDomain: "unichat-21545.firebaseapp.com",
    projectId: "unichat-21545",
    storageBucket: "unichat-21545.appspot.com",
    messagingSenderId: "21543969258",
    appId: "1:21543969258:web:2e5db90e38e60f795cd293"
}).auth();
