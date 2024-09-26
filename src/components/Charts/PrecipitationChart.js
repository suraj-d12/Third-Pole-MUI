import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import ChartComponent from '../ChartComponent';
import { weatherData } from '../../data/weatherData';

const PrecipitationChart = () => (
  <ChartComponent title="Precipitation Levels">
    <BarChart data={weatherData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="precipitation" fill="#82ca9d" name="Precipitation (mm)" />
    </BarChart>
  </ChartComponent>
);

export default PrecipitationChart;
