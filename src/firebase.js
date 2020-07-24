import { useState, useEffect} from 'react'
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

var config = {
    apiKey: "AIzaSyAAnsvsKvdV-I3GRlyo71IgY_Iqdl5EYBQ",
    authDomain: "boginoo-shawty.firebaseapp.com",
    databaseURL: "https://boginoo-shawty.firebaseio.com",
    projectId: "boginoo-shawty",
    storageBucket: "boginoo-shawty.appspot.com",
    messagingSenderId: "950908326564",
    appId: "1:950908326564:web:182b4f7ea7bb079faacc31"
  };

  export const useFirebase = () => {
    let [state, setState] = useState({ firebase });
    useEffect(() => {
        let app;
        if (!firebase.apps.length) {
            app = firebase.initializeApp(config);
        }
        let auth = firebase.auth(app);
        let firestore = firebase.firestore(app);
        setState({ app, auth, firebase, firestore });
    }, []);
    return state;
  };

  export const useSimple = () => {
    let [c, setC] = useState(1);

    useEffect(() => {
      setTimeout(() => {
        setC(2);
      }, 6000);
    })

    return c;
}

