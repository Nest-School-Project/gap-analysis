import React, { useState } from 'react'
import Header from './Components/Header';
import { useEffect } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import {collection , addDoc} from 'firebase/firestore';
import creds from './firebase'
export const Entry = () => {
  let navigate = useNavigate();
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
console.log(student_name)
const [studentname,setStudentName]=useState("");
const [className,setClassName]=useState("");
const [section,setSection]=useState("");
const [usn,setUsn]=useState("");
  useEffect(() => {
    onAuthStateChanged(creds.auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          // ...
          for(let i=0;i<students.length;i++){
            if(students[i].name==student_name){
              setStudentName(students[i].name)
              setClassName(students[i].class)
              setSection(students[i].section)
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
     
}, [])  

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  }

  const [scopeSequence,setScopeSequence]=useState("");
  const [realWorldApplication,setRealWorldApplication]=useState("");
  const [assessmentSpecific,setAssessmentSpecific]=useState("");
  const [assessmentId,setAssessmentId]=useState("");
  const handleScopeChange=(e)=>{
      setScopeSequence(e.target.value)
  }

  const handleApplicationChange=(e)=>{
    setRealWorldApplication(e.target.value)
  }

  const handleAssessmentChange=(e)=>{
    setAssessmentSpecific(e.target.value)
  }

  const handleAssessmentIdChange=(e)=>{
    setAssessmentId(e.target.value)
  }

  const handleDataSubmission=async ()=>{
    try{
      const addClass= await addDoc(collection(creds.db,"MarkEntry"),{
        "usn":usn,
        "assessment_id":assessmentId,
        "Section":section,
        "class":className,
        "student_name":student_name,
        "grades":{
          "scope_and_sequence":scopeSequence,
          "real_world_application":realWorldApplication,
          "assessmentSpecific":assessmentSpecific,
        }
      });
    }
    catch (err){
      console.log(err)
    }
    navigate("/GapAnalysis/"+usn)
  }
  return (
    <div >
      <Header></Header>
      <h1 className="Gradename" >Mark Entry</h1>
      <form style={{ alignItems: "flex-start" }}>
        <label>Name : </label>
        <input placeholder="enter name"
          type="text"
          required value={studentname}
        ></input>
        <br></br>
        <label >Class</label>
        <input
          type="text" placeholder="enter class"
          required value={className}
        ></input>
        <br></br>
        <label >Section</label>
        <input
          type="text" placeholder="enter section"
          required value={section}
        ></input>
        <br></br>
        <label >USN </label>
        <input
          type="text" placeholder="enter usn"
          required value={usn}
        ></input>
        <br></br>

        <label >ASSESSMENT ID : </label>
        <select onChange={handleAssessmentIdChange}>
          <option></option>
          <option>FA1</option>
          <option>FA2</option>
          <option>SA1</option>
          <option>SA2</option>
        </select>
      </form>


      <ul class="nav nav-tabs" id="myTabs">
        <li class="nav-item">
          <button class={toggleState === 1 ? "nav-link active" : "nav-link"} onClick={() => toggleTab(1)}>FA</button>
        </li>
        <li class="nav-item">
          <button class={toggleState === 2 ? "nav-link active" : "nav-link"} onClick={() => toggleTab(2)}>SA</button>

        </li>

      </ul>
      <div class="tab-content" id="myTabsContent">
        <div class={toggleState === 1 ? "tab-pane fade show active" : "tab-pane fade"}>

          <table style={{ margin: 'auto', width: '50%' }}>

            <tr>
              <th>Scope and Sequence :</th>
              <td><input type="text" name="TA" value={scopeSequence} onChange={handleScopeChange} /></td>

            </tr>
            <br />
            <tr>
              <th>Enter Scope and Sequence :</th>
              <td><input type="text" name="AS" value={scopeSequence} onChange={handleScopeChange}/></td>

            </tr> <br />
            <tr>
              <th>Real World Application :</th>
              <td><input type="text" name="AT" value={realWorldApplication} onChange={handleApplicationChange}/></td>
            </tr>
            <tr>
              <th>Assessment Specific :</th>
              <td><input type="text" name="AT" value={assessmentSpecific} onChange={handleAssessmentChange}/></td>
            </tr>
          </table>
        </div>


        <div class={toggleState === 2 ? "tab-pane fade show active" : "tab-pane fade"}>
          <table style={{ margin: 'auto', width: '50%' }}>

            <tr>
              <th>Scope and Sequence :</th>
              <td><input type="text" name="TA" /></td>

            </tr>
            <br />
            <tr>
              <th>Scope and Sequence :</th>
              <td><input type="text" name="TA" /></td>

            </tr>
            <br />
            <tr>
              <th>NEST Pillar Reference :</th>
              <td><input type="text" name="TA" /></td>

            </tr><br />
            <tr>
              <th>Approaches to Learning -I :</th>
              <td><input type="text" name="TA" /></td>

            </tr>
            <br />
            <tr>
              <th>Approaches to Learning -II :</th>
              <td><input type="text" name="TA" /></td>

            </tr>
            <br />
            <tr>
              <th>Higher Order Thinking :</th>
              <td><input type="text" name="TA" /></td>

            </tr>
            <br />
          </table>
        </div>
      </div>
      <button type="submit" name="submit" id="btn" onClick={handleDataSubmission}>Submit</button>
    </div>

  )

}
