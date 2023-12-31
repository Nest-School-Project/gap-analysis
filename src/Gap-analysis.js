import React from 'react'
import { Graph } from './Components/Graph'
import './App.css';
import { useParams } from 'react-router-dom';
import Header from './Components/Header';
export const Gap_analysis = () => {
  const {name}=useParams();
  return (
    <div>
      <Header ></Header>
        <h1>GAP ANALYSIS:{name}</h1>

        {/* <label className='gap1' >Formative assessment</label>
            <input
            type="text"
            required
            ></input>
    <table>
  <tr>
    <th>Field Label 1 {name} </th>
    <td><input type="text" name="field1"/></td>
  </tr>
  <tr>
    <th>Field Label 2</th>
    <td><input type="text" name="field2"/></td>
  </tr>
  
</table> */}         
    <div className='graphst'>
      <h2>Formative Assessment</h2>
      <table className='famarks'>
        <tr>
          <th>PA1</th>
          <th>PA2</th>
          <th>PA3</th>
        </tr>
        <tr>
          <td>70</td>
          <td>80</td>
          <td>80</td>
        </tr>
        <tr>
          <td>70</td>
          <td>80</td>
          <td>80</td>
        </tr>
        <tr>
          <td>70</td>
          <td>80</td>
          <td>80</td>
        </tr>
      </table>
      <Graph></Graph>
   
    </div>

    </div>
  )
}
