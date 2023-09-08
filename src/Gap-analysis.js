import React from 'react'
import { Graph } from './Components/Graph'
import './App.css';

export const Gap_analysis = () => {
  return (
    <div>
        <h1>GAP ANALYSIS</h1>
        <label className='gap1' >Formative assessment</label>
            <input
            type="text"
            required
            ></input>
    <table>
  <tr>
    <th>Field Label 1</th>
    <td><input type="text" name="field1"/></td>
  </tr>
  <tr>
    <th>Field Label 2</th>
    <td><input type="text" name="field2"/></td>
  </tr>
  
</table>
    <div className='graphst'>
      <Graph></Graph>
    </div>

    </div>
  )
}
