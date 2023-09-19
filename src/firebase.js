// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsv0HUxzlac5DNEdcFLkD46VpaBF82I9g",
  authDomain: "nest-school-project.firebaseapp.com",
  projectId: "nest-school-project",
  storageBucket: "nest-school-project.appspot.com",
  messagingSenderId: "985596420144",
  appId: "1:985596420144:web:fd432ef93dca367a7f4df5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default auth;