import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import getGraphData from '../API/getGraphData';
import parseGraphData from '../helpers/parseGraphData';

const LineChart = () => {
  // Format input graph data to match react-chartjs dataset.

  const {
    labels, typeAData, typeBData, typeCData,
  } = parseGraphData(getGraphData());

  // Prepare dataset for each type.

  const typeADataset = {
    label: 'Number of Type A',
    data: typeAData,
    borderColor: ['rgba(255, 183, 0, 0.239)'],
    backgroundColor: ['rgba(255, 183, 0, 0.239)'],
    pointBackgroundColor: 'rgba(255, 183, 0, 0.239)',
    pointBorderColor: 'rgba(255, 183, 0, 0.239)',
  };

  const typeBDataset = {
    label: 'Number of Type B',
    data: typeBData,
    borderColor: ['rgba(54, 162, 235, 0.2)'],
    backgroundColor: ['rgba(54, 162, 235, 0.2)'],
    pointBackgroundColor: 'rgba(54, 162, 235, 0.2)',
    pointBorderColor: 'rgba(54, 162, 235, 0.2)',
  };

  const typeCDataset = {
    label: 'Number of Type C',
    data: typeCData,
    borderColor: ['rgba(0, 255, 0, 0.2)'],
    backgroundColor: ['rgba(0, 255, 0, 0.2)'],
    pointBackgroundColor: 'rgba(0, 255, 0, 0.2)',
    pointBorderColor: 'rgba(0, 255, 0, 0.2)',
  };

  // Initialize state

  const [datasets, setDatasets] = useState([typeADataset, typeBDataset, typeCDataset]);
  const [type, setType] = useState('all');

  // Callback function to handle type change.

  const handleChange = e => {
    const type = e.target.value;
    setType(type);

    // Change dataset according to the selected type.

    if (type === 'all') {
      setDatasets([typeADataset, typeBDataset, typeCDataset]);
    } else if (type === 'numberOfTypeA') {
      setDatasets([typeADataset]);
    } else if (type === 'numberOfTypeB') {
      setDatasets([typeBDataset]);
    } else if (type === 'numberOfTypeC') {
      setDatasets([typeCDataset]);
    }
  };

  const data = {
    labels,
    datasets,
  };

  const options = {
    title: {
      display: true,
      text: 'Line Chart',
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 70,
            stepSize: 10,
          },
        },
      ],
    },
    maintainAspectRatio: false,
  };

  return (
    <>
      <select value={type} onChange={handleChange}>
        <option value="all" key="all">All</option>
        <option value="numberOfTypeA" key="numberOfTypeA">TypeA</option>
        <option value="numberOfTypeB" key="numberOfTypeB">TypeB</option>
        <option value="numberOfTypeC" key="numberOfTypeC">TypeC</option>
      </select>
      <div className="App">
        <div className="chart">
          <Line data={data} options={options} />
        </div>
      </div>
    </>
  );
};

export default LineChart;
