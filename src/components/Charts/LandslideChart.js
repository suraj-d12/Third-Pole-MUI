import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import ChartComponent from '../ChartComponent';
import { landslideData } from '../../data/landslideData';

const LandslideChart = () => (
  <ChartComponent title="Landslide Deaths Over Time">
    <LineChart data={landslideData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="deaths" stroke="#ff7300" name="Deaths from Landslides" />
    </LineChart>
  </ChartComponent>
);

export default LandslideChart;
