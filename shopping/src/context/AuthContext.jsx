import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
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
    
    useEffect( () => {
        const unsubscribe = onAuthStateChanged( 
            auth, 
            (currentUser) => {
                setUser(currentUser);
                setLoading(false);
            }
        )
        return unsubscribe
    }, [] );
    
    const value = {user, register}

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}