import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import ChartComponent from '../ChartComponent';
import { indiaTemperatureData } from '../../data/indiaTemperatureData';

const IndiaTemperatureChart = () => (
  <ChartComponent title="Average Annual Temperature in India (2001-2023)">
    <LineChart data={indiaTemperatureData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis domain={[25, 27]} />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="temperature" stroke="#8884d8" name="Avg. Temperature (°C)" />
    </LineChart>
  </ChartComponent>
);

export default IndiaTemperatureChart;
