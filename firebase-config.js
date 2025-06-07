// firebase-config.js

// Your Firebase config (replace with yours)
const firebaseConfig = {
  apiKey: "AIzaSyBpXFoOnbbVntQ7UEMSf08G_RCrBkLR1Fs",
  authDomain: "psyxdhosting.firebaseapp.com",
  projectId: "psyxdhosting",
  storageBucket: "psyxdhosting.firebasestorage.app",
  messagingSenderId: "902116217148",
  appId: "1:902116217148:web:ecb6e72830056019fe4e39"
};

// Initialize Firebase App
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Auth **and assign to a global variable**
const auth = firebase.auth();
