import React from 'react'
import './App.css';
import Header from './Components/Header';
import SideBar from './Components/SideBar';


export const Add=
() =>{
  return (
    <div>
      <Header></Header>
      <SideBar></SideBar>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Acme"></link>

        {/* <h1>ADD CLASS</h1> */}
        <form>
          <br></br>
            <label className='addspace'>Class</label>
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
<label>Section</label>
<select name="Class" id="standard">
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
    <option value="D">D</option>
    </select>

        </form>
    </div>
  )
}


export default Add;