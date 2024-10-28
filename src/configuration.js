// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAibblEpxxdZzN4TdAho63dXUdTRZyJlVc",
  authDomain: "fir-a0962.firebaseapp.com",
  databaseURL:
    "https://fir-a0962-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-a0962",
  storageBucket: "fir-a0962.appspot.com",
  messagingSenderId: "526628032178",
  appId: "1:526628032178:web:c7cb9c89ea1857621103ab",
  measurementId: "G-PNKJ4BNLDM",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const cong = initializeApp(firebaseConfig);

export  default cong;