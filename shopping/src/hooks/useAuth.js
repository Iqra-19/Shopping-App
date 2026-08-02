import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export function useAuth() {
  
    const context = useContext(AuthContext); 
    //It returns whatever AuthContext.Provider gives it.
  
     if (!context) {
      throw new Error(
          "useAuth must be used within AuthProvider"
    );
  }

    return context;
}

