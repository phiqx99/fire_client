import firebase from 'firebase';

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyAEMbbhk6MdfH35KRu3WXjg73Uip2xHdnc",
        authDomain: "sdc2021-570b7.firebaseapp.com",
        projectId: "sdc2021-570b7",
        storageBucket: "sdc2021-570b7.appspot.com",
        messagingSenderId: "509490472157",
        appId: "1:509490472157:web:d79506c1425deb4b11e734",
        measurementId: "G-Q42E8000YB"
    });
}

const FIREBASE_MESSAGING = firebase.messaging();

export function subscribeToNotifications() {
    FIREBASE_MESSAGING.requestPermission()
        .then(() => {
            FIREBASE_MESSAGING.getToken()
            console.log("🚀 ~ file: messaging.js ~ line 64 ~ .then ~ FIREBASE_MESSAGING.getToken()", FIREBASE_MESSAGING.getToken())
        })
        .catch((err) => {
            console.log("error getting permission :(");
        });
}

FIREBASE_MESSAGING.onMessage(function (payload) {
    console.log("Message received. ", payload);
});

(function () {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/firebase-messaging-sw.js');
    }
})();
