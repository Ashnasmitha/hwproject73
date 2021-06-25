import * as firebase from 'firebase';

require('@firebase/firestore');
var firebaseConfig={
    apiKey: "AIzaSyDQcrnQjf4F2exqDDJ813eW3JxQvGQGuck",
    authDomain: "storyhub-5ccda.firebaseapp.com",
    projectId: "storyhub-5ccda",
    databaseURL: "https://storyhub-5ccda.firebaseio.com",
    storageBucket: "storyhub-5ccda.appspot.com",
    messagingSenderId: "918010905673",
    appId: "1:918010905673:web:d4668661a1aa4741b1ab98"
}

firebase.initializeApp(firebaseConfig);
export default firebase.firestore();