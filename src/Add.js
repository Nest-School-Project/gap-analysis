import React from 'react'
import './App.css';
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Add = () =>{
  let navigate=useNavigate();

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          // ...
          console.log("uid", uid)
        } else {
          // User is signed out
          // ...
          window.alert("User is logged out, Log in again")
          navigate("/");
        }
      });
     
}, [])
  
  return (
    <div>
      <Header></Header>
      <SideBar></SideBar>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Acme"></link>

        {/* <h1>ADD CLASS</h1> */}
        <form>
          <br></br>
            <label className='addspace'>Class</label>
            <select name="Class" id="standard">
    <option value="LKG">LKG</option>
    <option value="UKG">UKG</option>
    <option value="1th">1th</option>
    <option value="2nd">2nd</option>
    <option value="3rd">3rd</option>
    <option value="4th">4th</option>
    <option value="5th">5th</option>
    <option value="6th">6th</option>
    <option value="7th">7th</option>
    <option value="8th">8th</option>
</select>
<br></br>
<label>Section</label>
<select name="Class" id="standard">
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
    <option value="D">D</option>
    </select>

        </form>
    </div>
  )
}


export default Add;