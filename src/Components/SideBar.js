import React from 'react';
import { slide as Menu } from 'react-burger-menu';

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

      <a className="menu-item" href="/Grade">
        Add Theme
      </a>

    </Menu>
  );
};