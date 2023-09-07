import React from 'react'
import Header from './Components/Header';


export const Entry = () => {
  return (
    <div className='Edit'>
        <Header></Header>
        <form>
            <br></br>
            <br></br>
            <br></br>
            <label className='ins' >Name</label>
            <input
            type="text"
            required
            ></input>
            <br></br>
            <label className='ins'>Class</label>
            <input
            type="text"
            required
            ></input>
            <br></br>
            <label className='ins'>Sec</label>
            <input
            type="text"
            required
            ></input>
            <br></br>
            <label className='ins'>USN No</label>
            <input
            type="text"
            required
            ></input>
<br></br>
<label className='ins'>Assessment type</label>
<span className='space'></span>
    <input type="radio" name="color" value="red"></input>
  <label>FORMATIVE ASSESSMENT</label>
<span className='space'></span>
 
    <input type="radio" name="color" value="blue"></input>
    <label>SUMMATIVE ASSESSMENT</label>
    <br></br>
    <input type="submit" name="submit"></input>  
    </form>


  <ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">FA</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">SA</a>
  </li>
  
</ul>
     </div>
  )
}
