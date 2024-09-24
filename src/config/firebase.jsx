import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD1YWHxD6pBTWPpiW6i0dlMbJ5G7SUiuI8",
  authDomain: "authentication-be2ea.firebaseapp.com",
  projectId: "authentication-be2ea",
  storageBucket: "authentication-be2ea.appspot.com",
  messagingSenderId: "525961771438",
  appId: "1:525961771438:web:bc6709d8099b83e770703f",
  measurementId: "G-ZJT3RTKZPJ"
};
const app = initializeApp(firebaseConfig);
 export const auth=getAuth(app)
export const provider=new GoogleAuthProvider()