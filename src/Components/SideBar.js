import React from 'react';
import { reveal as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Dashboard
      </a>

      <a className="menu-item" href="/Add">
        Add Class
      </a>  

      <a className="menu-item" href="/Student">
      Add Student
      </a>

      <a className="menu-item" href="/Themes">
        Add Theme
      </a>

    </Menu>
  );
};