import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBLOlGiwb4yL-44E7khuABJsWlyr9LIqxg",
  authDomain: "catch-of-the-day-alex-dd663.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-alex-dd663.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };
//this is a default export
export default base;
