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

    <div className='Edit'>
      <Header></Header>
      <form>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Acme"></link>
        <br></br>
        <br></br>
        <br></br>
        <label className='ins' >Name</label>
        <input className='lab'
          type="text"
          required
        ></input>
        <br></br>
        <label className='ins'>Class</label>
        <input className='lab'
          type="text"
          required
        ></input>
        <br></br>
        <label className='ins'>Sec</label>
        <input className='lab'
          type="text"
          required
        ></input>
        <br></br>
        <label className='ins'>USN </label>
        <input className='lab'
          type="text"
          required
        ></input>
        <br></br>


        <label >ASSESSMENT ID : </label>
        <select>
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
          <label className='ins'>Scope and Sequence</label>

          <input className='lab'
            type="text"
            required
          ></input>
          <br></br>
          <label className='ins'> Scope and Sequence</label>

          <input className='lab'
            type="text"
            required
          ></input><br></br>
          <label className='ins'>Success Criteria from Unit Planner</label>

          <input className='lab'
            type="text"
            required
          ></input><br></br>
          <label className='ins'>Assessment Specific</label>

          <input className='lab'
            type="text"
            required
          ></input>

        </div>


        <div class={toggleState === 2 ? "tab-pane fade show active" : "tab-pane fade"}>


          <label className='ins'>Scope and Sequence</label>

          <input className='lab'
            type="text"
            required
          ></input>
          <br></br>
          <label className='ins'> Scope and Sequence</label>

          <input className='lab'
            type="text"
            required
          ></input><br></br>
          <label className='ins'>Real World Application</label>

          <input className='lab'
            type="text"
            required
          ></input><br></br>
          <label className='ins'>NEST Pillar Reference</label>

          <input className='lab'
            type="text"
            required
          ></input>
          <label className='ins'>Approaches to Learning -I</label>

          <input className='lab'
            type="text"
            required
          ></input>
          <label className='ins'>Approaches to Learning -II</label>

          <input className='lab'
            type="text"
            required
          ></input>
          <label className='ins'>Higher Order Thinking</label>

          <input className='lab'
            type="text"
            required
          ></input>



        </div>

      </div>
      <input type="submit" name="submit"></input>

     

    </div>

  )

}
