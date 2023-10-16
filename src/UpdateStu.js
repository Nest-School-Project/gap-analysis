import React from 'react'
import { useNavigate,useParams } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import {collection,addDoc} from 'firebase/firestore';
import creds from './firebase';

export const UpdateStu = () => {
 let navigate=useNavigate();
 const students = [{
    "usn": "12345",
    "name": "Mark",
    "section": "A",
    "class":"LKG"
},
{
    "usn": "12356",
    "name": "Antony",
    "section": "B",
    "class":"UKG",
},
{
    "usn": "4567",
    "name": "Brat",
    "section": "C",
    "class":"LKG"
},
{
    "usn": "09892",
    "name": "Samuel",
    "section": "D",
    "class":"LKG"
}
]
const { student_name } = useParams();
const [classes, setClass] = useState("");
const [section, setSection] = useState("");
const [studentname,setStudentName]=useState("");
const [usn,setUsn]=useState("");

  const handleSectionChange = (e) => {
    console.log(e.target.value)
    setSection(e.target.value);
  };

  const handleClassChange = (e) => {
    console.log(e.target.value)
    setClass(e.target.value);
  };
   
  const handlesubmit = async () => {
    try{
   
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
          for(let i=0;i<students.length;i++){
            if(students[i].name==student_name){
                setStudentName(students[i].name)
                setUsn(students[i].usn)
              }
            }
          console.log("uid", uid)
        } else {
          // User is signed out
          // ...
          //window.alert("User is logged out, Log in again")
          navigate("/");
        }
      });
      
})
  return (
    <div>
        <Header></Header>
      <h1 class='Gradename'>Update Student</h1>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Acme"></link>
      
     
     
          <form className='Sd'>
          <h1 >Update Student</h1>
            <br />
            <label>Name:</label>
        <input type='text' required value={studentname}  name='Name' placeholder='enter name'></input>
        <br></br>
        <label>USN No:</label>
        <input type='text' name='Class' required value={usn}  placeholder='enter usn'></input>
        <br></br>
        <label >Class:</label>
        <select  className="dropbtn" value={classes} onChange={handleClassChange} Style="width:250px">
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
        <select  className="dropbtn" value={section} onChange={handleSectionChange} Style="width:250px" >
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
        </select>
       <br></br>
       
        <button onClick={handlesubmit} id='btn'>submit</button>
</form>

  
     
    </div>
  )
}
