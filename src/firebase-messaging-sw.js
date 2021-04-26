import firebase from 'firebase/app';

import 'firebase/messaging';

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: "AIzaSyAEMbbhk6MdfH35KRu3WXjg73Uip2xHdnc",
    authDomain: "sdc2021-570b7.firebaseapp.com",
    projectId: "sdc2021-570b7",
    storageBucket: "sdc2021-570b7.appspot.com",
    messagingSenderId: "509490472157",
    appId: "1:509490472157:web:d79506c1425deb4b11e734",
    measurementId: "G-Q42E8000YB"
};
// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('../firebase-messaging-sw.js')
//         .then(function (registration) {
//             console.log('Registration successful, scope is:', registration.scope);
//         }).catch(function (err) {
//             console.log('Service worker registration failed, error:', err);
//         });
// }
// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
// } else {
//     firebase.app(); // if already initialized, use that one
//     console.log("🚀 ~ file: firebase-messaging-sw.js ~ line 38 ~ firebase.app()", firebase.app())
// }
// Retrieve firebase messaging
const messaging = firebase.messaging();
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
// console.log("🚀 ~ file: firebase-messaging-sw.js ~ line 32 ~ msg", msg)

// messaging.onBackgroundMessage(function (payload) {
//     console.log('Received background message ', payload);

//     const notificationTitle = payload.notification.title;
//     const notificationOptions = {
//         body: payload.notification.body,
//     };
//     window.self.registration.showNotification(notificationTitle,
//         notificationOptions);
// });