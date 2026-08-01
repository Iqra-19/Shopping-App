import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase/firebase"

function Register() {
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!email, !password){
            alert("Please fill all fields")
        }

        try{
            await createUserWithEmailAndPassword(auth, email, password);

            alert("Account created sucessfully");
            navigate('/login')

        }
        catch(error){
            if(error.code === 'auth/email-already-in-use'){
                alert("Email already exist");
            }
            else if(error.code === 'auth/weak-password'){
                alert("Password must be at least 6 character")
            }
            else if(error.code === 'auth/invalid-email'){
                alert("Invalid email address")
            }
            else{
                alert(error.message);
            }

        }
    }

    return (
    <>
        <h2>Register</h2>
        
        <form onSubmit={handleSubmit}>
            <input 
                type="email" 
                placeholder="Enter Email"
                value={email}
                onChange={ (e) => setEmail(e.target.value) }
                required
            />

            <input 
                type="password" 
                placeholder="Enter password"
                value={password}
                onChange={ (e) => setPassword(e.target.value) }
                required
            />

            <button type="submit"> Register </button>
        </form>

    </>
  )
}

export default Register