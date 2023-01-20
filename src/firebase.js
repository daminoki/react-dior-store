// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCrGOaWIoTh_sXsjlK006zFtzZV4tv96D0',
  authDomain: 'react-dior-store.firebaseapp.com',
  projectId: 'react-dior-store',
  storageBucket: 'react-dior-store.appspot.com',
  messagingSenderId: '812107734633',
  appId: '1:812107734633:web:494dbf0fbc1325a6528cf8'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
