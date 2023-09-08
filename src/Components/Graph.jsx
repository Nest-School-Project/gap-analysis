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
// import faker from 'faker';

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

const labels = ['PA1', 'PA2', 'PA3', 'PA4', 'PA5', 'PA6', 'PA7'];

export const data = {
  labels,
  datasets: [
    {
      label: 'SCOPE',
      data: [30,300,400,500,600,700,800],
      borderColor: 'red',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'SEQUENCE',
      data: [70,300,400,500,600,700,800],
      borderColor: 'yellow',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
        label: 'SUCCESS',
        data: [60,300,400,500,600,700,800],
        borderColor: 'green',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'ASSESSMENT SPECIFIC',
        data: [50,300,400,500,600,700,800],
        borderColor: 'blue',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
  ],
};

export function Graph() {
  return <Line options={options} data={data} />;
}
