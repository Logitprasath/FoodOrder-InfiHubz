import React, { useState } from "react";
import "./Login.css";
import { assets } from "../../assets/assets";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const DEFAULT_ADMIN_EMAIL = "admin@gmail.com";
  const DEFAULT_ADMIN_PASSWORD = "admin123";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (email === DEFAULT_ADMIN_EMAIL && password === DEFAULT_ADMIN_PASSWORD) {
      window.location.href = "/admin-dashboard";
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8088/user/login/${email}/${password}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.ok) {
        const user = await response.json();
        localStorage.setItem("user", JSON.stringify(user));

        console.log("Login successful:", user);
        window.location.href = "/user-dashboard";
      } else {
        const errorData = await response.text();
        setError(errorData || "Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="form-section">
        <div className="logo">
          <img src={assets.logo} alt="College Logo" className="img" />
        </div>
        <p className="tagline">The key to happiness is to sign in.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
          {error && <p className="error-message">{error}</p>}
        </form>
        <p className="signup-link">
          Don't have an account? <a href="/signup">Register</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
