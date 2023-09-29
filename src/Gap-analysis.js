import React from 'react'
import { Graph } from './Components/Graph'
import './App.css';
import { useParams } from 'react-router-dom';
import Header from './Components/Header';
import { useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import creds from './firebase';


export const Gap_analysis = () => {
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
     
})    
 
  const {name}=useParams();
  return (
    <div className='ga'>
      
      <Header ></Header>
        <h1>GAP ANALYSIS:{name}</h1>      
    <div className='graphst'>
      <h2>Formative Assessment</h2>
      <table className='famarks'>
        <tr>
          <th Style="border:1px solid black;" >CRITERIA</th>
          <th Style="border:1px solid black;">FA1</th>
          <th Style="border:1px solid black;">FA2</th>
       
        </tr>
        <tr>
          <td Style="border:1px solid black;">SCOPE AND SEQUENCE</td>
          <td Style="border:1px solid black;">80</td>
          <td Style="border:1px solid black;">80</td>
        </tr>
        <tr>
          <td Style="border:1px solid black;">SCOPE AND SEQUENCE</td>
          <td Style="border:1px solid black;">80</td>
          <td Style="border:1px solid black;">80</td>
        </tr>
        <tr>
          <td Style="border:1px solid black;">SUCCESS CRITERIA FROM UNIT PLANNER</td>
          <td Style="border:1px solid black;">80</td>
          <td Style="border:1px solid black;">80</td>
        </tr>
        <tr>
          <td Style="border:1px solid black;">ASSESSMENT SPECIFIC</td>
          <td Style="border:1px solid black;">80</td>
          <td Style="border:1px solid black;">80</td>
        </tr>
      </table>
      <Graph></Graph>
      <h2>Summative Assessment</h2>
      <table className='famarks'>
        <tr>
          <th Style="border:1px solid black;" >CRITERIA</th>
          <th Style="border:1px solid black;">FA1</th>
          <th Style="border:1px solid black;">FA2</th>
        </tr>
        <tr>
          <td Style="border:1px solid black;">SCOPE AND SEQUENCE</td>
          <td Style="border:1px solid black;">80</td>
          <td Style="border:1px solid black;">80</td>
        </tr>
        <tr>
          <td Style="border:1px solid black;">SCOPE AND SEQUENCE</td>
          <td Style="border:1px solid black;">80</td>
          <td Style="border:1px solid black;">80</td>
        </tr>
        <tr>
          <td Style="border:1px solid black;">SUCCESS CRITERIA FROM UNIT PLANNER</td>
          <td Style="border:1px solid black;">80</td>
          <td Style="border:1px solid black;">80</td>
        </tr>
        <tr>
          <td Style="border:1px solid black;">ASSESSMENT SPECIFIC</td>
          <td Style="border:1px solid black;">80</td>
          <td Style="border:1px solid black;">80</td>
        </tr>
      </table>
   
    </div>

    </div>
  )
}
