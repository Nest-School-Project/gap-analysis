import React, { useState } from 'react'
import Header from './Components/Header';
import './App.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import creds from './firebase';
import axios from "axios";

export const Themes = () => {
  let navigate=useNavigate();
  const [grades,setGrades]=useState([]);
    const [grade,setGrade]=useState();
    const [themename,setThemeName]=useState();
    const [centralidea,setCentralIdea]=useState();
    const [lineofinquiry,setLineOfInquiry]=useState();
  useEffect(()=>{
    axios.get("http://localhost:8000/get-grades/").then((response) => {
      let temp=[]
      response.data.map((d,index)=>{
        temp.push(d.name)
      })
      setGrades(temp)
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
}, [])    
  
  

  let handleGradeChange=(e)=>{
    setGrade(e.target.value)
  }

  let handleCentralChange=(e)=>{
    setCentralIdea(e.target.value)
  }

  let handleThemeChange=(e)=>{
    setThemeName(e.target.value)
  }

  let handleLineChange=(e)=>{
    setLineOfInquiry(e.target.value)
  }

  let handleSubmit=(e)=>{
    axios.post("http://localhost:8000/create-theme/",{
      "grade":grade,
      "name":themename,
      "centralidea":centralidea,
      "lineofinquiry":lineofinquiry
    }).then((response)=>{
      console.log(response)
    }).catch(err=>{
      console.log(err)
    })
  }
  return (
    <div className="App" ><Header></Header>
      <p className="Gradename" >THEMES</p>
      <h1>Add Theme</h1>
      <br />
      <form>
        <div class="container" style={{ margin: 'auto', width: '50%' }}>
          <label>Select Class</label>
          <select className="dropbtn" Style="width:350px" onChange={handleGradeChange}>
          <option value=""></option>
            {
              grades.map((grade,index)=>{
                return <option value={grade}>{grade}</option>
              })
            }

          </select>
         </div > <br></br>
        <table style={{ margin: 'auto', width: '50%' }}>

          <tr>
            <th>Enter Theme Name :</th>
            <td><input type="text" name="TA" value={themename} onChange={handleThemeChange}/></td>

          </tr>
          <br />
          <tr>
            <th>Enter Central Idea :</th>
            <td><input type="text" name="AS" value={centralidea} onChange={handleCentralChange}/></td>

          </tr> <br />
          <tr>
            <th>Enter Line of Inquiry :</th>
            <td><input type="text" name="AT" value={lineofinquiry} onChange={handleLineChange}/></td>

          </tr>
        </table>

        <br></br>
      </form>
      <button id="btn" type="SUBMIT" name="AT" onClick={handleSubmit}>Submit</button>
    </div>
  )
}
