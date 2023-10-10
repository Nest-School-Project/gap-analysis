import React, { useState } from 'react'
import Header from './Components/Header';
import './App.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import creds from './firebase';
import { GrScorecard } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { AiOutlineEye } from "react-icons/ai";
import { BsPersonFillGear } from "react-icons/bs";
export const Class_details = () => {
    let navigate = useNavigate();
    const handleclick=(e)=>
    {
        console.log(e.target
            )
        navigate("/Entry/aravi")
    };


    // const handleclick = () => {
    //     navigate("/GapAnalysis")
    //   };
      const handleclickk = () => {
        navigate("/Entry")
      };
      const handleChange=()=>{
     navigate(`/${classname}/${secname}`)
      };
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
    const [toggleState, setToggleState] = useState(1);
    const [secname,setsecname]=useState('A');
    const toggleTab = (index) => {
        setToggleState(index);
        setsecname(String.fromCharCode(index+64))
    }
    const students = [{
        "usn": "12345",
        "name": "Mark",
        "section": "A",
    },
    {
        "usn": "12356",
        "name": "Antony",
        "section": "B"
    },
    {
        "usn": "4567",
        "name": "Brat",
        "section": "C"
    },
    {
        "usn": "09892",
        "name": "Samuel",
        "section": "D"
    }
    ]
    const sections = [
        "A",
        "B",
        "C",
        "D"
    ]
    const { classname } = useParams();
    
    const addStu = () => {
    
        navigate("/Student");

    }
    return (
        <div ><Header></Header>
            <h1 className="Gradename" >Class : {classname}
            </h1>
            <ul class="nav nav-tabs" id="myTabs" role="tablist">
                {
                    sections.map((sec, index) => {
                        return (<li class="nav-item">
                            <button class={toggleState === index + 1 ? "nav-link active" : "nav-link"} onClick={() => toggleTab(index + 1)}>Section {sec}</button>
                        </li>)
                    })
                }
            </ul>

            <div class="tab-content" id="myTabsContent">
                {
                    sections.map((section, index) => {
                        return (

                            <div className={toggleState === index + 1 ? "tab-pane face show active" : "tab-pane fade"}>
                                <br></br><h1 style={{ textAlign:'center' }}>Section {section}</h1><br></br>
                                <button id='btn1'  onClick={handleChange}>MARKS UPLOAD</button>
                                <Link to="/Ostu">
                                <button type="button"  id='btn1'  >Overall Subject Analysis</button>
      </Link><Link to="/Ouoi">
                                <button type="button"id='btn1' >Overall UOI Analysis</button>      <br></br>     <br></br></Link>
                           
                                <table class='table' style={{ borderBlock: '2px black solid', borderInline:'2px black solid' }}>
                                    <thead >
                                        <tr>
                                            <th scope="col">S.No</th>
                                            <th scope="col">USN</th>
                                            <th scope="col">First Name</th>
                                            <th scope="col">Last Name</th>
                                            <th scope="col">Grades</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            students.map((student, index) => {
                                                if (student.section === section) {
                                                    return (
                                                        <tr>
                                                            <td>{index + 1}</td>
                                                            <th scope="row">{student.usn}</th>
                                                            <td>{student.name}</td>
                                                            <td>G</td>

                                                            {/* <td><button id="ebtn">View</button></td> */}
                                                            
                                                            <td><a href={"/GapAnalysis/"+student.name} ><AiOutlineEye style={{ color: "black"}}/></a></td>
                                                            <td><a href={"/Entry/"+student.name}><GrScorecard style={{ color: "black"}}/></a></td>
                                                             
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
        
    );
}
