import React, { useState } from 'react'
import Header from './Components/Header';
import './App.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import creds from './firebase';


export const Themes = () => {
  let navigate=useNavigate();
  useEffect(()=>{
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
          window.alert("User is logged out, Log in again")
          navigate("/");
        }
      });   
}, [])    
  
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  }
  return (
    <div className="App" ><Header></Header>
      <p className="Gradename" >THEMES</p>
      <h1>Assessment Info and Evidence Sheet</h1>
      <br />
      <form>
        <div class="container"><span transform="-90px">
          <label >Select Class</label>
          <select className="dropbtn" Style="width:350px">
            <option value="LKG">LKG</option>
            <option value="UKG">UKG</option>
            <option value="1st">1st</option>
            <option value="2nd">2nd</option>
            <option value="3rd">3rd</option>
            <option value="4th">4th</option>
            <option value="5th">5th</option>
            <option value="6th">6th</option>
            <option value="7th">7th</option>
            <option value="8th">8th</option>

          </select>
        </span>
          <span transform="-90px">
            <label >Select Section</label>
            <select className="dropbtn" Style="width:350px" >
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
          </span>
        </div > <br></br>
        <table style={{ margin: 'auto', width: '50%' }}>

          <tr>
            <th>Enter Theme Name :</th>
            <td><input type="text" name="TA" /></td>

          </tr>
          <br />
          <tr>
            <th>Enter Central Idea :</th>
            <td><input type="text" name="AS" /></td>

          </tr> <br />
          <tr>
            <th>Enter Line of Inquiry :</th>
            <td><input type="text" name="AT" /></td>

          </tr>
        </table>

        <br></br>
      </form>
      <ul class="nav nav-tabs" id="myTabs" role="tablist">
        <li class="nav-item">
          <button class={toggleState === 1 ? "nav-link active" : "nav-link"} onClick={() => toggleTab(1)}>FA</button>
        </li>
        <li class="nav-item">
          <button class={toggleState === 2 ? "nav-link active" : "nav-link"} onClick={() => toggleTab(2)}>SA</button>
        </li>
      </ul>
      <div class="tab-content" id="myTabsContent">
        <div class={toggleState === 1 ? "tab-pane fade show active" : "tab-pane fade"}>
          <br/>
          <h1 >FORMATIVE ASSESSMENT</h1>
          <hr />
          <table style={{ margin: "auto",textAlign:"left" }}>
            <tr>
              <th>Type of Assessment:</th>
              <td><input type="text" name="TA" /></td>
            </tr>
            <tr>
              <th>Assessment Stratergy :</th>
              <td><input type="text" name="AS" /></td>
            </tr>
            <tr>
              <th>Assessment Tool :</th>
              <td><input type="text" name="AT" /></td>
            </tr>
          </table>
          <br>
          </br>
          <br></br>
          <table style={{ margin: "auto", textAlign:"left" }}>
            <tr>
              <th>LEADS</th>
              <th>CRITERIA</th>
            </tr>
            <tr>
              <th>SCOPE AND SEQUENCE</th>
              <td><input type="text" name="TA" /></td>

            </tr>
            <tr>
              <th>SCOPE AND SEQUENCE</th>
              <td><input type="text" name="AS" /></td>

            </tr>
            <tr>
              <th>SUCCESS CRITERIA FROM UNIT PLANNER</th>
              <td><input type="text" name="AT" /></td>

            </tr>
            <tr>
              <th>ACADEMIC SPECIFIC</th>
              <td><input type="text" name="AT" /></td>

            </tr>
          </table>

        </div>
        <div class={toggleState === 2 ? "tab-pane fade show active" : "tab-pane fade"}>
          <br/>
          <h1>SUMMATIVE ASSESSMENT</h1>
          <hr />
          <table style={{ margin: "auto",textAlign:"left" }}>

            <tr>
              <th>Type of Assessment:</th>
              <td><input type="text" name="TA" /></td>

            </tr>
            <tr>
              <th>Assessment Stratergy :</th>
              <td><input type="text" name="AS" /></td>

            </tr>
            <tr>
              <th>Assessment Tool :</th>
              <td><input type="text" name="AT" /></td>

            </tr>
          </table>
          <br>
          </br>
          <br></br>
          <table style={{ margin: "auto",textAlign:"left" }}>
            <tr>
              <th>LEADS</th>
              <th>CRITERIA</th>
            </tr>
            <tr>
              <th>SCOPE AND SEQUENCE</th>
              <td><input type="text" name="TA" /></td>

            </tr>
            <tr>
              <th>SCOPE AND SEQUENCE</th>
              <td><input type="text" name="AS" /></td>

            </tr>
            <tr>
              <th>REAL WORLD APPLICATION</th>
              <td><input type="text" name="AT" /></td>

            </tr>
            <tr>
              <th>NEST PILLAR REFERENCE</th>
              <td><input type="text" name="AT" /></td>

            </tr>
            <tr>
              <th>APPROACHES TO PILLAR REFERENCE - I</th>
              <td><input type="text" name="AT" /></td>

            </tr>
            <tr>
              <th>APPROACHES TO PILLAR REFERENCE - II</th>
              <td><input type="text" name="AT" /></td>

            </tr>
            <tr>
              <th>HIGHER ORDER THINKING</th>
              <td><input type="text" name="AT" /></td>

            </tr>
          </table>
        </div>
        <br></br>
      </div>
      <button id="btn" type="SUBMIT" name="AT" >Submit</button>
    </div>
  )
}
