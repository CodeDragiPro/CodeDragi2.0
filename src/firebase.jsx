import { initializeApp } from "firebase/app";
import { useState, useEffect, useContext, createContext } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "codedragi-98b4a.firebaseapp.com",
    projectId: "codedragi-98b4a",
    storageBucket: "codedragi-98b4a.appspot.com",
    messagingSenderId: "152074744674",
    appId: "1:152074744674:web:982dc5f57a50a53be0723b",
    measurementId: "G-B7RXT6474P"
};

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
    const [user, setUser] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, setUser, setError);
        return unsubscribe;
    }, []);

    return <AuthContext.Provider value={{ user, error }} {...props} />;
}

export const useAuthState = () => {
    const auth = useContext(AuthContext);
    return { ...auth, isAuthenticated: auth.user != null };
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

export const signInWithGoogle = async () => {
    try {
        await signInWithPopup(auth, provider);
    } catch (error) {
        console.error("Erreur lors de la connexion avec Google:", error);
    }
}

export default app;
