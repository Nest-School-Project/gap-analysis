import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import {collection,addDoc} from 'firebase/firestore';
import creds from './firebase';

export const Student = () => {
  let navigate=useNavigate();
  const [classes, setClass] = useState('');
  const [section, setSection] = useState('');
  const [name, setName] = useState('');
  const [USN, setUSN] = useState('');
        
  const handleSectionChange = (e) => {
    console.log(e.target.value)
    setSection(e.target.value);
  };

  const handleClassChange = (e) => {
    console.log(e.target.value)
    setClass(e.target.value);
  };

  const handleNameChange = (e) => {
    console.log(e.target.value)
    setName(e.target.value);
  };

  const handleUSNChange = (e) => {
    console.log(e.target.value)
    setUSN(e.target.value);
  };

   
  const handlesubmit = async () => {
    try{
      const addClass= await addDoc(collection(creds.db,"Student"),{
        "Class":classes,
        "Section":section,
        "Name":name,
        "USN":USN
      });
    }
    catch (err){
      console.log(err)
    }
      
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
          window.alert("User is logged out, Log in again")
          navigate("/");
        }
      });
      
})
const [toggleState, setToggleState] = useState(1);
const toggleTab = (index) => {
    setToggleState(index);
}

  return (
    <div >
      <Header></Header>
      <h1 class='Gradename'>Student Entry</h1>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Acme"></link>
      <ul class="nav nav-tabs" id="myTabs" role="tablist">
        <li class="nav-item">
          <button class={toggleState === 1 ? "nav-link active" : "nav-link"} onClick={() => toggleTab(1)}>Add </button>
        </li>
        <li class="nav-item">
          <button class={toggleState === 2 ? "nav-link active" : "nav-link"} onClick={() => toggleTab(2)}>Delete </button>
        </li>
        <li class="nav-item">
          <button class={toggleState === 3 ? "nav-link active" : "nav-link"} onClick={() => toggleTab(3)}>Update </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabsContent">
        <div class={toggleState === 1 ? "tab-pane fade show active" : "tab-pane fade"}>
          <form className='Sd'>
          <h1 >Add Student</h1>
            <br />
        <label >Class:</label>
        <select name="Class" id="standard" value={classes} onChange={handleClassChange} Style="width:250px">
          <option value="LKG">LKG</option>
          <option value="UKG">UKG</option>
          <option value="1th">1st</option>
          <option value="2nd">2nd</option>
          <option value="3rd">3rd</option>
          <option value="4th">4th</option>
          <option value="5th">5th</option>
          <option value="6th">6th</option>
          <option value="7th">7th</option>
          <option value="8th">8th</option>

        </select>
        <br></br>
        <label>Section:</label>
        <select name="Class" id="standard" value={section} onChange={handleSectionChange} Style="width:250px" >
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
        </select>
       <br></br>
       <label>Name:</label>
        <input type='text' value={name} onChange={handleNameChange} name='Name' placeholder='enter name'></input>
        <br></br>
        <label>USN No:</label>
        <input type='text' name='Class' value={USN} onChange={handleUSNChange} placeholder='enter usn'></input>
        <br></br>
        <button onClick={handlesubmit} id='btn'>submit</button>
</form>

    </div>
    </div>
    </div>



  )
}
