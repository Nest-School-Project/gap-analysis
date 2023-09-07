import './App.css';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  let navigate = useNavigate();

  const handleLogin = () => {
    // You can implement actual authentication logic here.
    // For simplicity, we'll check if both username and password are 'admin'.
    if (username === 'admin' && password === 'admin') {
      setLoggedIn(true);
      
  
    
        navigate("/entry")
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  if (loggedIn) {
    return (
      <div className="App">
        <h1>Welcome, {username}!</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  } else {
    return (
      <div className="App">
        <br></br>
        <br></br>
        <br></br>
        <link rel="stylesheet" href="//2ttf.com/webfont/6IF8GLA3aiM/webfont.ttf"></link>
        <h1 className="title">WELCOME</h1>
        <span class="input">
          <input id="un"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          /></span>
        <br></br>
        <input
          id="pd"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}

        />

        <img src="https://onemg.com/work/images/portfolio-images/nest/nest-banner-latest.jpg" id="logo" alt="nest logo" width="750" height="550"></img>

        <br></br>

        <button onClick={handleLogin} id="sub">Login</button>
      </div>
    );
  }
}
