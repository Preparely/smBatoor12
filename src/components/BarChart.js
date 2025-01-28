import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { dataset, valueFormatter } from './dataset/weather';

const chartSetting = {
  // yAxis: [
  //   {
  //     label: 'rainfall (mm)',
  //   },
  // ],
  width: 645,
  height: 355,
  // sx: {
  //   [`.${axisClasses.left} .${axisClasses.label}`]: {
  //     transform: 'translate(-20px, 0)',
  //   },
  // },
};

export default function BarChartt() {
  return (
    <BarChart
    dataset={dataset}
    xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
    series={[
      { dataKey: 'london' },
      { dataKey: 'paris', valueFormatter },
      { dataKey: 'newYork', valueFormatter, color: '#FAAC5682' },
      { dataKey: 'seoul', valueFormatter, color: '#F4AC56' },
    ]}
    {...chartSetting}
  />
  );
}