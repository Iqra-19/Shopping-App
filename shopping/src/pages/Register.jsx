import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";
import { useAuth } from "../hooks/useAuth";

function Register() {
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const {register} = useAuth();

    const handleSubmit =  async (e) => {
        e.preventDefault();

        setError("");

        if (!email || !password || !confirmPassword) {
            setError("All fields are required.");
            return;
        }
        
        if(password !== confirmPassword){
            setError("Password do not match");
            return
        }
        
        try{
            setLoading(true);
            await register(email, password);
            navigate('/login');
        }

        catch(error){
            switch (error.code) {

                    case "auth/email-already-in-use":
                        setError("Email already registered.");
                        break;

                    case "auth/invalid-email":
                        setError("Please enter a valid email.");
                        break;

                    case "auth/weak-password":
                        setError("Password should be at least 6 characters.");
                        break;

                    default:
                        setError("Something went wrong.");
                }
        }

        finally{
            setLoading(false);
        }
    }

    return (
    <div className="auth-container">

        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>

            <input 
                type="email" 
                placeholder="Enter Email"
                value={email}
                onChange={ (e) => setEmail(e.target.value) }
            />

            <input 
                type="password" 
                placeholder="Enter Password"
                value={password}
                onChange={ (e) => setPassword(e.target.value) }
            />

            <input 
                type="password" 
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={ (e) => setConfirmPassword(e.target.value) }
            />

            {error && <p>{error}</p>}

            <button type="submit" disabled={loading} >
                {loading ? "Creating Account..." : "Register"}
            </button>

            <p>
                Already have account? {" "}
                <Link to='/login'>Login</Link>
            </p>
        </form>
    </div>
  );
}

export default Register