import React,{useState}from 'react'
import Header from './Components/Header';




export const Entry = () => {

  
  const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
<<<<<<< HEAD
    }
    
=======
    } 
    // function Slider() {
    //   // Initialize the slider value with a default value
    //   const [sliderValue, setSliderValue] = useState(50);
    
    //   // Function to update the slider value
    //   const handleSliderChange = (event) => {
    //     setSliderValue(event.target.value);
    //   }};
>>>>>>> a980d772c4169101647e739bd808878fa930c574
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
<label >ASSESSMENT TYPE</label>
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
