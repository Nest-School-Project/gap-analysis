import React from 'react'
import Header from './Components/Header';
import { useParams } from 'react-router-dom';
import './App.css';
export const Gostu = () => {
  
    const {classname,secname}=useParams();
  return (
    
    <div>
        <Header></Header>
       <div className='heading'>
        <h1>Class:{classname}</h1>
        <h2>Section:{secname}</h2>

       </div>
       <div className='choosing'>
        <h2>UOI OR SUBJECTS</h2>
        <label></label>
        <input type="radio" id="UOI" name="type" value="UOI"></input>
       </div>
    </div>
    
  )
}

