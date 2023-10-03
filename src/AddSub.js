import React, { useState } from 'react'
import Header from './Components/Header';
import './App.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import creds from './firebase';


export const AddSub = () => {
  let navigate=useNavigate();
  useEffect(()=>{
    onAuthStateChanged(creds.auth, (user) => {
        if (user) {
          const uid = user.uid;
          console.log("uid", uid)
        } else {
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
      <p className="Gradename" >SUBJECT</p>
      <h1>Add Subject</h1>
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
            <th>Enter Subject Name :</th>
            <td><input type="text" name="TA" /></td>

          </tr>
          <br />
          <tr>
            <th>Enter Subject Code :</th>
            <td><input type="text" name="AS" /></td>

          </tr> <br />
        </table>

        <br></br>
      </form>
      <button id="btn" type="SUBMIT" name="AT" >Submit</button>
    </div>
  )
}