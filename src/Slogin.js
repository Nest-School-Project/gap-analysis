
import React from 'react'
import { Component } from 'react';
import nest1 from "./Components/nest1.png"
import nest2 from "./Components/nest2.png"
import nest3 from "./Components/nest3.png"
import nest4 from "./Components/nest4.png"
import logo from "./Components/logo.jpg"
import { useNavigate } from "react-router-dom";
import {  signInWithEmailAndPassword } from 'firebase/auth';
import creds from './firebase';
import "./log.css"
import { useState } from 'react';


export const Slidelogin = () => {
    const [toggleState, setToggleState] = useState(1);
    const handleSliderClickPrev=()=>{
        if(toggleState==1){
            setToggleState(4)
        }
        else{
            setToggleState(toggleState-1)
        }
        
        
    }
    
    const handleSliderClickNext=()=>{
        if(toggleState==4){
            setToggleState(1)
        }
        else
        setToggleState(toggleState+1)
        
    }
    const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onLogin = (e) => {
    console.log("here")
      e.preventDefault();
      signInWithEmailAndPassword(creds.auth, email, password)
      .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/grade");
          console.log(user);
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          window.alert("Invalid Credentials, Try Again");
          console.log(errorCode, errorMessage);
      });
     
  }


  return (
    <div>
<head>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"/>
   
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Barlow"/>
   
    <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet"/>
    
    <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.0/css/mdb.min.css" rel="stylesheet"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet"></link>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>
{/* <link rel='stylesheet' id='wsl-widget-css'  href='https://mdbcdn.b-cdn.net/wp-content/plugins/wordpress-social-login/assets/css/style.css?ver=5.6.2' type='text/css' media='all' />
<link rel='stylesheet' id='compiled.css-css'  href='https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/css/compiled-4.19.2.min.css?ver=4.19.2' type='text/css' media='all' /> */}
{/* <link rel="stylesheet" href="css/log.css"/> */}
</head>
<body >
    
    {/* <script>
  $(document).ready(function () {
    $('#dtBasicExample').DataTable()
    $('.dataTables_length').addClass('bs-select');
  });
</script> */}

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.0/js/mdb.min.js"></script>

<div class="scontainer mt-5" >
    <div class="row justify-content-center" >
        <div class="col-md-8" style={{marginLeft:"300px", marginTop:"50px"}} >
            <div class="carousel slide z-depth-5" data-ride="carousel" id="demo">
                 <div class="carousel-inner">
    <div class={toggleState === 1 ? "carousel-item active" : "carousel-item"}>
        <img src={nest1} height="650px" width="700px" ></img>
    </div>


    <div class={toggleState === 2 ? "carousel-item active" : "carousel-item"}>
        <img src={nest2} height="650px" width="700px"></img>
    </div>
    <div class={toggleState === 3 ? "carousel-item active" : "carousel-item"}>
        <img src={nest3} height="650px" width="700px"></img>
    </div>
    <div class={toggleState === 4 ? "carousel-item active" : "carousel-item"} >
        <img src={nest4} height="650px" width="700px"></img>
    </div>
</div>
<a href="#demo" class="carousel-control-prev" data-slide="prev" onClick={handleSliderClickPrev}>
    <span class="carousel-control-prev-icon"></span>
</a>
<a href="#demo" class="carousel-control-next" data-slide="next" onClick={handleSliderClickNext}>
    <span class="carousel-control-next-icon"></span>
</a>
            </div>
        </div>
        <div class="slogin" style={{marginLeft:"300px", marginTop:"50px" }}>
            <form action="form-control">
                <div class="avatar text-center">
                    <img src={logo} class="rounded-circle mr-3"></img>
                </div>
                <div class="md-form mt-5">
                    <input type="text" id="text" class = "logtxt" name="text" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>  
                    <label for="text"  class="text-black"></label>          
                     </div>
                     <div class="md-form mt-5">
                    <input type="password" class = "logtxt" id="pswd" name="pswd"  placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>  
                    <label for="pswd" class="text-black"></label>          
                     </div>
                     
                     <button type="button" class = "logtxt-btn" onClick={onLogin} >Submit</button>
            </form>
        </div>
    </div>
</div>

</body>
    </div>
  )
}
