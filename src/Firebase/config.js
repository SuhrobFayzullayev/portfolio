import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyD5DwFEIWr5EdUTMENnORLpa3FtpugOcjM",
  authDomain: "portfolio-3882e.firebaseapp.com",
  projectId: "portfolio-3882e",
  storageBucket: "portfolio-3882e.appspot.com",
  messagingSenderId: "951282569469",
  appId: "1:951282569469:web:8b3f62fb811f98495a2e94",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export default db;
