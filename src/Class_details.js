import React, { useState } from 'react'
import Header from './Components/Header';
import './App.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import creds from './firebase';

export const Class_details = () => {
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
          window.alert("User is logged out, Log in again")
          navigate("/");
        }
      });
     
}, [])    
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    const students=[{
        "usn":"12345",
        "name":"Mark",
        "section":"A",
    },
    {
        "usn":"12356",
        "name":"Antony",
        "section":"B"
    },
    {
        "usn":"4567",
        "name":"Brat",
        "section":"C"
    },
    {
        "usn":"09892",
        "name":"Samuel",
        "section":"D"
    }
]
    const sections=[
        "A",
        "B",
        "C",
        "D"
    ]
    const {classname}=useParams();
    return (
        <div ><Header></Header>
            <p className="Gradename" >Class:{classname}</p>
            <ul class="nav nav-tabs" id="myTabs" role="tablist">
                {
                    sections.map((sec,index)=>{
                        return (<li class="nav-item">
                    <button class={toggleState === index+1 ? "nav-link active" : "nav-link"} onClick={() => toggleTab(index+1)}>Section {sec}</button>
                </li>)
                    })
                }
            </ul>

            <div class="tab-content" id="myTabsContent">
            {
                sections.map((section,index)=>{
                    return (
                        
                        <div className={toggleState===index+1 ? "tab-pane face show active" : "tab-pane fade"}>
                            <br></br><h2>Section {section}</h2>
                            <table class="table" >
                            <thead>
                                <tr>
                                    <th scope="col">USN</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Grades</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    students.map((student,index)=>{
                                        if(student.section===section){
                                            return (
                                                <tr>
                                                    <th scope="row">{student.usn}</th>
                                                    <td>{student.name}</td>
                                                    <td>G</td>
                                                    <td><a href={"/GapAnalysis/"+student.name}>Gap Analysis</a></td>
                                                </tr>
                                            )
                                        }
                                    })
                                }
                            </tbody>
                            </table>
                        </div>

                    )
                })
            }

               
            </div>
        </div>
    )
}

export default Class_details;