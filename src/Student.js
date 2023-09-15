import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import SideBar from './Components/SideBar';


export const Student = () => {
  let navigate = useNavigate();
  const handleclick = () => {
    navigate("/Grade")
  };
  return (
    <div className='Stu'>
      <Header></Header>
      <SideBar></SideBar>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Acme"></link>
      <div className='Sd'>
    <p>Student Entry</p>

      <form>
        <label>Name:</label>
        <input type='text' name='Name' placeholder='name' ></input>
        <br></br>
        <label >Class:</label>
        <select name="Class" id="standard" Style="width:250px">
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
        <select name="Class" id="standard" Style="width:250px" >
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
        </select>
        <br></br>
        <label>USN No:</label>
        <input type='text' name='Class' placeholder='class'></input>
        <br></br>
        <button onClick={handleclick}>submit</button>

      </form>
    </div>
    </div>



  )
}
