import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/database"
// if you have auth then use auth. refer documentaion

// pass your credentials here

var firebaseConfig = {
    apiKey: "API_KEY",
    authDomain: "domain",
    databaseURL: "dburl",
    projectId: "project-name",
    storageBucket: "react-firebase-tutorial-masai.appspot.com",
    messagingSenderId: "465926497989",
    appId: "appid"
  };

firebase.initializeApp(firebaseConfig)

// firestore
const db = firebase.firestore()

// collection
export const fBaseTasks = db.collection('tasks')
