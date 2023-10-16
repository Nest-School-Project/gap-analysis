import React, { useState } from 'react'
import Header from './Components/Header';
import './App.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import creds from './firebase';
import axios from "axios";

export const AddSub = () => {
  let navigate=useNavigate();
  const [grades,setGrades]=useState([]);
  const [grade,setGrade]=useState();
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
          const uid = user.uid;
          console.log("uid", uid)
        } else {
          navigate("/");
        }
      });   
}, [])    
  
  const [toggleState, setToggleState] = useState(1);
  const [subject,setSubject]=useState();
  const [subjectCode,setSubjectCode]=useState();
  const toggleTab = (index) => {
    setToggleState(index);
  }
  let handleGradeChange=(e)=>{
    setGrade(e.target.value)
  }

  let handleSubjectChange=(e)=>{
    setSubject(e.target.value)
  }
  let handleSubjectCodeChange=(e)=>{
    setSubjectCode(e.target.value)
  }

  let handleFormSubmit=(e)=>{
    axios.post("http://localhost:8000/create-subject/",{
      "grade":grade,
      "subject":subject,
      "subject_code":subjectCode
    }).then((response)=>{
      console.log(response)
    }).catch(err=>{
      console.log(err)
    })
  }
  return (
    <div className="App" ><Header></Header>
      <p className="Gradename" >SUBJECT</p>
      <h1>Add Subject</h1>
      <br />
      <form>
        <div class="container"><span style={{ margin: 'auto', width: '50%' }}>
          <label >Select Class :</label>
          <select className="dropbtn" Style="width:350px" onChange={handleGradeChange}>
            <option value=""></option>
            {
              grades.map((grade,index)=>{
                return <option value={grade}>{grade}</option>
              })
            }
            {/* <option value="LKG">LKG</option>
            <option value="UKG">UKG</option>
            <option value="1st">1st</option>
            <option value="2nd">2nd</option>
            <option value="3rd">3rd</option>
            <option value="4th">4th</option>
            <option value="5th">5th</option>
            <option value="6th">6th</option>
            <option value="7th">7th</option>
            <option value="8th">8th</option> */}

          </select>
        </span>
          
        </div > <br></br>
        <table style={{ margin: 'auto', width: '50%' }}>

          <tr>
            <th>Enter Subject Name :</th>
            <td><input type="text" name="TA" value={subject} onChange={handleSubjectChange}/></td>

          </tr>
          <br />
          <tr>
            <th>Enter Subject Code :</th>
            <td><input type="text" name="AS" value={subjectCode} onChange={handleSubjectCodeChange} /></td>

          </tr> <br />
        </table>

        <br></br>
      </form>
      <button id="btn" type="SUBMIT" name="AT" onClick={handleFormSubmit}>Submit</button>
    </div>
  )
}
