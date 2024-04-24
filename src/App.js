import React, { useState } from 'react';
import LoginPage from './Components/LoginPage/LoginPage';
import HomePage from './Components/HomePage/HomePage';
import RegisterPage from './Components/RegisterPage/RegisterPage';
import { Route, Routes, useLocation } from 'react-router-dom';

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
        <Routes>
          <Route path="/" element={<LoginPage handleLogin={handleLogin} />}/>
          <Route path="/register" element={<RegisterPage/>}/>
        </Routes>
      ) : (
        <HomePage />
      )}
    </div>
  );
};

export default App;
