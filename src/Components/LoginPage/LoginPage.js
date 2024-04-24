import React, { useState } from 'react';
import './LoginPage.css'; // Import the CSS file for styles

const LoginPage = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Check if username or password is empty
    if (!username.trim() || !password.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    // Clear any previous error
    setError('');

    // Call handleLogin if fields are not empty
    handleLogin(username, password);
  };

  const handleRegisterClick = () => {
    // Switch to Register mode
    setIsRegistering(true);
  };

  const handleBackToLoginClick = () => {
    // Switch back to Login mode
    setIsRegistering(false);
    // Clear input fields and error message
    setUsername('');
    setPassword('');
    setError('');
  };

  const handleRegisterSubmit = (e) => {
    // Handle registration logic here
    e.preventDefault();
    // You can add your registration logic here
    // For simplicity, I'm just switching back to the Login page
    handleBackToLoginClick();
  };

  if (isRegistering) {
    return (
      <div className="register-container">
        <h1 className="register-title">Register</h1>
        <form onSubmit={handleRegisterSubmit}>
          <input
            type="text"
            className="register-input"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            className="register-input"
            placeholder="Email"
            // Add onChange event handler for email input
          />
          <input
            type="password"
            className="register-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            className="register-input"
            placeholder="Re-enter Password"
            // Add state and onChange event handler for re-enter password input
          />
          <button type="submit" className="register-button">Register</button>
        </form>
        <button onClick={handleBackToLoginClick} className="back-to-login-button">Back to Login</button>
      </div>
    );
  }

  // Render Login page by default
  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="login-input"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="login-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="login-button">Login</button>
      </form>
      <button onClick={handleRegisterClick} className="register-link">Register</button>
    </div>
  );
};

export default LoginPage;
