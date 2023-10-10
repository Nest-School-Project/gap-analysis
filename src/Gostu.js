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
    const[type,setype]=useState();
    const [UOIStyle,setUoi]=useState({borderRadius:"5px",marginBottom:"15px"});
    // let UOIStyle={borderRadius:"5px",marginBottom:"15px"};
    const [subStyle,setSub]=useState({borderRadius:"5px",marginBottom:"15px"});
    // let subStyle={borderRadius:"5px",marginBottom:"15px",color:"red"};
    const [toggleState, setToggleState] = useState(1);
    function handleUOI(e){
      setype(e.target.value);
      // UOIStyle={borderRadius:"5px",marginBottom:"15px",color:"red"};
      setUoi({borderRadius:"5px",marginBottom:"15px",backgroundColor:"green"});
      // console.log(type);
    }
    function handleSubjects(e){
      setype(e.target.value);
      // console.log(type);
      // setSub({borderRadius:"5px",marginBottom:"15px",backgroundColor:"green"});
      // c=1;
    }
    function handleSubmit(){
      if(type===undefined){
        window.alert("select something sucker...")
        return
      }
      if(toggleState==1){
        navigate(`/entry/theme/${classname}/${secname}/${type}`)
      }
      else{
        navigate(`/entry/subject/${classname}/${secname}/${type}`);
      }
    }
    const toggleTab = (index) => {
      setype(undefined)
      setToggleState(index);
  }
    
    return (
    
      <div>
          <Header></Header>
          <ul class="nav nav-tabs" id="myTabs" role="tablist">
        <li class="nav-item">
          <button class={toggleState === 1 ? "nav-link active" : "nav-link"} onClick={() => toggleTab(1)}>UOI </button>
        </li>
        <li class="nav-item">
          <button class={toggleState === 2 ? "nav-link active" : "nav-link"} onClick={() => toggleTab(2)}>Subject </button>
        </li>
      </ul>
         <div className='heading'>
          <h1>Class:{classname}</h1>
          <h2>Section:{secname}</h2>
          {/* borderRadius:"5px",marginBottom:"15px" */}
         </div>
         <div className='choosing' style={{display:"block"}}>
         <div class={toggleState === 1 ? "tab-pane fade show active" : "tab-pane fade"}>
         
          <label>UOI</label>
          <select name="subjects" id="sub" onClick={handleUOI} placeholder='evgh'>
          <option value="" disabled selected hidden>....</option>
  <option value="theme1">Theme1</option>
  <option value="theme2">Theme2</option>
  <option value="theme3">Theme3</option>
  <option value="theme4">Theme4</option>
  </select>
  </div>
          
          {/* <br></br> */}
          {/* <button style={subStyle} value="subjects" onClick={handleSubjects}>subjects</button> */}
          <div class={toggleState === 2 ? "tab-pane fade show active" : "tab-pane fade"}>
          <label>Subject</label>
          <select name="subjects" id="sub" onClick={handleSubjects} placeholder='evgh'>
          <option value="" disabled selected hidden>....</option>
  <option value="eng">Eng</option>
  <option value="mat">Math</option>
  <option value="sci">Science</option>
  <option value="soc">social</option>
    </select>
   
    </div>
          <button onClick={handleSubmit} style={{height:"35px",width:"80px",fontSize:"24px"}}>submit</button>
         </div>
      </div>
      
    )
  
 
}

