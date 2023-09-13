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
        <div class="container">
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
        </div>
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
          <br/><br/>
          <h2>FORMATIVE ASSESSMENT</h2>
          <hr/>          
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
            <br></br>  

          </div>
          <div class={toggleState === 2 ? "tab-pane fade show active" : "tab-pane fade"}>
            <br /><br/>
            <h2>SUMMATIVE ASSESSMENT</h2>
            <hr />
            <span transform="-90px">
              <label >Type of Assessment:</label>
              <div class="dropdown"><input type="text" id="type_as" name="type_as"></input>
              </div> </span>
              <span transform="-90px">
            <label >Assessment Stratergy :</label>
            <div class="dropdown"><input type="text" id="strat" name="strat"></input>
            </div> </span>
            <br></br>
            <span transform="-90px">
            <label >Assessment Tool :</label>
            <div class="dropdown"><input type="text" id="tool" name="tool"></input>
            </div> </span>
            <br></br>
          </div>
          <br></br>
        </div>
        
          
    </div>
   
  )
}
