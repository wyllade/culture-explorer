// pages/Auth.jsx

import { useState } from "react";
import "../styles/auth.css";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <img
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce"
          alt="culture"
        />
      </div>

      <div className="auth-right">
        <div className="auth-card">
          <h1>CultureExplorer</h1>

          <p className="subtitle">
            Discover cultures around the world.
          </p>

          <form>
            {!isLogin && (
              <input type="text" placeholder="Username" />
            )}

            <input type="email" placeholder="Email" />

            <input type="password" placeholder="Password" />

            <button type="submit">
              {isLogin ? "Log In" : "Sign Up"}
            </button>
          </form>

          <div className="divider">
            <span>OR</span>
          </div>

          <button className="google-btn">
            Continue with Google
          </button>

          <p className="switch-text">
            {isLogin
              ? "Don't have an account?"
              : "Already have an account?"}

            <span onClick={toggleForm}>
              {isLogin ? " Sign up" : " Log in"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}