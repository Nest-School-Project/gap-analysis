import React from 'react'
import { Graph } from './Components/Graph'
import './App.css';
import { useParams } from 'react-router-dom';
import Header from './Components/Header';
import { useEffect, useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import creds from './firebase';
import {collection , getDocs} from 'firebase/firestore';
import axios from "axios";

export const Gap_analysis = () => {
  let navigate=useNavigate();

  const {name}=useParams();
  const [grades,setGrades]=useState([]);
  const [assessments,setAssessments]=useState([]);
  const [sc,setSc]=useState([]);
  const [real,setReal]=useState([]);
  const [ass_spec,setAss]=useState([]);
  
  const [student_name,setStudentName]=useState("");
  const [themes,setThemes]=useState([]);
  const [subjects,setSubject]=useState([]);
  useEffect(()=>{
    
    axios.get(`http://localhost:8000/get-indiv-fa-analysis?usn=${name}`).then(resp=>{
      let data=resp.data
      setStudentName(data.student_name)
      setThemes(data.themes)
      setSubject(data.subjects)
    })
    
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
const [toggleState, setToggleState] = useState(1);
const toggleTab = (index) => {
  setToggleState(index);
}
  console.log(themes)
  return (
    <div >
      
      <Header ></Header>
        <h1>GAP ANALYSIS:{student_name}</h1>      
        <ul class="nav nav-tabs" id="myTabs" role="tablist">
        <li class="nav-item">
          <button class={toggleState === 1 ? "nav-link active" : "nav-link"} onClick={() => toggleTab(1)}>Formative Assessment</button>
        </li>
        <li class="nav-item">
          <button class={toggleState === 2 ? "nav-link active" : "nav-link"} onClick={() => toggleTab(2)}>Summative Assessment</button>
        </li>
      </ul>
      <div class="tab-content" id="myTabsContent">
      <div class={toggleState === 1 ? "tab-pane fade show active" : "tab-pane fade"}>
      <h2> FORMATIVE ASSESSMENT </h2>
      <h2> UOI </h2>
      {
        
        themes.map((theme,index)=>{
          return <div>
            <h3>Theme:{theme.name}</h3>
        <table className='famarks'>
        <tr>
          <th Style="border:1px solid black;" >CRITERIA</th>
          {
          
              theme.marks.map((mark,index)=>{
                return (
                  <td Style="border:1px solid black;">{mark.name}</td>
                )
              })
              
          }
        </tr>
        <tr>
          <td Style="border:1px solid black;">CONCEPT</td>
          {
              theme.marks.map((mark,index)=>{
                return (
                  <td Style="border:1px solid black;">{mark.mark.c1}</td>
                )
              })
          }
        </tr>
        <tr>
          <td Style="border:1px solid black;">APPLICATION</td>
          {
              theme.marks.map((mark,index)=>{
                return (
                  <td Style="border:1px solid black;">{mark.mark.c2}</td>
                )
              })
          }
        </tr>
       
      </table>
      <Graph data={themes} sc_marks={sc} real={real} ass_spec={ass_spec}></Graph>
      </div>
        })
      }
      {/* <table className='famarks'>
        <tr>
          <th Style="border:1px solid black;" >CRITERIA</th>
          {
              grades.map((grade,index)=>{
                return (
                  <td Style="border:1px solid black;">{grade.assessment_id}</td>
                )
              })
          }
        </tr>
        <tr>
          <td Style="border:1px solid black;">CONCEPT</td>
          {
              grades.map((grade,index)=>{
                return (
                  <td Style="border:1px solid black;">{grade.grades.scope_and_sequence}</td>
                )
              })
          }
        </tr>
        <tr>
          <td Style="border:1px solid black;">APPLICATION</td>
          {
              grades.map((grade,index)=>{
                return (
                  <td Style="border:1px solid black;">{grade.grades.scope_and_sequence}</td>
                )
              })
          }
        </tr>
       
      </table> */}
      
     <br/>
     <h2> Subjects </h2>
     {
      subjects.map((subject,index)=>{
        return <div>
            <h3>Subject Name:{subject.name}</h3>
        <table className='famarks'>
        <tr>
          <th Style="border:1px solid black;" >CRITERIA</th>
          {
          
              subject.marks.map((mark,index)=>{
                return (
                  <td Style="border:1px solid black;">{mark.name}</td>
                )
              })
              
          }
        </tr>
        <tr>
          <td Style="border:1px solid black;">CONCEPT</td>
          {
              subject.marks.map((mark,index)=>{
                return (
                  <td Style="border:1px solid black;">{mark.mark.c1}</td>
                )
              })
          }
        </tr>
        <tr>
          <td Style="border:1px solid black;">APPLICATION</td>
          {
              subject.marks.map((mark,index)=>{
                return (
                  <td Style="border:1px solid black;">{mark.mark.c2}</td>
                )
              })
          }
        </tr>
       
      </table>
      <Graph data={subjects} sc_marks={sc} real={real} ass_spec={ass_spec}></Graph>
      </div>
      })
     }
      {/* <table className='famarks'>
        <tr>
          <th Style="border:1px solid black;" >CRITERIA</th>
          {
              grades.map((grade,index)=>{
                return (
                  <td Style="border:1px solid black;">{grade.assessment_id}</td>
                )
              })
          }
        </tr>
        <tr>
          <td Style="border:1px solid black;">CONCEPT</td>
          {
              grades.map((grade,index)=>{
                return (
                  <td Style="border:1px solid black;">{grade.grades.scope_and_sequence}</td>
                )
              })
          }
        </tr>
        <tr>
          <td Style="border:1px solid black;">APPLICATION</td>
          {
              grades.map((grade,index)=>{
                return (
                  <td Style="border:1px solid black;">{grade.grades.scope_and_sequence}</td>
                )
              })
          }
        </tr>
       
      </table> */}
      {/* <Graph data={assessments} sc_marks={sc} real={real} ass_spec={ass_spec}></Graph> */}
      </div>
      <div class={toggleState === 2 ? "tab-pane fade show active" : "tab-pane fade"}>
      <h2> SUMMATIVE ASSESSMENT </h2>
      <h2> UOI </h2>
      <table className='famarks'>
        <tr>
          <th Style="border:1px solid black;" >CRITERIA</th>
          {
              grades.map((grade,index)=>{
                return (
                  <td Style="border:1px solid black;">{grade.assessment_id}</td>
                )
              })
          }
        </tr>
        <tr>
          <td Style="border:1px solid black;">CONCEPT</td>
          {
              grades.map((grade,index)=>{
                return (
                  <td Style="border:1px solid black;">{grade.grades.scope_and_sequence}</td>
                )
              })
          }
        </tr>
        <tr>
          <td Style="border:1px solid black;">APPLICATION</td>
          {
              grades.map((grade,index)=>{
                return (
                  <td Style="border:1px solid black;">{grade.grades.scope_and_sequence}</td>
                )
              })
          }
        </tr>
       
      </table>
      <Graph data={assessments} sc_marks={sc} real={real} ass_spec={ass_spec}></Graph>
     
     <h2> Subjects </h2>
      <table className='famarks'>
        <tr>
          <th Style="border:1px solid black;" >CRITERIA</th>
          {
              grades.map((grade,index)=>{
                return (
                  <td Style="border:1px solid black;">{grade.assessment_id}</td>
                )
              })
          }
        </tr>
        <tr>
          <td Style="border:1px solid black;">CONCEPT</td>
          {
              grades.map((grade,index)=>{
                return (
                  <td Style="border:1px solid black;">{grade.grades.scope_and_sequence}</td>
                )
              })
          }
        </tr>
        <tr>
          <td Style="border:1px solid black;">APPLICATION</td>
          {
              grades.map((grade,index)=>{
                return (
                  <td Style="border:1px solid black;">{grade.grades.scope_and_sequence}</td>
                )
              })
          }
        </tr>
       
      </table>
      <Graph data={assessments} sc_marks={sc} real={real} ass_spec={ass_spec}></Graph>
     
        
      </div>
    
    </div>
    </div>
  )
}
