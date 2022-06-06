import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, updateCurrentUser } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCvQ3Pnmp0qs8oedywXAt6yuqjbWfZbiEY",
    authDomain: "yazilimprojesi-76d7b.firebaseapp.com",
    projectId: "yazilimprojesi-76d7b",
    storageBucket: "yazilimprojesi-76d7b.appspot.com",
    messagingSenderId: "860317802909",
    appId: "1:860317802909:web:e10920d39d181c8c098f74",
    measurementId: "G-39EGQS9PHQ"
  };

  const app = initializeApp(firebaseConfig);
  getAnalytics(app);
  const auth = getAuth(app);

  export const signUp = async (name, email, password) => {
   await createUserWithEmailAndPassword(auth, email, password);
   await updateCurrentUser(auth, {displayName: name})
  };
  export const signIn = (email, password) => {
      
};