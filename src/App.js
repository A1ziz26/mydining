import React, { useState } from 'react';
import LoginPage from './Components/LoginPage/LoginPage';
import HomePage from './Components/HomePage/HomePage';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    // Add authentication logic here
    // For demo purposes, always set loggedIn to true
    setLoggedIn(true);
  };

  return (
    <div>
      {!loggedIn ? (
        <LoginPage handleLogin={handleLogin} />
      ) : (
        <HomePage />
      )}
    </div>
  );
};

export default App;
