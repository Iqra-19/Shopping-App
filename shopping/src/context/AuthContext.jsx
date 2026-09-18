import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";


export const AuthContext = createContext();

export default function AuthProvider({ children }){
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // console.log("User:",user)
    // console.log("Loading:", loading)

    const register = async (name, email, password) => {
        
        const response = await createUserWithEmailAndPassword(auth, email, password);
        //console.log("Register:",response);

        const user = response.user;
        const userRef = doc(db, "users", user.uid);
        await setDoc(userRef, {
            name: name, 
            email: email,
            createdAt: serverTimestamp()
        });

        await updateProfile(response.user, {
            displayName: name
        });
        
        return response;
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