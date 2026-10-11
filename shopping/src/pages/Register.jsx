import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import "./Auth.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const navigate = useNavigate();
  const { register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Password do not match");
      return;
    }

    try {
      setLoading(true);
      await register(name, email, password);
      navigate('/login');
    } catch (error) {
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page-wrapper">
      {/* Background soft ambient shapes */}
      <div className="auth-bg-shape-left" aria-hidden="true"></div>
      <div className="auth-bg-shape-right" aria-hidden="true"></div>

      {/* Decorative Botanical Leaf Branch in bottom-right corner matching reference image */}
      <svg className="botanical-decor botanical-branch-right" viewBox="0 0 240 380" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M15 380 C35 300, 65 200, 140 100 C175 55, 205 25, 225 5" stroke="#687654" strokeWidth="2.5" strokeLinecap="round" opacity="0.65" />
        <path d="M42 320 C20 305, 5 275, 12 250 C28 258, 42 278, 46 308 Z" fill="#586744" opacity="0.55" />
        <path d="M42 320 C32 295, 22 270, 12 250" stroke="#4B5838" strokeWidth="1" opacity="0.4" />
        <path d="M58 290 C78 270, 108 262, 126 270 C120 288, 98 302, 67 298 Z" fill="#71825B" opacity="0.5" />
        <path d="M58 290 C80 280, 105 274, 126 270" stroke="#5E6F4A" strokeWidth="1" opacity="0.35" />
        <path d="M78 245 C50 225, 42 192, 54 168 C68 182, 78 208, 83 234 Z" fill="#586744" opacity="0.6" />
        <path d="M78 245 C68 215, 60 190, 54 168" stroke="#4B5838" strokeWidth="1" opacity="0.4" />
        <path d="M98 215 C125 198, 154 200, 170 215 C158 232, 134 238, 105 226 Z" fill="#788962" opacity="0.5" />
        <path d="M98 215 C122 210, 148 212, 170 215" stroke="#63744F" strokeWidth="1" opacity="0.35" />
        <path d="M122 165 C102 138, 102 108, 118 90 C129 108, 133 135, 128 156 Z" fill="#5E6E49" opacity="0.6" />
        <path d="M122 165 C118 138, 118 112, 118 90" stroke="#4D5D3A" strokeWidth="1" opacity="0.4" />
        <path d="M148 135 C176 118, 202 124, 216 140 C198 152, 175 150, 154 140 Z" fill="#809269" opacity="0.5" />
        <path d="M148 135 C172 130, 196 134, 216 140" stroke="#687A53" strokeWidth="1" opacity="0.35" />
        <path d="M178 88 C168 62, 174 38, 190 24 C198 42, 196 66, 184 82 Z" fill="#6A7B54" opacity="0.6" />
        <path d="M208 42 C218 22, 230 10, 238 6 C238 20, 230 38, 218 46 Z" fill="#586744" opacity="0.65" />
      </svg>

      <div className="auth-card">
        {/* Header */}
        <div className="auth-header">
          <h1 className="auth-logo-text">Shoply.</h1>
          <h2 className="auth-title">Create an Account</h2>
          <p className="auth-subtitle">Join Shoply and explore thousands of amazing products.</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="auth-form">
          {/* Full Name */}
          <div className="auth-field">
            <label className="auth-label">Full Name</label>
            <div className="auth-input-wrapper">
              <span className="auth-input-icon">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#7A8072" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </span>
              <input
                type="text"
                className="auth-input"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="auth-field">
            <label className="auth-label">Email Address</label>
            <div className="auth-input-wrapper">
              <span className="auth-input-icon">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#7A8072" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>
              <input
                type="email"
                className="auth-input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Password */}
          <div className="auth-field">
            <label className="auth-label">Password</label>
            <div className="auth-input-wrapper">
              <span className="auth-input-icon">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#7A8072" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </span>
              <input
                type={showPassword ? "text" : "password"}
                className="auth-input"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="auth-eye-btn"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#7A8072" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                ) : (
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#7A8072" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="auth-field">
            <label className="auth-label">Confirm Password</label>
            <div className="auth-input-wrapper">
              <span className="auth-input-icon">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#7A8072" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </span>
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="auth-input"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                className="auth-eye-btn"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label={showConfirmPassword ? "Hide password" : "Show password"}
              >
                {showConfirmPassword ? (
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#7A8072" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                ) : (
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#7A8072" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Terms & Conditions Checkbox */}
          <div className="auth-options-row">
            <label className="auth-checkbox-label">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
              />
              <span>
                I agree to the <strong>Terms & Conditions</strong> and <strong>Privacy Policy</strong>
              </span>
            </label>
          </div>

          {/* Error Message */}
          {error && (
            <div className="auth-error-pill">
              <i className="fa-solid fa-circle-exclamation auth-error-icon"></i>
              <span>{error}</span>
            </div>
          )}

          {/* Submit Button */}
          <button type="submit" className="auth-submit-btn" disabled={loading}>
            {loading ? (
              "Creating Account..."
            ) : (
              <>
                Create Account <span className="auth-submit-arrow">&rarr;</span>
              </>
            )}
          </button>

          {/* Divider */}
          <div className="auth-divider">
            <span className="auth-divider-text">or sign up with</span>
          </div>

          {/* Social Buttons */}
          <div className="auth-social-row">
            <button type="button" className="auth-social-btn">
              <svg className="auth-social-icon" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span>Google</span>
            </button>
            <button type="button" className="auth-social-btn">
              <svg className="auth-social-icon" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>Facebook</span>
            </button>
          </div>

          {/* Switch Prompt */}
          <p className="auth-footer-prompt">
            Already have an account?{" "}
            <Link to="/login" className="auth-switch-link">Log In</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;