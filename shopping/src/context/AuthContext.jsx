import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";

export const AuthContext = createContext();

export default function AuthProvider({ children }){
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // console.log("User:",user)
    // console.log("Loading:", loading)

    const register = async (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = async(email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = async() => {
        return signOut(auth);
    }
    
    useEffect( () => {
        const unsubscribe = onAuthStateChanged( 
            auth, 
            (currentUser) => {
                setUser(currentUser);
                setLoading(false);
            }
        )
        return () => unsubscribe();   //cuz firebase returns a function
    }, [] );
    
    const value = {user, loading, register, login, logout}

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}