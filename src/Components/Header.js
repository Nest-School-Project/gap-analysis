import React from 'react'
import menu3 from "./menu3.png"

import logo from "./logo2.svg"
import SideBar from './SideBar'
import { useNavigate } from 'react-router-dom'; 
const Header = () => {
// JavaScript to toggle the hamburger state
// JavaScript to toggle the hamburger state
let Navigate=useNavigate();
const handleLogout = () => {
  Navigate('/')
}
return (
    <div>
     
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet"></link>
<link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet"></link>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Acme"></link>
 <nav class="text-primary">
<div class="container-fluid">
<SideBar></SideBar>
<img src={logo} alt="nest" id="nestlogo" width="50" height="50"/>
<button style={{height:"50px", width:"150px",color:"orange",position:"absolute",right:"5%",top:"5%",border:"solid orange 5px 5px",borderRadius:"30px 15px",boxShadow:"1px 1px 1px 1px"}} onClick={handleLogout}>LOGOUT</button>

</div>
 </nav>



    </div>
  )
}

export default Header
