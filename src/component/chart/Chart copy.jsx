import './chart.scss'
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: 'JAN',
    Gathering_Service: 4000,
  },
  {
    name: 'FEB',
    Gathering_Service: 3000,
  },
  {
    name: 'MAR',
    Gathering_Service: 2000,
  },
  {
    name: 'APR',
    Gathering_Service: 2780,
  },
  {
    name: 'MAY',
    Gathering_Service: 1890,
  },
  {
    name: 'JUN',
    Gathering_Service: 2390,
  },
  {
    name: 'JUL',
    Gathering_Service: 3490,
  },
  {
      name: 'AUG',
      Gathering_Service: 1890,
    },
    {
      name: 'SEP',
      Gathering_Service: 2390,
    },
    {
      name: 'OCT',
      Gathering_Service: 3490,
    },
    {
      name: 'NOV',
      Gathering_Service: 4000,
    },
    {
      name: 'DEC',
      Gathering_Service: 5000,
    },
];



export default function Chart(aspect, title) {
  return (
    <div className='chart'>
       {/* <div className="title">{title}</div> */}
          <ResponsiveContainer width="100%" aspect={aspect} title ={title}
          >
        <BarChart 
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
          
        >
          
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Gathering_Service" fill="#8884d8" />
        </BarChart>
        </ResponsiveContainer>
    </div>


  );
}
