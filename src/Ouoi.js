import React, { useState } from 'react'
import Header from './Components/Header';
import './App.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import creds from './firebase';
import { Graph } from './Components/Graph';

export const Ouoi = () => {
    let navigate=useNavigate();
    useEffect(()=>{
      onAuthStateChanged(creds.auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            // ...
            console.log("uid", uid)
          } else {
            // User is signed out
            // ...
            //window.alert("User is logged out, Log in again")
            navigate("/");
          }
        });   
  }, [])    
  return (
    <div className="App">
        <Header></Header>
        <h2>Overall Student UOI analysis</h2>
        <br />
        <label>Select FA/SA:</label>
     
        <input placeholder='FA or SA' type='text' id='btn'></input>
        <br></br>
        <button type='Submit' id='btn'>Submit</button>
       <br></br>
        
            <br/>
            <h2 >FORMATIVE ASSESSMENT</h2>
            <h3>FA1</h3>
       
             <div id='size'>
            <Graph></Graph></div>
           
         
            <h3>SUMMATIVE ASSESSMENT</h3>
            <h3>SA1</h3>
          
           <div id='size'>
            <Graph></Graph></div>
            
          
          <br></br>
       
    </div>
  )
}
