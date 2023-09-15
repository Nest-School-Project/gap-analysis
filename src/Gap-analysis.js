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
          <th Style="border:1px solid black;" >CRITERIA</th>
          <th Style="border:1px solid black;">FA1</th>
          <th Style="border:1px solid black;">FA2</th>
          {/* <th Style="border:1px solid black;">FA3</th> */}
          {/* <th Style="border:1px solid black;">FA4</th>
          <th Style="border:1px solid black;">FA5</th>
          <th Style="border:1px solid black;">FA6</th>
          <th Style="border:1px solid black;">FA7</th>
          <th Style="border:1px solid black;">FA8</th>
          <th Style="border:1px solid black;">FA9</th>
          <th Style="border:1px solid black;">FA10</th> 
          <th Style="border:1px solid black;">FA11</th>
          <th Style="border:1px solid black;">FA12</th> */}
        </tr>
        <tr>
          <td Style="border:1px solid black;">SCOPE AND SEQUENCE</td>
          <td Style="border:1px solid black;">80</td>
          <td Style="border:1px solid black;">80</td>
        </tr>
        <tr>
          <td Style="border:1px solid black;">SCOPE AND SEQUENCE</td>
          <td Style="border:1px solid black;">80</td>
          <td Style="border:1px solid black;">80</td>
        </tr>
        <tr>
          <td Style="border:1px solid black;">SUCCESS CRITERIA FROM UNIT PLANNER</td>
          <td Style="border:1px solid black;">80</td>
          <td Style="border:1px solid black;">80</td>
        </tr>
        <tr>
          <td Style="border:1px solid black;">ASSESSMENT SPECIFIC</td>
          <td Style="border:1px solid black;">80</td>
          <td Style="border:1px solid black;">80</td>
        </tr>
      </table>
      <Graph></Graph>
      <h2>Summative Assessment</h2>
      <table className='famarks'>
        <tr>
          <th Style="border:1px solid black;" >CRITERIA</th>
          <th Style="border:1px solid black;">FA1</th>
          <th Style="border:1px solid black;">FA2</th>
          {/* <th Style="border:1px solid black;">FA3</th> */}
          {/* <th Style="border:1px solid black;">FA4</th>
          <th Style="border:1px solid black;">FA5</th>
          <th Style="border:1px solid black;">FA6</th>
          <th Style="border:1px solid black;">FA7</th>
          <th Style="border:1px solid black;">FA8</th>
          <th Style="border:1px solid black;">FA9</th>
          <th Style="border:1px solid black;">FA10</th> 
          <th Style="border:1px solid black;">FA11</th>
          <th Style="border:1px solid black;">FA12</th> */}
        </tr>
        <tr>
          <td Style="border:1px solid black;">SCOPE AND SEQUENCE</td>
          <td Style="border:1px solid black;">80</td>
          <td Style="border:1px solid black;">80</td>
        </tr>
        <tr>
          <td Style="border:1px solid black;">SCOPE AND SEQUENCE</td>
          <td Style="border:1px solid black;">80</td>
          <td Style="border:1px solid black;">80</td>
        </tr>
        <tr>
          <td Style="border:1px solid black;">SUCCESS CRITERIA FROM UNIT PLANNER</td>
          <td Style="border:1px solid black;">80</td>
          <td Style="border:1px solid black;">80</td>
        </tr>
        <tr>
          <td Style="border:1px solid black;">ASSESSMENT SPECIFIC</td>
          <td Style="border:1px solid black;">80</td>
          <td Style="border:1px solid black;">80</td>
        </tr>
      </table>
   
    </div>

    </div>
  )
}
