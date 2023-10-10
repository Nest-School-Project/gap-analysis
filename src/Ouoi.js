import React, { useState } from 'react'
import Header from './Components/Header';
import './App.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import creds from './firebase';
import { Graph } from './Components/Graph';
import { useParams } from 'react-router-dom';
import {collection , getDocs} from 'firebase/firestore';

export const Ouoi = () => {
    let navigate=useNavigate();
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
  
 
  return (
    <div className="App">
        <Header></Header>
        <h2>Overall Student UOI analysis</h2>
        <br />
        <label>Select FA/SA:</label>
     
        <input placeholder='FA or SA' type='text' id='btn'></input>
        <br></br>
        <button type='Submit' id='btn'>Submit</button>
       <br></br>
        
            <br/>
            <h2 >FORMATIVE ASSESSMENT</h2>
            <h3>FA1</h3>
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
             <div id='size'>
            <Graph></Graph></div>
           
         
            <h3>SUMMATIVE ASSESSMENT</h3>
            <h3>SA1</h3>
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
        <tr>
          <td Style="border:1px solid black;">COMPREHENDING</td>
          {
              grades.map((grade,index)=>{
                return (
                  <td Style="border:1px solid black;">{grade.grades.real_world_application}</td>
                )
              })
          }
        </tr>
        <tr>
          <td Style="border:1px solid black;">KNOWLEDGE</td>
          {
              grades.map((grade,index)=>{
                return (
                  <td Style="border:1px solid black;">{grade.grades.assessmentSpecific}</td>
                )
              })
          }
        </tr>
      </table>
           <div id='size'>
            <Graph></Graph></div>
            
          
          <br></br>
       
    </div>
  )
}
