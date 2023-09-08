import './Grades.css';
import'./Boxes.js';
import React, { useState } from 'react';
import Boxes from './Boxes.js';
import { useNavigate } from 'react-router-dom';

export const Grades = () => {
  let navigate=useNavigate();
  const handleclick = () => {
    navigate("/entry")
  };
  return(<div>
    <h1>Grades </h1>
    <div className='Boxstyle'>
    <button onClick={handleclick} style={{margin:"30px"}}><Boxes Names="LKG"></Boxes></button>
    <button  style={{margin:"30px"}}> <Boxes Names="UKG"></Boxes></button>
    <button style={{margin:"30px"}}> <Boxes Names="1"></Boxes></button>
    <button style={{margin:"30px"}} > <Boxes Names="2"></Boxes></button>
    <button style={{margin:"30px"}}><Boxes Names="3"></Boxes></button>
    <button style={{margin:"30px"}}> <Boxes Names="4"></Boxes></button>
    <button style={{margin:"30px"}}><Boxes Names="5"></Boxes></button>
    <button style={{margin:"30px"}}> <Boxes Names="6"></Boxes></button>
    <button style={{margin:"30px"}}> <Boxes Names="7"></Boxes></button>
    <button style={{margin:"30px"}}><Boxes Names="8"></Boxes></button>
    
    </div>
    </div>
  )

}