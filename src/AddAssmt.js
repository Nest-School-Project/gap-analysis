import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import {collection,addDoc} from 'firebase/firestore';
import creds from './firebase';

export const AddAssmt = () => {
  let navigate=useNavigate();
  const [classes, setClass] = useState('LKG');
  const [section, setSection] = useState('A');
  const [theme, setTheme] = useState('');
  const [subject, setSubject] = useState('');
  const [assessment, setAssessment] = useState('');
        
  const handleSectionChange = (e) => {
    console.log(e.target.value)
    setSection(e.target.value);
  };

  const handleClassChange = (e) => {
    console.log(e.target.value)
    setClass(e.target.value);
  };

  const handleThemeChange = (e) => {
    console.log(e.target.value)
    setTheme(e.target.value);
  };

  const handleAssessmentChange = (e) => {
    console.log(e.target.value)
    setAssessment(e.target.value);
  };
  const handleSubjectChange = (e) => {
    console.log(e.target.value)
    setSubject(e.target.value);
  };

  const handleSubmit = async () => {
    try{
      const addClass= await addDoc(collection(creds.db,"Assessment"),{
        "Class":classes,
        "Section":section,
        "Theme/Subject":theme,
        "Assessment ID":assessment
      });
    }
    catch (err){
      console.log(err)
    }
      
  };
    useEffect(()=>{
    onAuthStateChanged(creds.auth, (user) => {
        if (user) {
          const uid = user.uid;
          console.log("uid", uid)
        } else {
          navigate("/");
        }
      });
      
})

const [toggleState, setToggleState] = useState(1);
const toggleTab = (index) => {
    setToggleState(index);
}

  return (
    <div >
      <Header></Header>
      <h1 class='Gradename'>Add Assessment</h1>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Acme"></link>
      <ul class="nav nav-tabs" id="myTabs" role="tablist">
        <li class="nav-item">
          <button class={toggleState === 1 ? "nav-link active" : "nav-link"} onClick={() => toggleTab(1)}>UOI </button>
        </li>
        <li class="nav-item">
          <button class={toggleState === 2 ? "nav-link active" : "nav-link"} onClick={() => toggleTab(2)}>Subject </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabsContent">
        <div class={toggleState === 1 ? "tab-pane fade show active" : "tab-pane fade"}>
          <form className='Sd'>
          <h1 >UOI</h1>
            <br />
          
        <label >Class:</label>
        <select  className="dropbtn" value={classes} onChange={handleClassChange} Style="width:250px">
          <option value="LKG">LKG</option>
          <option value="UKG">UKG</option>
          <option value="1th">1st</option>
          <option value="2nd">2nd</option>
          <option value="3rd">3rd</option>
          <option value="4th">4th</option>
          <option value="5th">5th</option>
          <option value="6th">6th</option>
          <option value="7th">7th</option>
          <option value="8th">8th</option>

        </select>
        <br></br>
        <label>Section:</label>
        <select  className="dropbtn" value={section} onChange={handleSectionChange} Style="width:250px" >
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
        </select>
       <br></br>
       <label>Enter Theme:</label>
        <input type='text' value={theme} onChange={handleThemeChange} name='Theme' placeholder='Theme Name'></input>
        <br></br>
        <label>Enter Assessment:</label>
        <input type='text' name='Class' value={assessment} onChange={handleAssessmentChange} placeholder='Assessment ID'></input>
        <br></br>
        <button onClick={handleSubmit} id='btn'>Submit</button>
</form>

    </div>
    </div>
      <div class="tab-content" id="myTabsContent">
        <div class={toggleState === 2 ? "tab-pane fade show active" : "tab-pane fade"}>
          <form className='Sd'>
          <h1 >Subject</h1>
            <br />
          
        <label >Class:</label>
        <select  className="dropbtn" value={classes} onChange={handleClassChange} Style="width:250px">
          <option value="LKG">LKG</option>
          <option value="UKG">UKG</option>
          <option value="1th">1st</option>
          <option value="2nd">2nd</option>
          <option value="3rd">3rd</option>
          <option value="4th">4th</option>
          <option value="5th">5th</option>
          <option value="6th">6th</option>
          <option value="7th">7th</option>
          <option value="8th">8th</option>

        </select>
        <br></br>
        <label>Section:</label>
        <select  className="dropbtn" value={section} onChange={handleSectionChange} Style="width:250px" >
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
        </select>
       <br></br>
       <label>Enter Subject Name:</label>
        <input type='text' name='Subject' value={subject} onChange={handleSubjectChange} placeholder='Subject Name'></input>
       <br></br>
       <label>Enter Assessment:</label>
        <input type='text' name='Assessment' value={assessment} onChange={handleAssessmentChange} placeholder='Assessment ID'></input>
       <br></br>
        <button onClick={handleSubmit} id='btn'>submit</button>
</form>

    </div>
    </div>
      
    </div>
  )
}
