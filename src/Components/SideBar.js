import React from 'react';
import { reveal as Menu } from 'react-burger-menu';
import '../App.css'
import { AiOutlineHome } from 'react-icons/ai';
import { BsPersonFillGear } from 'react-icons/bs';
import { HiOutlineViewGridAdd } from 'react-icons/hi';
import { MdAssignmentAdd } from 'react-icons/md';
import { BiSolidBookAdd } from 'react-icons/bi';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/grade">
      <AiOutlineHome style={{ color: "white"}}/> Dashboard
      </a>

      <a className="menu-item" href="/Student">
      <BsPersonFillGear style={{ color: "white"}}/> Modify Student
      </a>

      <a className="menu-item" href="/Themes">
        <HiOutlineViewGridAdd style={{color: "white"}}/> Add Theme
      </a>

      <a className="menu-item" href="/AddSub">
        <BiSolidBookAdd style={{color: "white"}}/> Add Subject
      </a>
      
      <a className="menu-item" href="/AddAssmt"> 
      <MdAssignmentAdd style={{ color: "white"}}/> Add Assessment
      </a>

    </Menu>
  );
};