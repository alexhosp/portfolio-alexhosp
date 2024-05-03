'use client';
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export const CommitsPerMonthLineChart: React.FC<{
  monthlyCommits: number[];
}> = ({ monthlyCommits }) => {
  const chartData = monthlyCommits
    .map((commits, index) => {
      const currentDate = new Date(); // create date object from current date
      // set current year, data recieved is from last 4 months
      // set date to first day of each month
      const monthDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - index,
        1,
      );

      return {
        month: monthDate.toLocaleString('default', { month: 'long' }),
        year: monthDate.getFullYear(),
        commits,
      };
    })
    .reverse(); // start from 4 months ago
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <LineChart
        data={chartData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='month' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type='monotone' dataKey='commits' stroke='#0471e4' />
      </LineChart>
    </ResponsiveContainer>
  );
};
