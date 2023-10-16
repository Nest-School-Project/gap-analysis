import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import {collection,addDoc} from 'firebase/firestore';
import creds from './firebase';
import axios from "axios";
export const Student = () => {
  let navigate=useNavigate();
  const [classes, setClass] = useState();
  const [section, setSection] = useState();
  const [name, setName] = useState('');
  const [USN, setUSN] = useState('');
  const [grades,setGrades]=useState([]);
  const [sections,setSections]=useState([]);
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

   
  const handleSubmit = async () => {
    axios.post("http://localhost:8000/create-student/",{
      "name":name,
      "usn":USN,
      "grade":classes,
      "section":section
    }).then(response=>{
      console.log(response)
    }).catch(err=>{
      console.log(err)
    })
  };
   useEffect(()=>{

    axios.get("http://localhost:8000/get-grades/").then((response) => {
      let temp=[]
      let grades_map=[]
      response.data.map((d,index)=>{
        temp.push(d.name)
        let g=d.name
        grades_map.push({
          "class":g,
          "sections":d.section
        })
      })
      setGrades(temp)
      setSections(grades_map)
      
      console.log(sections)
    }).catch(err=>{
      console.log(err)
    });
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
      
},[])

  return (
    <div >
      <Header></Header>
      <h1 class='Gradename'>Student Entry</h1>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Acme"></link>
          <form className='Sd'>
          <h1 >Add Student</h1>
            <br />
          
        <label >Class:</label>
        <select  className="dropbtn" value={classes} onChange={handleClassChange} Style="width:250px">
        <option value=""></option>
            {
              grades.map((grade,index)=>{
                return <option value={grade}>{grade}</option>
              })
            }

        </select>
        <br></br>
        <label>Section:</label>
        <select  className="dropbtn" value={section} onChange={handleSectionChange} Style="width:250px" >
          <option value=""></option>
          {
            sections.map((section,index)=>{
              if(section.class==classes){
                
                return section["sections"].map((sec,i)=>{
                  
                  return <option value={sec}>{sec}</option>
                })
              }
            })
          }
        </select>
       <br></br>
       <label>Enter Name:</label>
        <input type='text' value={name} onChange={handleNameChange} name='Name' placeholder='Name'></input>
        <br></br>
        <label>Enter USN:</label>
        <input type='text' name='Class' value={USN} onChange={handleUSNChange} placeholder='USN'></input>
        <br></br>
        <button onClick={handleSubmit} id='btn'>Submit</button>
</form>

    </div>


  )
}
