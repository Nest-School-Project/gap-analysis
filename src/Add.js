import React from 'react'
import './App.css';
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {collection , addDoc} from 'firebase/firestore';
import creds from './firebase';
import axios from "axios";

export const Add = () =>{
  const [classes, setClass] = useState();
  const [section, setSection] = useState();

  let navigate=useNavigate();

  const handleClassChange = (e) => {
    console.log(e.target.value)
    setClass(e.target.value);
  };
  const handleSectionChange = (e) => {
    console.log(e.target.value)
    setSection(e.target.value);
  };

  const handleClick= () => {
    axios.post("http://localhost:8000/new-grade/",{
      "class":classes,
      "section":section
    }).then(response=>{
      window.alert("Success...")
      navigate("/grade")
    }).catch(err=>{
      window.alert("some error occured")
      navigate("/grade")
    })
    //console.log(classes,section);
  };

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
    <div>
      <Header></Header>
      
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Acme"></link>

        <h1 className="Gradename">Add Class</h1>
      
        <table style={{margin:'auto', width:'50%'}}>

<tr>
  <th>Enter Class :</th>
  <td><input type="text" name="TA" value={classes} onChange={handleClassChange}/></td>
</tr>
<br/>
<tr>
  <th>Enter Section :</th>
  <td><input type="text" name="AS" value={section} onChange={handleSectionChange} /></td>

</tr> <br/>
</table>

<br></br>
    <button onClick={handleClick} id="btn">submit</button>
   


    </div>
  )
}

export default Add;