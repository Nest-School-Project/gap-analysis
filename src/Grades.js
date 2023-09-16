import './Grades.css';
import './App.css';
import'./Boxes.js';
import React, { useEffect } from 'react';
import Boxes from './Boxes.js';
import { useNavigate} from 'react-router-dom';
import Header from "./Components/Header";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';

export const Grades = () => {
  let navigate=useNavigate();

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
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
  
  const handleclick = (e) => {
    console.log(e)
    navigate(`/class-details/${e}`)
  };
  const grades=[
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
  return(<div>
    <Header />
    <h1 id="title">Grades </h1>
    <div className='Boxstyle'>
    {
      grades.map((grade,index)=>{
        return (
          <button onClick={()=>handleclick(grade)} style={{margin:"30px"}}><Boxes Names={grade}></Boxes></button>
        )
      })
  }  
    </div>
    </div>
  )

}