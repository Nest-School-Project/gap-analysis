import './Grades.css';
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
  return(<div>
    <Header />
    <h1>Grades </h1>
    <div className='Boxstyle'>
    <button onClick={()=>handleclick("LKG")} style={{margin:"30px"}}><Boxes Names="LKG"></Boxes></button>
    <button  onClick={()=>handleclick("UKG")} style={{margin:"30px"}}> <Boxes Names="UKG"></Boxes></button>
    <button onClick={()=>handleclick("1")} style={{margin:"30px"}}> <Boxes Names="1"></Boxes></button>
    <button onClick={()=>handleclick("2")} style={{margin:"30px"}}> <Boxes Names="2"></Boxes></button>
    <button onClick={()=>handleclick("3")} style={{margin:"30px"}}><Boxes Names="3"></Boxes></button>
    <button onClick={()=>handleclick("4")} style={{margin:"30px"}}> <Boxes Names="4"></Boxes></button>
    <button onClick={()=>handleclick("5")} style={{margin:"30px"}}><Boxes Names="5"></Boxes></button>
    <button onClick={()=>handleclick("6")} style={{margin:"30px"}}> <Boxes Names="6"></Boxes></button>
    <button onClick={()=>handleclick("7")} style={{margin:"30px"}}> <Boxes Names="7"></Boxes></button>
    <button onClick={()=>handleclick("8")} style={{margin:"30px"}}><Boxes Names="8"></Boxes></button>
    
    
    </div>
    </div>
  )

}