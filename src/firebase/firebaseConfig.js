import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCANfiWpdY80CJck8_aVh9CnNg_O0ns9bQ",
    authDomain: "olcha-clone-react1.firebaseapp.com",
    projectId: "olcha-clone-react1",
    storageBucket: "olcha-clone-react1.appspot.com",
    messagingSenderId: "224624579716",
    appId: "1:224624579716:web:604bcc358e121079009ed1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()
