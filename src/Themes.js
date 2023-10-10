import React, { useState } from 'react'
import Header from './Components/Header';
import './App.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import creds from './firebase';


export const Themes = () => {
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
      <p className="Gradename" >THEMES</p>
      <h1>Add Theme</h1>
      <br />
      <form>
        <div class="container" style={{ margin: 'auto', width: '50%' }}>
          <label>Select Class</label>
          <select className="dropbtn" Style="width:350px">
            <option value="LKG">LKG</option>
            <option value="UKG">UKG</option>
            <option value="1st">1st</option>
            <option value="2nd">2nd</option>
            <option value="3rd">3rd</option>
            <option value="4th">4th</option>
            <option value="5th">5th</option>
            <option value="6th">6th</option>
            <option value="7th">7th</option>
            <option value="8th">8th</option>

          </select>
         </div > <br></br>
        <table style={{ margin: 'auto', width: '50%' }}>

          <tr>
            <th>Enter Theme Name :</th>
            <td><input type="text" name="TA" /></td>

          </tr>
          <br />
          <tr>
            <th>Enter Central Idea :</th>
            <td><input type="text" name="AS" /></td>

          </tr> <br />
          <tr>
            <th>Enter Line of Inquiry :</th>
            <td><input type="text" name="AT" /></td>

          </tr>
        </table>

        <br></br>
      </form>
      <button id="btn" type="SUBMIT" name="AT" >Submit</button>
    </div>
  )
}
