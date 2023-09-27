import React, { useState } from 'react'
import Header from './Components/Header';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import creds from './firebase'
export const Entry = () => {
  let navigate = useNavigate();

  useEffect(() => {
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
      <h1 className="Gradename" >Mark Entry</h1>
      <form style={{ alignItems: "flex-start" }}>
        <label>Name : </label>
        <input placeholder="enter name"
          type="text"
          required
        ></input>
        <br></br>
        <label >Class</label>
        <input
          type="text" placeholder="enter class"
          required
        ></input>
        <br></br>
        <label >Section</label>
        <input
          type="text" placeholder="enter section"
          required
        ></input>
        <br></br>
        <label >USN </label>
        <input
          type="text" placeholder="enter usn"
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

          <table style={{ margin: 'auto', width: '50%' }}>

            <tr>
              <th>Scope and Sequence :</th>
              <td><input type="text" name="TA" /></td>

            </tr>
            <br />
            <tr>
              <th>Enter Scope and Sequence :</th>
              <td><input type="text" name="AS" /></td>

            </tr> <br />
            <tr>
              <th>Real World Application :</th>
              <td><input type="text" name="AT" /></td>
            </tr>
            <tr>
              <th>Assessment Specific :</th>
              <td><input type="text" name="AT" /></td>
            </tr>
          </table>
        </div>


        <div class={toggleState === 2 ? "tab-pane fade show active" : "tab-pane fade"}>
          <table style={{ margin: 'auto', width: '50%' }}>

            <tr>
              <th>Scope and Sequence :</th>
              <td><input type="text" name="TA" /></td>

            </tr>
            <br />
            <tr>
              <th>Scope and Sequence :</th>
              <td><input type="text" name="TA" /></td>

            </tr>
            <br />
            <tr>
              <th>NEST Pillar Reference :</th>
              <td><input type="text" name="TA" /></td>

            </tr><br />
            <tr>
              <th>Approaches to Learning -I :</th>
              <td><input type="text" name="TA" /></td>

            </tr>
            <br />
            <tr>
              <th>Approaches to Learning -II :</th>
              <td><input type="text" name="TA" /></td>

            </tr>
            <br />
            <tr>
              <th>Higher Order Thinking :</th>
              <td><input type="text" name="TA" /></td>

            </tr>
            <br />
          </table>
        </div>
      </div>
      <button type="submit" name="submit" id="btn">Submit</button>
    </div>

  )

}
