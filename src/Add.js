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
  const handleclick = () => {
    navigate("/Grade")
  };
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
      
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Acme"></link>

        {/* <h1>ADD CLASS</h1> */}
        <form>
          
          <div className='St'>
          <h1> ADD CLASS</h1>
          <hr></hr>
            
          <br></br>
            <label className='addspace'>Class</label>
            
    <input type='text'name="Class" id="standard" ></input>

<br></br>
<label>Section</label>
<input type='text'name="Class" id="standard" ></input>

    <br></br>
    <br>
    </br>
    <button style={{height:"50px", width:"100px"}} onClick={handleclick}>submit</button>
    </div>

        </form>
    </div>
  )
}


export default Add;