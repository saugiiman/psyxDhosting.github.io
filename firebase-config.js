// firebase-config.js

const firebaseConfig = {
  apiKey: "AIzaSyBpXFoOnbbVntQ7UEMSf08G_RCrBkLR1Fs",
  authDomain: "psyxdhosting.firebaseapp.com",
  projectId: "psyxdhosting",
  storageBucket: "psyxdhosting.firebasestorage.app",
  messagingSenderId: "902116217148",
  appId: "1:902116217148:web:ecb6e72830056019fe4e39"
};

// Initialize Firebase app
firebase.initializeApp(firebaseConfig);

// Make auth global
window.auth = firebase.auth();
