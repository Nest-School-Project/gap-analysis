import React,{useState}from 'react'
import Header from './Components/Header';




export const Entry = () => {

  
  const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    } 
    // function Slider() {
    //   // Initialize the slider value with a default value
    //   const [sliderValue, setSliderValue] = useState(50);
    
    //   // Function to update the slider value
    //   const handleSliderChange = (event) => {
    //     setSliderValue(event.target.value);
    //   }};
  return (
    
    <div className='Edit'>
        <Header></Header>
        <form>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Acme"></link>
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
<label className='ins'>ASSESSMENT TYPE</label>
<span className='space'></span>
    <input type="radio" name="color" value="red"></input>
  <label>FORMATIVE ASSESSMENT</label>
<span className='space'></span>
 
    <input type="radio" name="color" value="blue"></input>
    <label>SUMMATIVE ASSESSMENT</label>
    <br></br>
    <input type="submit" name="submit"></input>  
    </form>


    <ul class="nav nav-tabs" id="myTabs">
  <li class="nav-item">
    <button class={toggleState ===1 ? "nav-link active":"nav-link"}onClick={() =>toggleTab(1)}>FA</button>
    </li>
  <li class="nav-item">
  <button class={toggleState ===2 ? "nav-link active":"nav-link"}onClick={() =>toggleTab(2)}>SA</button>
   
  </li>
 
</ul>

<div class="tab-content">
  <div class="tab-pane fade show active" id="content1">
   <label>Scope and Sequence</label>
<br></br>
<div class="slidecontainer">
  <input type="range" min="1" max="100" value="50" class="slider" id="myRange"/>
</div>
   <label>Scope and Sequence</label>
   <br></br>
   
   <label>Scope and Sequence</label>
   <br></br>
   <label>Scope and Sequence</label>
   <br></br>
  </div>
  <div class="tab-pane fade" id="content2">
   
    <p>This is the content of Tab 2.</p>
  </div>
 
</div>

<div>
      <input
        type="range"
        id="myRange"
        value={sliderValue}
        onChange={handleSliderChange}
      />
      <p>Value: {sliderValue}</p>
    </div>

     </div>
     
  )
  
}
export default Slider;