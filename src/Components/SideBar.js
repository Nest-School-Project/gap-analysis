import React from 'react';
import { reveal as Menu } from 'react-burger-menu';
import '../App.css'

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/grade">
        Dashboard
      </a>

      <a className="menu-item" href="/Add">
        Add Class
      </a>  

      <a className="menu-item" href="/Student">
      Modify Student
      </a>

      <a className="menu-item" href="/Themes">
        Add Theme
      </a>
      <a className="menu-item" href="/AddSub">
        Add Subject
      </a>
      
      <a className="menu-item" href="/AddAssmt">
        Add Assessment
      </a>

    </Menu>
  );
};