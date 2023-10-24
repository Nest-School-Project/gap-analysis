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

export const data = {
  labels,
  datasets: [
    {
      label: 'SCOPE',
      data: [30,300,200,250,100,300,80],
      borderColor: 'red',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'SEQUENCE',
      data: [70,30,40,50,60,70,80],
      borderColor: 'yellow',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
        label: 'SUCCESS',
        data: [60,300,400,500,600,70,800],
        borderColor: 'green',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'ASSESSMENT SPECIFIC',
        data: [50,150,170,360,600,700,800],
        borderColor: 'blue',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
  ],
};

export function Graph(props) {
  
  let params_data=props.data
  let l=[]
  params_data.map((params,index)=>{
    params.marks.map((p)=>{
      if(l.includes(p.name)==false){
        l.push(p.name)
      }
    })
  })
  console.log(l)
  return (
  <div style={{backgroundColor:'white', height:'400px', width:'800px', alignContent:'center'}}>
      
  <Line options={options} data={data} />
  </div>);
}
