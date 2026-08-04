import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";
import { useAuth } from "../hooks/useAuth";

function Login() {
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const {login} = useAuth();

    const handleSubmit =  async (e) => {
        e.preventDefault();

        setError("");

        if (!email || !password) {
            setError("All fields are required.");
            return;
        }
        
        
        try{
            setLoading(true);
            await login(email, password);
            navigate('/');
        }

        catch(error){
            switch (error.code) {

            case "auth/invalid-credential":
                setError("Invalid email or password.");
                break;

            case "auth/too-many-requests":
                setError("Too many attempts. Try again later.");
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

        <h2>Login</h2>

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

            {error && <p>{error}</p>}

            <button type="submit" disabled={loading} >
                {loading ? "Logging in..." : "Login"}
            </button>

            <p>
                Don't Have an Account? {" "}
                <Link to='/register'>Register</Link>
            </p>
        </form>
    </div>
  );
}

export default Login