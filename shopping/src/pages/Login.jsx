import { Link } from "react-router-dom"

function Login() {
  return (
    <div className="auth-container">
    
            <h2>Login</h2>
    
            <form>
    
                <input 
                    type="email" 
                    placeholder="Enter Email:"
                />
    
                <input 
                    type="password" 
                    placeholder="Enter Password"
                />
    
                <button type="sumbit">Login</button>
    
                <p>
                    Don't have an account? {" "}
                    <Link to='/register'>Register</Link>
                </p>
            </form>
        </div>
  )
}

export default Login