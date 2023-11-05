import React, { useState } from 'react'
import Header from './Components/Header';
import './App.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import creds from './firebase';
import { useParams } from 'react-router-dom';
import {collection , getDocs} from 'firebase/firestore';
import axios from "axios";
import { OstuFA } from './Components/OstuFA';
import { OstuSA } from './Components/OstuSA';
export const Ouoi = () => {
    let navigate=useNavigate();
    const {name}=useParams();
    const [assessmentList,setAssessmentList]=useState([])
    const [studentList,setStudentList]=useState([])
    const [assessments,setAssessments]=useState([])

    const [saassessmentList,setSaAssessmentList]=useState([])
    
    const [saassessments,setSaAssessments]=useState([])
    useEffect(()=>{

      axios.get(`http://localhost:8000/get-UOI-fa/?grade=${name}`).then((response)=>{
        let data=response.data
        setAssessmentList(data["assessment_list"])
        setStudentList(data["student_list"])
        setAssessments(data["assessments"])
        

      }).catch((err)=>{
        console.log(err)
      })
      
      axios.get(`http://localhost:8000/get-UOI-sa/?grade=${name}`).then((response)=>{
        let data=response.data
        setSaAssessmentList(data["assessment_list"])

        setSaAssessments(data["assessments"])
        

      }).catch((err)=>{
        console.log(err)
      })   
  }, [])  
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  }
  
  // const [grades,setGrades]=useState([]);
  // const [assessments,setAssessments]=useState([]);
  // const [sc,setSc]=useState([]);
  // const [real,setReal]=useState([]);
  // const [ass_spec,setAss]=useState([]);

  
 
  return (
    <div className="App">
        <Header></Header>
        <h2>Overall Student UOI analysis</h2>
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
                <h2 >FORMATIVE ASSESSMENT</h2>
                {
                  assessments.map((a)=>{
                    return <div>
                      <h3>{a.name}</h3>
                      {
                        a.marks.map((m)=>{
                          return (<div>
                            <h4>{m.name}</h4>
                            <table className='famarks'>

                              <tr>
                              <th Style="border:1px solid black;">CRITERIA</th>
                              {
                                m.students.map((stu)=>{
                                  return (
                                    <th Style="border:1px solid black;">{stu.name}</th>
                                  )
                                })
                              }
                              </tr>
                              <tr>
                                <td Style="border:1px solid black;">CONCEPT</td>
                                {
                                    m.students.map((stu)=>{
                                      return (
                                        <td Style="border:1px solid black;">{stu.c1}</td>
                                      )
                                    })
                                }
                              </tr>
                              <tr>
                                <td Style="border:1px solid black;">APPLICATION</td>
                                {
                                    m.students.map((stu)=>{
                                      return (
                                        <td Style="border:1px solid black;">{stu.c2}</td>
                                      )
                                    })
                                }
                              </tr>

                            </table>
                            <OstuFA data={a.marks} name={m.name}></OstuFA>
                            </div>)

                        })
                      }
                    </div>
                  })
                }
            </div>
            <div class={toggleState === 2 ? "tab-pane fade show active" : "tab-pane fade"}>
            <h2 >SUMMATIVE ASSESSMENT</h2>
                {
                  saassessments.map((a)=>{
                    return <div>
                      <h3>{a.name}</h3>
                      {
                        a.marks.map((m)=>{
                          return (<div>
                            <h4>{m.name}</h4>
                            <table className='famarks'>

                              <tr>
                              <th Style="border:1px solid black;">CRITERIA</th>
                              {
                                m.students.map((stu)=>{
                                  return (
                                    <th Style="border:1px solid black;">{stu.name}</th>
                                  )
                                })
                              }
                              </tr>
                              <tr>
                                <td Style="border:1px solid black;">CONCEPT</td>
                                {
                                    m.students.map((stu)=>{
                                      return (
                                        <td Style="border:1px solid black;">{stu.c1}</td>
                                      )
                                    })
                                }
                              </tr>
                              <tr>
                                <td Style="border:1px solid black;">APPLICATION</td>
                                {
                                    m.students.map((stu)=>{
                                      return (
                                        <td Style="border:1px solid black;">{stu.c2}</td>
                                      )
                                    })
                                }
                              </tr>
                              <tr>
                                <td Style="border:1px solid black;">C3</td>
                                {
                                    m.students.map((stu)=>{
                                      return (
                                        <td Style="border:1px solid black;">{stu.c3}</td>
                                      )
                                    })
                                }
                              </tr>
                              <tr>
                                <td Style="border:1px solid black;">C4</td>
                                {
                                    m.students.map((stu)=>{
                                      return (
                                        <td Style="border:1px solid black;">{stu.c4}</td>
                                      )
                                    })
                                }
                              </tr>
                              <tr>
                                <td Style="border:1px solid black;">C5</td>
                                {
                                    m.students.map((stu)=>{
                                      return (
                                        <td Style="border:1px solid black;">{stu.c5}</td>
                                      )
                                    })
                                }
                              </tr>

                            </table>
                            <OstuSA data={a.marks} name={m.name}></OstuSA>
                            </div>)

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
