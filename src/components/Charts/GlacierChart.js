oimport React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import ChartComponent from '../ChartComponent';
import { glacierData } from '../../data/glacierData';

const GlacierChart = () => (
  <ChartComponent title="Glacier Retreat Over Time">
    <LineChart data={glacierData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="area" stroke="#8884d8" name="Glacier Area (relative units)" />
    </LineChart>
  </ChartComponent>
);

export default GlacierChart;
