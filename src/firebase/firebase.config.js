// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACjg1eIfYScocfemf-8ghJfo3JqL1qTjY",
  authDomain: "mern-online-library.firebaseapp.com",
  projectId: "mern-online-library",
  storageBucket: "mern-online-library.appspot.com",
  messagingSenderId: "819906934591",
  appId: "1:819906934591:web:27d43bc0c26cceffa1858a",
//   measurementId: "G-EWJZT0WFL2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;
