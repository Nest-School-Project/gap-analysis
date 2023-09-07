import './Grades.css';
import'./Boxes.js';
import React, { useState } from 'react';
import Boxes from './Boxes.js';

export const Grades = () => {
  return(<div>
    <h1>Grades </h1>
    <div className='Boxstyle'>
    <Boxes Names="LKG"></Boxes>
    <Boxes Names="UKG"></Boxes>
    <Boxes Names="1"></Boxes>
    <Boxes Names="2"></Boxes>
    <Boxes Names="3"></Boxes>
    {/* <Boxes Names=""></Boxes> */}
    </div>
    </div>
  )

}