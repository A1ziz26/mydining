import React, { useState } from 'react';
import './LoginPage.css'; // Import the CSS file for styles

const RegisterPage = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setconfirmpassword] = useState('');
  const [email, setemail] = useState('');
  const [error, setError] = useState('');

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

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleFormSubmit}>
      <input
          type="text"
          className="login-input"
          placeholder="Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
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
        <input
          type="password"
          className="login-input"
          placeholder="Confirm Password"
          value={confirmpassword}
          onChange={(e) => setconfirmpassword(e.target.value)}
        />
        <button type="submit" className="login-button">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
