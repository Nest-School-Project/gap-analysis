import React, { useState } from 'react'
import Header from './Components/Header';
import './App.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import creds from './firebase';
import { OGraph } from './Components/OGraph';
import { useParams } from 'react-router-dom';
import {collection , getDocs} from 'firebase/firestore';
import axios from "axios";
import { SaOGraph } from './Components/SaOGraph';

export const Ostu  = () => {
    const {name}=useParams();
    let navigate=useNavigate();
    const [assessmentList,setAssessmentList]=useState([])
    const [studentList,setStudentList]=useState([])
    const [assessments,setAssessments]=useState([])

    const [saassessmentList,setSaAssessmentList]=useState([])
    
    const [saassessments,setSaAssessments]=useState([])
    useEffect(()=>{
      axios.get(`http://localhost:8000/get-ostu-fa/?grade=${name}`).then((response)=>{
        let data=response.data
        setAssessmentList(data["assessment_list"])
        setStudentList(data["student_list"])
        setAssessments(data["assessments"])
        console.log(data)

      }).catch((err)=>{
        console.log(err)
      })

      axios.get(`http://localhost:8000/get-ostu-sa/?grade=${name}`).then((response)=>{
        let data=response.data
        setSaAssessmentList(data["assessment_list"])
        //setStudentList(data["student_list"])
        setSaAssessments(data["assessments"])
        console.log(data)

      }).catch((err)=>{
        console.log(err)
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
  }, [])   
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  }
   
    
   
    return (
    <div className="App" ><Header></Header>
      <h2>Overall Class Subject analysis</h2>
      <ul class="nav nav-tabs" id="myTabs" role="tablist">
        <li class="nav-item">
          <button class={toggleState === 1 ? "nav-link active" : "nav-link"} onClick={() => toggleTab(1)}>Formative Assessment</button>
        </li>
        <li class="nav-item">
          <button class={toggleState === 2 ? "nav-link active" : "nav-link"} onClick={() => toggleTab(2)}>Summative Assessment</button>
        </li>
      </ul>
      <br></br>
      <div class="tab-content" id="myTabsContent">
        <div class={toggleState === 1 ? "tab-pane fade show active" : "tab-pane fade"}>
            <h2 >FORMATIVE ASSESSMENT</h2>
            {
              assessmentList.map((ass)=>{
                return <div>
                  <h1>{ass}</h1>
                  {
                    assessments[ass].map((a)=>{
                      return <div>
                        <h1>{a.name}</h1>
                        {
                          <div>
                          <table className='famarks'>
                            <tr>
                              <th Style="border:1px solid black;">CRITERIA</th>
                              {
                                a["students"].map(s=>{
                                  return (
                                    <th Style="border:1px solid black;">{s.name}</th>
                                  )
                                })
                              }
                            </tr>
                            <tr>
                              <th Style="border:1px solid black;">Concept</th>
                              {
                                a["students"].map(s=>{
                                  return (
                                    <td Style="border:1px solid black;">{s.c1}</td>
                                  )
                                })
                              }
                            </tr>
                            <tr>
                              <th Style="border:1px solid black;">APPLICATION</th>
                              {
                                a["students"].map(s=>{
                                  return (
                                    <td Style="border:1px solid black;">{s.c2}</td>
                                  )
                                })
                              }
                            </tr>
                          </table>
                          <br></br>
                          <OGraph data={assessments[ass]} subject={a.name}></OGraph>
                              </div>
                        }
                        </div>

                    })
                  }
                </div>
              })
            }
        </div>
        <div class={toggleState === 2 ? "tab-pane fade show active" : "tab-pane fade"}>
        <h2 >SUMMATIVE ASSESSMENT</h2>
            {
              saassessmentList.map((ass)=>{
                return <div>
                  <h1>{ass}</h1>
                  {
                    saassessments[ass].map((a)=>{
                      return <div>
                        <h1>{a.name}</h1>
                        {
                          <div>
                          <table className='famarks'>
                            <tr>
                              <th Style="border:1px solid black;">CRITERIA</th>
                              {
                                a["students"].map(s=>{
                                  return (
                                    <th Style="border:1px solid black;">{s.name}</th>
                                  )
                                })
                              }
                            </tr>
                            <tr>
                              <th Style="border:1px solid black;">Concept</th>
                              {
                                a["students"].map(s=>{
                                  return (
                                    <td Style="border:1px solid black;">{s.c1}</td>
                                  )
                                })
                              }
                            </tr>
                            <tr>
                              <th Style="border:1px solid black;">APPLICATION</th>
                              {
                                a["students"].map(s=>{
                                  return (
                                    <td Style="border:1px solid black;">{s.c2}</td>
                                  )
                                })
                              }
                            </tr>
                            <tr>
                              <th Style="border:1px solid black;">C3</th>
                              {
                                a["students"].map(s=>{
                                  return (
                                    <td Style="border:1px solid black;">{s.c3}</td>
                                  )
                                })
                              }
                            </tr>
                            <tr>
                              <th Style="border:1px solid black;">C4</th>
                              {
                                a["students"].map(s=>{
                                  return (
                                    <td Style="border:1px solid black;">{s.c4}</td>
                                  )
                                })
                              }
                            </tr>
                            <tr>
                              <th Style="border:1px solid black;">C5</th>
                              {
                                a["students"].map(s=>{
                                  return (
                                    <td Style="border:1px solid black;">{s.c5}</td>
                                  )
                                })
                              }
                            </tr>
                          </table>
                          <br></br>
                          <SaOGraph data={saassessments[ass]} subject={a.name}></SaOGraph>
                              </div>
                        }
                        </div>

                    })
                  }
                </div>
              })
            }
        </div>
        </div>
    </div>
        
        
   
 )
  }
