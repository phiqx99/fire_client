
importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-messaging.js')

firebase.initializeApp({
    apiKey: "AIzaSyAEMbbhk6MdfH35KRu3WXjg73Uip2xHdnc",
    authDomain: "sdc2021-570b7.firebaseapp.com",
    projectId: "sdc2021-570b7",
    storageBucket: "sdc2021-570b7.appspot.com",
    messagingSenderId: "509490472157",
    appId: "1:509490472157:web:d79506c1425deb4b11e734",
    measurementId: "G-Q42E8000YB"
}); //These are example configuration value


const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.body,
    icon: payload.data.icon
  };
  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});
