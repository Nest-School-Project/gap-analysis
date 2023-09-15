import React, { useState } from 'react'
import Header from './Components/Header';
import './App.css';
export const Themes = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  }
return (
    <div ><Header></Header>
 <p className="Gradename" >THEMES</p>
      <h1>Assessment Info and Evidence Sheet</h1>
      <br />
      <form>
        <div class="container"><span transform="-90px">
          <label >Select Class</label>
          <div class="dropdown">
            <button class="dropbtn"> --Select-- </button>
            <div class="dropdown-content">
              <a href="#">LKG</a>
              <a href="#">UKG</a>
              <a href="#">Grade 1</a>
              <a href="#">Grade 2</a>
              <a href="#">Grade 3</a>
              <a href="#">Grade 4</a>
              <a href="#">Grade 5</a>
              <a href="#">Grade 6</a>
              <a href="#">Grade 7</a>
              <a href="#">Grade 8</a>
            </div>
          </div></span>
          <span transform="-90px">
            <label >Select Section</label>
            <div class="dropdown">
              <button class="dropbtn"> --Select-- </button>
              <div class="dropdown-content">
                <a href="#">Section A</a>
                <a href="#">Section B</a>
                <a href="#">Section C</a>
              </div>
            </div></span>
        </div > <br></br>
        <table>
  
  <tr>
    <th>Enter Theme Name :</th>
    <td><input type="text" name="TA"/></td>
  
  </tr>
  <tr>
  <th>Enter Central Idea :</th>
    <td><input type="text" name="AS"/></td>
  
  </tr>
  <tr>
  <th>Enter Line of Inquiry :</th>
    <td><input type="text" name="AT"/></td>
  
  </tr>
</table>
 {/* <div class="container">
          <span transform="-90px">
            <label >Enter Theme Name</label>
            <div class="dropdown"><input type="text" id="theme" name="theme"></input>
            </div> </span>
        </div>
        <br></br>
        <div class="container">
          <span transform="-90px">
            <label >Enter Central Idea</label>
            <div class="dropdown"><input type="text" id="idea" name="idea"></input>
            </div> </span>
        </div>
        <br></br>
        <div class="container">
          <span transform="-90px">
            <label >Enter Line of Inquiry</label>
            <div class="dropdown"><input type="text" id="inquiry" name="inquiry"></input>
            </div> </span>
        </div> */}
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
          {/* <br /><br />
          <h2>FORMATIVE ASSESSMENT</h2>
          <hr />
          <span transform="-90px">
            <label >Type of Assessment:</label>
            <div class="dropdown"><input type="text" id="type_as" name="type_as"></input>
            </div> </span>
          <br></br>
          <span transform="-90px">
            <label >Assessment Stratergy :</label>
            <div class="dropdown"><input type="text" id="strat" name="strat"></input>
            </div> </span>
          <br></br>
          <span transform="-90px">
            <label >Assessment Tool :</label>
            <div class="dropdown"><input type="text" id="tool" name="tool"></input>
            </div> </span>
          <br></br> */}

<h2>FORMATIVE ASSESSMENT</h2>
<hr />
<table>
  
  <tr>
    <th>Type of Assessment:</th>
    <td><input type="text" name="TA"/></td>
  
  </tr>
  <tr>
  <th>Assessment Stratergy :</th>
    <td><input type="text" name="AS"/></td>
  
  </tr>
  <tr>
  <th>Assessment Tool :</th>
    <td><input type="text" name="AT"/></td>
  
  </tr>
</table>
<br>
</br>
<br></br>
<table>
  <tr>
    <th>LEADS</th>
    <th>CRITERIA</th>
  </tr>
  <tr>
    <th>SCOPE AND SEQUENCE</th>
    <td><input type="text" name="TA"/></td>
  
  </tr>
  <tr>
  <th>SCOPE AND SEQUENCE</th>
    <td><input type="text" name="AS"/></td>
  
  </tr>
  <tr>
  <th>SUCCESS CRITERIA FROM UNIT PLANNER</th>
    <td><input type="text" name="AT"/></td>
  
  </tr>
  <tr>
  <th>ACADEMIC SPECIFIC</th>
    <td><input type="text" name="AT"/></td>
  
  </tr>
</table>

        </div>
        <div class={toggleState === 2 ? "tab-pane fade show active" : "tab-pane fade"}>
        <h2>SUMMATIVE ASSESSMENT</h2>
<hr />
<table>
  
  <tr>
    <th>Type of Assessment:</th>
    <td><input type="text" name="TA"/></td>
  
  </tr>
  <tr>
  <th>Assessment Stratergy :</th>
    <td><input type="text" name="AS"/></td>
  
  </tr>
  <tr>
  <th>Assessment Tool :</th>
    <td><input type="text" name="AT"/></td>
  
  </tr>
</table>
<br>
</br>
<br></br>
<table>
  <tr>
    <th>LEADS</th>
    <th>CRITERIA</th>
  </tr>
  <tr>
    <th>SCOPE AND SEQUENCE</th>
    <td><input type="text" name="TA"/></td>
  
  </tr>
  <tr>
  <th>SCOPE AND SEQUENCE</th>
    <td><input type="text" name="AS"/></td>
  
  </tr>
  <tr>
  <th>REAL WORLD APPLICATION</th>
    <td><input type="text" name="AT"/></td>
  
  </tr>
  <tr>
  <th>NEST PILLAR REFERENCE</th>
    <td><input type="text" name="AT"/></td>
  
  </tr>
  <tr>
  <th>APPROACHES TO PILLAR REFERENCE - I</th>
    <td><input type="text" name="AT"/></td>
  
  </tr>
  <tr>
  <th>APPROACHES TO PILLAR REFERENCE - II</th>
    <td><input type="text" name="AT"/></td>
  
  </tr>
  <tr>
  <th>HIGHER ORDER THINKING</th>
    <td><input type="text" name="AT"/></td>
  
  </tr>
</table>
        </div>
        <br></br>
      </div>
      <input type="SUBMIT" name="AT"/>
</div>
)
}
