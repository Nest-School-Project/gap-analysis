import React from 'react'
import Header from './Components/Header';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import { RiFontSize } from 'react-icons/ri';
export const Gostu = () => {
  let c=1;
  let d=1;
     let navigate =useNavigate();
    const {classname,secname}=useParams();
    const[type,setype]=useState("");
    const [UOIStyle,setUoi]=useState({borderRadius:"5px",marginBottom:"15px"});
    // let UOIStyle={borderRadius:"5px",marginBottom:"15px"};
    const [subStyle,setSub]=useState({borderRadius:"5px",marginBottom:"15px"});
    // let subStyle={borderRadius:"5px",marginBottom:"15px",color:"red"};
    
    function handleUOI(e){
      setype(e.target.value);
      // UOIStyle={borderRadius:"5px",marginBottom:"15px",color:"red"};
      setUoi({borderRadius:"5px",marginBottom:"15px",backgroundColor:"green"});
      // console.log(type);
    }
    function handleSubjects(e){
      setype("subjects/"+e.target.value);
      // console.log(type);
      // setSub({borderRadius:"5px",marginBottom:"15px",backgroundColor:"green"});
      // c=1;
    }
    function handleSubmit(){
      console.log(type);
      navigate(`/Gostu/PKG/A/${type}`);
    }
    
    return (
    
      <div>
          <Header></Header>
         <div className='heading'>
          <h1>Class:{classname}</h1>
          <h2>Section:{secname}</h2>
          {/* borderRadius:"5px",marginBottom:"15px" */}
         </div>
         <div className='choosing' style={{display:"block"}}>
          <h2>UOI OR SUBJECTS</h2>
         
          <button style={UOIStyle} value="UOI" onClick={handleUOI}>UOI</button>
          <br></br>
          {/* <br></br> */}
          {/* <button style={subStyle} value="subjects" onClick={handleSubjects}>subjects</button> */}
          <label>Subject</label>
          <select name="subjects" id="sub" onClick={handleSubjects} placeholder='evgh'>
          <option value="" disabled selected hidden>🍑💋</option>
  <option value="eng">Eng</option>
  <option value="mat">Math</option>
  <option value="sci">Science</option>
  <option value="soc">social</option>
    </select>
    <br></br>
          <button onClick={handleSubmit} style={{height:"35px",width:"80px",fontSize:"24px"}}>submit</button>
         </div>
      </div>
      
    )
  
 
}

