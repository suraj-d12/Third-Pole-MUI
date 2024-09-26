import React from 'react';
import { Paper, Typography } from '@mui/material';
import { ResponsiveContainer } from 'recharts';

const ChartComponent = ({ title, children }) => (
  <Paper elevation={3} sx={{ p: 2, height: 300, mb: 2 }}>
    <Typography variant="h6" gutterBottom>{title}</Typography>
    <ResponsiveContainer width="100%" height="90%">
      {children}
    </ResponsiveContainer>
  </Paper>
);

export default ChartComponent;
