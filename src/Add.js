import React from 'react'
import './App.css';
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {collection,addDoc} from 'firebase/firestore';
import creds from './firebase';

export const Add = () =>{
  let navigate=useNavigate();
  const handleclick = () => {
    navigate("/Grade")
  };

  // const handleClassChange = (e) => {
  //   console.log(e.target.value)
  //   setClass(e.target.value);
  // };

  // const handleClick= async () => {
  //   try{
  //   const addClass= await addDoc(collection(creds.db,"Grades"),{
  //     "Class":classes,
  //     "Section":[section]
  //   });
  // }
  // catch (err){
  //   console.log(err)
  // }
  //   //console.log(classes,section);
  // };

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
          window.alert("User is logged out, Log in again")
          navigate("/");
        }
      });
     
}, [])
  
  return (
    <div>
      <Header></Header>
      
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Acme"></link>

        <h1 className="Gradename">Add Class</h1>
        <form>
        <table style={{margin:'auto', width:'50%'}}>

<tr>
  <th>Enter New Class :</th>
  <td><input type="text" name="TA" /></td>
</tr>
<br/>
<tr>
  <th>Enter Section :</th>
  <td><input type="text" name="AS" /></td>

</tr> <br/>
</table>

<br></br>
    <button  onClick={handleclick} id="btn">submit</button>
   
</form>

    </div>
  )
}


export default Add;