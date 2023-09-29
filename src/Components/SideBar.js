import React from 'react';
import { reveal as Menu } from 'react-burger-menu';
import '../App.css'

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/grade">
        Dashboard
      </a>
      <a className="menu-item" href="/Grade">
        Select Grades
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

    </Menu>
  );
};