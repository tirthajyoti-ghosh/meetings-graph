import { Line } from 'react-chartjs-2';
import getGraphData from '../API/getGraphData';

const LineChart = () => {
  const graphData = getGraphData();

  const labels = [];
  const typeAData = [];
  const typeBData = [];
  const typeCData = [];

  graphData.forEach(data => {
    labels.push(data.weekStart);
    typeAData.push(data.numberOfTypeA);
    typeBData.push(data.numberOfTypeB);
    typeCData.push(data.numberOfTypeC);
  });

  const data = {
    labels,
    datasets: [
      {
        label: 'Number of Type A',
        data: typeAData,
        borderColor: ['rgba(255, 183, 0, 0.239)'],
        backgroundColor: ['rgba(255, 183, 0, 0.239)'],
        pointBackgroundColor: 'rgba(255, 183, 0, 0.239)',
        pointBorderColor: 'rgba(255, 183, 0, 0.239)',
      },
      {
        label: 'Number of Type B',
        data: typeBData,
        borderColor: ['rgba(54, 162, 235, 0.2)'],
        backgroundColor: ['rgba(54, 162, 235, 0.2)'],
        pointBackgroundColor: 'rgba(54, 162, 235, 0.2)',
        pointBorderColor: 'rgba(54, 162, 235, 0.2)',
      },
      {
        label: 'Number of Type C',
        data: typeCData,
        borderColor: ['rgba(0, 255, 0, 0.2)'],
        backgroundColor: ['rgba(0, 255, 0, 0.2)'],
        pointBackgroundColor: 'rgba(0, 255, 0, 0.2)',
        pointBorderColor: 'rgba(0, 255, 0, 0.2)',
      },
    ],
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
    <div className="App">
      <div className="chart">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChart;
