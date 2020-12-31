import { Line } from 'react-chartjs-2';

const graphData = [
  {
    weekStart: '2020-11-02',
    numberOfTypeA: 23,
    numberOfTypeB: 47,
    numberOfTypeC: 12,
  },
  {
    weekStart: '2020-11-09',
    numberOfTypeA: 27,
    numberOfTypeB: 45,
    numberOfTypeC: 13,
  },
  {
    weekStart: '2020-11-16',
    numberOfTypeA: 29,
    numberOfTypeB: 42,
    numberOfTypeC: 15,
  },
  {
    weekStart: '2020-11-23',
    numberOfTypeA: 32,
    numberOfTypeB: 44,
    numberOfTypeC: 18,
  },
  {

    weekStart: '2020-11-30',
    numberOfTypeA: 35,
    numberOfTypeB: 48,
    numberOfTypeC: 22,
  },
  {
    weekStart: '2020-12-07',
    numberOfTypeA: 37,
    numberOfTypeB: 52,
    numberOfTypeC: 27,
  },
  {
    weekStart: '2020-12-14',
    numberOfTypeA: 40,
    numberOfTypeB: 59,
    numberOfTypeC: 34,
  },
  {
    weekStart: '2020-12-21',
    numberOfTypeA: 45,
    numberOfTypeB: 63,
    numberOfTypeC: 40,
  },
  {
    weekStart: '2020-12-28',
    numberOfTypeA: 46,
    numberOfTypeB: 65,
    numberOfTypeC: 47,
  },
  {
    weekStart: '2021-01-04',
    numberOfTypeA: 49,
    numberOfTypeB: 62,
    numberOfTypeC: 45,
  },
  {
    weekStart: '2021-01-11',
    numberOfTypeA: 53,
    numberOfTypeB: 61,
    numberOfTypeC: 52,
  },
  {
    weekStart: '2021-01-18',
    numberOfTypeA: 59,
    numberOfTypeB: 64,
    numberOfTypeC: 53,
  },
];

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

function LineChart() {
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
  };

  return (
    <div className="chart">
      <Line data={data} options={options} />
    </div>
  );
}

export default LineChart;
