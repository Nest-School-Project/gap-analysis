import React from 'react'
import menu3 from "./menu3.png"
import logo from "./logo2.svg"
import SideBar from './SideBar'
import { useNavigate } from 'react-router-dom'; 
import {  signOut } from "firebase/auth";
import creds from '../firebase';
import { RiLogoutBoxRLine } from "react-icons/ri";


const Header = () => {
// JavaScript to toggle the hamburger state
// JavaScript to toggle the hamburger state
let navigate=useNavigate();

const handleLogout = () => {
  signOut(creds.auth).then(() => {
        window.alert("Logged out successfully");
        navigate("/");

    }).catch((error) => {
    window.alert("Logout unsuccessful, try again. ")
    })
}


return (
    <div>

      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet"></link>
      <link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Barlow"></link>
      <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@500&display=swap" rel="stylesheet"></link>
      <nav class="text-primary">
        <div class="container-fluid">
          <SideBar></SideBar>
          <img src={logo} alt="nest" id="nestlogo" width="50" height="50" />
          <a href='/Slogin' style={{ position: "absolute", right: "2%", top: "8%" }} onClick={handleLogout}><RiLogoutBoxRLine style={{ color: "white", width:"40px", height:"40px"}} /></a>

        </div>
      </nav>



    </div>
  )
}

export default Header
