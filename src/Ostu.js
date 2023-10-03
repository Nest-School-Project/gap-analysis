import React, { useState } from 'react'
import Header from './Components/Header';
import './App.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import creds from './firebase';
import { Graph } from './Components/Graph';

export const Ostu  = () => {
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
    
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
      setToggleState(index);
    }
    return (
      <div className="App" ><Header></Header>
  
        <h1>Overall Student Subject analysis</h1>
        <br />
        
        <ul class="nav nav-tabs" id="myTabs" role="tablist">
          <li class="nav-item">
            <button class={toggleState === 1 ? "nav-link active" : "nav-link"} onClick={() => toggleTab(1)}>FA</button>
          </li>
          <li class="nav-item">
            <button class={toggleState === 2 ? "nav-link active" : "nav-link"} onClick={() => toggleTab(2)}>SA</button>
          </li>
        </ul>
        <div class="tab-content" id="myTabsContent">
          <div class={toggleState === 1 ? "tab-pane fade show active" : "tab-pane fade"}>
            <br/>
            <h1 >FORMATIVE ASSESSMENT</h1>
            <hr />
           
             <label>ENGLISH</label>
            <Graph></Graph>
            <label>MATHS</label>
            <Graph></Graph>
            <label>SCIENCE</label>
            <Graph></Graph>
          </div>
          <div class={toggleState ===2 ? "tab-pane fade show active" : "tab-pane fade"}>
            <br/>
            <h1 >SUMMATIVE ASSESSMENT</h1>
            <hr />
           <label>ENGLISH</label>
            <Graph></Graph>
            <label>MATHS</label>
            <Graph></Graph>
            <label>SCIENCE</label>
            <Graph></Graph>
          </div>
          <br></br>
        </div>
        
      </div>
    )
  }
