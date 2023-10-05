import './Grades.css';
import './App.css';
import './Boxes.js';
import React, { useEffect } from 'react';
import Boxes from './Boxes.js';
import { useNavigate } from 'react-router-dom';
import Header from "./Components/Header";
import { onAuthStateChanged } from "firebase/auth";
import creds from './firebase';
import { MdAddCircleOutline } from "react-icons/md";

export const Grades = () => {
  let navigate = useNavigate();

  useEffect(() => {
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
        navigate("/");
      }
    });

  }, [])

  const handleclick = (e) => {
    console.log(e)
    navigate(`/class-details/${e}`)
  };
  const grades = [
    "PKG",
    "LKG",
    "UKG",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8"
  ]
  let grade = "LKG"
  const addStu = () => {
    
          navigate("/Add");
  
      }
  
  return (
    <div>
      <Header />
      {/* <h1 class='Gradename'>Grades </h1>
    <div className='Boxstyle'>
    {
    <button onClick={()=>handleclick(grade)} style={{margin:"30px"}}><Boxes Names={grade}></Boxes></button>
    <button onClick={()=>handleclick(grade)} style={{margin:"30px"}}><Boxes Names={grade}></Boxes></button>
    <button onClick={()=>handleclick(grade)} style={{margin:"30px"}}><Boxes Names={grade}></Boxes></button>
    <button onClick={()=>handleclick(grade)} style={{margin:"30px"}}><Boxes Names={grade}></Boxes></button> */}
      <h1 class='Gradename'>Grades 
      <div><a href='/Add' style={{ position: "absolute", right: "2%", top: "7%" }} onClick={addStu}><MdAddCircleOutline style={{ color: "white", width:"40px", height:"40px"}} /></a>
      <p style={{ position: "absolute", right: "1.5%", top: "16%",fontSize:15 }}>Add Class</p>
</div>
      </h1>
      <div className='Boxstyle'>
        {
          grades.map((grade, index) => {
            return (
              <button onClick={() => handleclick(grade)} style={{ margin: "30px" }}><Boxes Names={grade}></Boxes></button>
            )
          })
        }   </div>

    </div>
  )

}