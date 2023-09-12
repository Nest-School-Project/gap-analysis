import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';


export const Student = () => {
    let navigate=useNavigate();
  const handleclick = () => {
    navigate("/entry")
  };
  return (
    <div className='Stu'>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Acme"></link>
    <p>Student Entry</p>

    <form>
        <label>Name:</label>
        <input type='text' name='Name' placeholder='name' ></input>
        <br></br>
        <label>Class:</label>
  <select name="Class" id="standard">
    <option value="LKG">LKG</option>
    <option value="UKG">UKG</option>
    <option value="1th">1th</option>
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
        <input type='text' name='Class' placeholder='class'></input>
        <br></br>
        <label>USN No:</label>
        <input type='text' name='Class' placeholder='class'></input>
        <br></br>
        <button onClick={handleclick}>submit</button>
        
    </form>
    </div>

    

  )
}
