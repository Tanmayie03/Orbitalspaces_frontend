import { initializeApp } from "firebase/app"
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const firebaseconfig = {
    apiKey: "AIzaSyBEzyH4vsEVCm8StuqiEhw0c3Cr6zmthko",
    authDomain: "orbital-spaces.firebaseapp.com",
    projectId: "orbital-spaces",
    storageBucket: "orbital-spaces.appspot.com",
    messagingSenderId: "629567813849",
    appId: "1:629567813849:web:e66ec376c57ed59cefa6c8",
    measurementId: "G-HR91MNXWLL"
};
const app = initializeApp(firebaseconfig);
export const auth = getAuth(app)


