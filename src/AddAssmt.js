import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import {collection,addDoc} from 'firebase/firestore';
import creds from './firebase';
import axios from "axios";

export const AddAssmt = () => {
  let navigate=useNavigate();
  const [classes, setClass] = useState();
  const [theme, setTheme] = useState('');
  const [assessment, setAssessment] = useState('');
  const [grades,setGrades]=useState([]);
  const [themes,setThemes]=useState([]);
  const [assessment_type,setAssessmentType]=useState();
  const handleClassChange = (e) => {
    
    setClass(e.target.value);
  };

  const handleThemeChange = (e) => {
    
    setTheme(e.target.value);
  };

  const handleAssessmentChange = (e) => {
    
    setAssessment(e.target.value);
  };
  
  const handleTypeChange=(e)=>{
    setAssessmentType(e.target.value)
  }
  const handleSubmit = () => {
      let assessment_for=""
      if(toggleState==1){
        assessment_for="UOI"
      }else{
        assessment_for="subject"
      }
      axios.post("http://localhost:8000/create-assessment/",{
        "assessment_for":assessment_for,
        "assessment_type":assessment_type,
        "theme":theme,
        "grade":classes,
        "assessment_name":assessment
      }).then(response=>{
        console.log(response)
      }).catch(err=>{
        console.log(err)
      })
  };
    useEffect(()=>{
      axios.get("http://localhost:8000/get-grades/").then((response) => {
      let temp=[]
      response.data.map((d,index)=>{
        temp.push(d.name)
      })
      setGrades(temp)
      
    }).catch(err=>{
      console.log(err)
    });

    axios.get("http://localhost:8000/get-themes/").then(response=>{
      let theme_arr=[]
      response.data.map((d,index)=>{
        theme_arr.push({
          "grade":d.grade.name,
          "theme":d.name
        })
      })
      setThemes(theme_arr)
    })
    onAuthStateChanged(creds.auth, (user) => {
        if (user) {
          const uid = user.uid;
          console.log("uid", uid)
        } else {
          navigate("/");
        }
      });
      
},[])

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
          <option value=""></option>
          {
            grades.map((grade,index)=>{
              return <option value={grade}>{grade}</option>
            })
          }
        </select>
        <br></br>
       <label>Enter Theme:</label>
        <select  className="dropbtn"  onChange={handleThemeChange} Style="width:250px">
          <option value=""></option>
          {
            themes.map((th,index)=>{
              if (th.grade==classes){
                return <option value={th.theme}>{th.theme}</option>
              }
            })
          }
        </select>
        <br></br>
        <label>Enter Assessment Type</label>
        <select  className="dropbtn"  onChange={handleTypeChange} Style="width:250px">
        <option value=""></option>
          <option value="FA">FA</option>
          <option value="SA">SA</option>
        </select>
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
        <select  className="dropbtn"  onChange={handleClassChange} Style="width:250px">
        <option value=""></option>
          {
            grades.map((grade,index)=>{
              return <option value={grade}>{grade}</option>
            })
          }

        </select>
        <br></br>
        <label>Enter Assessment Type</label>
        <select  className="dropbtn"  Style="width:250px" onChange={handleTypeChange}>
        <option value=""></option>
          <option value="FA">FA</option>
          <option value="SA">SA</option>
        </select>
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
