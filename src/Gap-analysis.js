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


export const Gap_analysis = () => {
  let navigate=useNavigate();

  const {name}=useParams();
  const [grades,setGrades]=useState([]);
  const [assessments,setAssessments]=useState([]);
  const [sc,setSc]=useState([]);
  const [real,setReal]=useState([]);
  const [ass_spec,setAss]=useState([]);
  const fetchPost = async () => {
       
    await getDocs(collection(creds.db, "MarkEntry"))
        .then((querySnapshot)=>{               
          const newData = querySnapshot.docs
          .map((doc) => ({...doc.data(), id:doc.id }));
            setGrades(newData);
          const ass_array=newData.map((ndata)=>(ndata.assessment_id));
          setAssessments(ass_array)
          const sc_marks=newData.map((ndata)=>(ndata.grades.scope_and_sequence));
          setSc(sc_marks)  
          const real_marks=newData.map((ndata)=>(ndata.grades.real_world_application));
          setReal(real_marks) 
          const ass_marks=newData.map((ndata)=>(ndata.grades.assessmentSpecific));
          setAss(ass_marks)    
            console.log(grades) 
            
        })
   
  }
  
  useEffect(()=>{
    
    fetchPost()
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
 
  console.log(grades)
  return (
    <div className='ga'>
      
      <Header ></Header>
        <h1>GAP ANALYSIS:{name}</h1>      
    <div className='graphst'>
      <h2>Formative Assessment</h2>
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
          <td Style="border:1px solid black;">SCOPE AND SEQUENCE</td>
          {
              grades.map((grade,index)=>{
                return (
                  <td Style="border:1px solid black;">{grade.grades.scope_and_sequence}</td>
                )
              })
          }
        </tr>
        <tr>
          <td Style="border:1px solid black;">SCOPE AND SEQUENCE</td>
          {
              grades.map((grade,index)=>{
                return (
                  <td Style="border:1px solid black;">{grade.grades.scope_and_sequence}</td>
                )
              })
          }
        </tr>
        <tr>
          <td Style="border:1px solid black;">SUCCESS CRITERIA FROM UNIT PLANNER</td>
          {
              grades.map((grade,index)=>{
                return (
                  <td Style="border:1px solid black;">{grade.grades.real_world_application}</td>
                )
              })
          }
        </tr>
        <tr>
          <td Style="border:1px solid black;">ASSESSMENT SPECIFIC</td>
          {
              grades.map((grade,index)=>{
                return (
                  <td Style="border:1px solid black;">{grade.grades.assessmentSpecific}</td>
                )
              })
          }
        </tr>
      </table>
      <Graph data={assessments} sc_marks={sc} real={real} ass_spec={ass_spec}></Graph>
      <h2>Summative Assessment</h2>
      <table className='famarks'>
        <tr>
          <th Style="border:1px solid black;" >CRITERIA</th>
          <th Style="border:1px solid black;">FA1</th>
          <th Style="border:1px solid black;">FA2</th>
        </tr>
        <tr>
          <td Style="border:1px solid black;">SCOPE AND SEQUENCE</td>
          <td Style="border:1px solid black;">80</td>
          <td Style="border:1px solid black;">80</td>
        </tr>
        <tr>
          <td Style="border:1px solid black;">SCOPE AND SEQUENCE</td>
          <td Style="border:1px solid black;">80</td>
          <td Style="border:1px solid black;">80</td>
        </tr>
        <tr>
          <td Style="border:1px solid black;">SUCCESS CRITERIA FROM UNIT PLANNER</td>
          <td Style="border:1px solid black;">80</td>
          <td Style="border:1px solid black;">80</td>
        </tr>
        <tr>
          <td Style="border:1px solid black;">ASSESSMENT SPECIFIC</td>
          <td Style="border:1px solid black;">80</td>
          <td Style="border:1px solid black;">80</td>
        </tr>
      </table>
   
    </div>

    </div>
  )
}
