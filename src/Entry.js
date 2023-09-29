import React, { useState } from 'react'
import Header from './Components/Header';
import { useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import creds from './firebase';


export const Entry = () => {
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

    <div >
      <Header></Header>
      <h1 className='Gradename'>Mark Entry</h1>
      <form>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Acme"></link>
        
        <label  >Name</label>
        <input 
          type="text"
          required
        ></input>
        <br></br>
        <label >Class</label>
        <input 
          type="text"
          required
        ></input>
        <br></br>
        <label >Sec</label>
        <input 
          type="text"
          required
        ></input>
        <br></br>
        <label >USN </label>
        <input 
          type="text"
          required
        ></input>
        <br></br>


        <label >ASSESSMENT ID : </label>
        <select className="dropbtn">
          <option>FA1</option>
          <option>FA2</option>
          <option>SA1</option>
          <option>SA2</option>
        </select>
      </form>


      <ul class="nav nav-tabs" id="myTabs">
        <li class="nav-item">
          <button class={toggleState === 1 ? "nav-link active" : "nav-link"} onClick={() => toggleTab(1)}>FA</button>
        </li>
        <li class="nav-item">
          <button class={toggleState === 2 ? "nav-link active" : "nav-link"} onClick={() => toggleTab(2)}>SA</button>

        </li>

      </ul>
      <div class="tab-content" id="myTabsContent">
        <div class={toggleState === 1 ? "tab-pane fade show active" : "tab-pane fade"}>
          <label >Scope and Sequence</label>

          <input 
            type="text"
            required
          ></input>
          <br></br>
          <label > Scope and Sequence</label>

          <input 
            type="text"
            required
          ></input><br></br>
          <label >Success Criteria from Unit Planner</label>

          <input 
            type="text"
            required
          ></input><br></br>
          <label >Assessment Specific</label>

          <input 
            type="text"
            required
          ></input>

        </div>


        <div class={toggleState === 2 ? "tab-pane fade show active" : "tab-pane fade"}>


          <label >Scope and Sequence</label>

          <input 
            type="text"
            required
          ></input>
          <br></br>
          <label > Scope and Sequence</label>

          <input 
            type="text"
            required
          ></input><br></br>
          <label >Real World Application</label>

          <input 
            type="text"
            required
          ></input><br></br>
          <label >NEST Pillar Reference</label>

          <input 
            type="text"
            required
          ></input>
          <label >Approaches to Learning -I</label>

          <input 
            type="text"
            required
          ></input>
          <label >Approaches to Learning -II</label>

          <input 
            type="text"
            required
          ></input>
          <label >Higher Order Thinking</label>

          <input 
            type="text"
            required
          ></input>



        </div>

      </div>
      <button id='btn' type="submit" name="submit">Submit</button>

     

    </div>

  )

}
