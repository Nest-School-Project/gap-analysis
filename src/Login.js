import './App.css';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {  signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
     
  const onLogin = (e) => {
    console.log("here")
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/grade");
          console.log(user);
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          window.alert("Invalid Credentials, Try Again");
          console.log(errorCode, errorMessage);
      });
     
  }

    return (
      <div className="App">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Acme"></link>
        <div className="login">
        <h1 className="title">WELCOME</h1>
        <span className="input">
        <input
          id="un"
          name="email"
          type="email"                                    
          required                                                                                
          placeholder="Email address"
          onChange={(e)=>setEmail(e.target.value)}
      /></span>
        <br></br>
      <input
        id="pd"
        name="password"
        type="password"                                    
        required                                                                                
        placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
    />

        <br></br>
        {/* <img src="https://onemg.com/work/images/portfolio-images/nest/nest-banner-latest.jpg" id="logo" alt="nest logo" width="750" height="550"></img> */}
        <button onClick={onLogin} id="sub">Login</button>
      </div>
      </div>
    );
  } 
  
