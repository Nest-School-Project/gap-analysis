import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
 import faker from 'faker';
import Header from './Header';
import { useEffect, useState } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Gap analysis ',
    },
  },
};

const labels = ['FA1', 'FA2', 'FA3', 'FA4', 'FA5', 'FA6', 'FA7'];

let data = {
  labels,
  datasets: [
    {
      label: 'SCOPE',
      data: [30,300],
      borderColor: 'red',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'SEQUENCE',
      data: [70,30],
      borderColor: 'yellow',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function SaOGraph(props) {
    
  const [data,setData]=useState({
    labels,
    datasets: [
      {
        label: 'SCOPE',
        data: [30,300],
        borderColor: 'red',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'SEQUENCE',
        data: [70,30],
        borderColor: 'yellow',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  })
  let connection={
    "NA":0,
    "Emerging":1,
    "Developing":2,
    "Proficient":3,
    "Exemplary":4
  }
  
  useEffect(()=>{
    console.log("here",props)
    let c1_arr=[]
  let c2_arr=[]
  let c3_arr=[]
  let c4_arr=[]
  let c5_arr=[]
  let la=[]
  for(let i=0;i<props.data.length;i++){
    if(props.data[i].name==props.subject){
      for(let j=0;j<props.data[i].students.length;j++){
        la.push(props.data[i].students[j].name)
        c1_arr.push(connection[props.data[i].students[j].c1])
        c2_arr.push(connection[props.data[i].students[j].c2])
        c3_arr.push(connection[props.data[i].students[j].c3])
        c4_arr.push(connection[props.data[i].students[j].c4])
        c5_arr.push(connection[props.data[i].students[j].c5])
      }
    }
  }
  let set=[]
  set.push({
    "label":"c1",
    "data":c1_arr,
    borderColor: 'red',
    backgroundColor: 'rgba(255, 99, 132, 0.5)',

  })
  set.push({
    "label":"c2",
    "data":c2_arr,
    borderColor: 'blue',
    backgroundColor: 'rgba(53, 162, 235, 0.5)',

  })
  set.push({
    "label":"c3",
    "data":c3_arr,
    borderColor: 'green',
    backgroundColor: 'rgba(53, 162, 235, 0.5)',

  })
  set.push({
    "label":"c4",
    "data":c4_arr,
    borderColor: 'black',
    backgroundColor: 'rgba(53, 162, 235, 0.5)',

  })
  set.push({
    "label":"c5",
    "data":c5_arr,
    borderColor: 'grey',
    backgroundColor: 'rgba(53, 162, 235, 0.5)',

  })
    setData({labels:la,datasets:set})
    
  },[])
  
  
  return (
  <div style={{backgroundColor:'white', height:'400px', width:'800px', alignContent:'center'}}>
      
  <Line options={options} data={data} />
  </div>);
  
}
