// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCTBvXgIaqruNFibmDAYcV0kOi_TXiPhUk',
  authDomain: 'demofirebase-c7c3c.firebaseapp.com',
  projectId: 'demofirebase-c7c3c',
  storageBucket: 'demofirebase-c7c3c.firebasestorage.app',
  messagingSenderId: '158495518932',
  appId: '1:158495518932:web:90d0081ce44b8f640b4b41',
  measurementId: 'G-MK4TX3F28S',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;