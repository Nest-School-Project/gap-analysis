import './Grades.css';
import './App.css';
import'./Boxes.js';
import React, { useState } from 'react';
import Boxes from './Boxes.js';
import { useNavigate} from 'react-router-dom';
import Header from "./Components/Header";

export const Grades = () => {
  let navigate=useNavigate();
  
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
  let grade="LKG"
  return(<div>
    <Header ></Header>
    <h1 id="title">Grades </h1>
    <div className='Boxstyle'>
    <button onClick={()=>handleclick(grade)} style={{margin:"30px"}}><Boxes Names={grade}></Boxes></button>
    <button onClick={()=>handleclick(grade)} style={{margin:"30px"}}><Boxes Names={grade}></Boxes></button>
    <button onClick={()=>handleclick(grade)} style={{margin:"30px"}}><Boxes Names={grade}></Boxes></button>
    <button onClick={()=>handleclick(grade)} style={{margin:"30px"}}><Boxes Names={grade}></Boxes></button>
    <button onClick={()=>handleclick(grade)} style={{margin:"30px"}}><Boxes Names={grade}></Boxes></button>
    <button onClick={()=>handleclick(grade)} style={{margin:"30px"}}><Boxes Names={grade}></Boxes></button>

    <button onClick={()=>handleclick(grade)} style={{margin:"30px"}}><Boxes Names={grade}></Boxes></button>
    <button onClick={()=>handleclick(grade)} style={{margin:"30px"}}><Boxes Names={grade}></Boxes></button>
    <button onClick={()=>handleclick(grade)} style={{margin:"30px"}}><Boxes Names={grade}></Boxes></button>
    <button onClick={()=>handleclick(grade)} style={{margin:"30px"}}><Boxes Names={grade}></Boxes></button>

    {/* {
      grades.map((grade,index)=>{
        return (
          <button onClick={()=>handleclick(grade)} style={{margin:"30px"}}><Boxes Names={grade}></Boxes></button>
        )
      })
  }   */}
    </div>
    </div>
  )

}