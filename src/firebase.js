import firebase from 'firebase/app';
import 'firebase/messaging';
var firebaseConfig = {
    apiKey: "AIzaSyAEMbbhk6MdfH35KRu3WXjg73Uip2xHdnc",
    authDomain: "sdc2021-570b7.firebaseapp.com",
    projectId: "sdc2021-570b7",
    storageBucket: "sdc2021-570b7.appspot.com",
    messagingSenderId: "509490472157",
    appId: "1:509490472157:web:d79506c1425deb4b11e734",
    measurementId: "G-Q42E8000YB"
};
firebase.initializeApp(firebaseConfig);
console.log("🚀 ~ file: firebase2.js ~ line 2 ~ firebase", firebase)
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}
const messaging = firebase.messaging();
console.log("🚀 ~ file: firebase.js ~ line 20 ~ messaging", messaging.getToken())
export const getToken = (setTokenFound) => {
    return messaging.getToken({ vapidKey: 'AIzaSyAEMbbhk6MdfH35KRu3WXjg73Uip2xHdnc' }).then((currentToken) => {
        if (currentToken) {
            console.log('current token for client: ', currentToken);
            setTokenFound(true);
            // Track the token -> client mapping, by sending to backend server
            // show on the UI that permission is secured
        } else {
            console.log('No registration token available. Request permission to generate one.');
            setTokenFound(false);
            // shows on the UI that permission is required 
        }
    }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // catch error while creating client token
    });
}
export const onMessageListener = () =>
    new Promise((resolve) => {
        messaging.onMessage((payload) => {
            resolve(payload);
        });
    });