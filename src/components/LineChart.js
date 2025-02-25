import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const LineChart = ({ dataPoints }) => {
  const data = {
    labels: dataPoints.map((item) => item.label),
    datasets: [
      {
        label: 'CSK Share Price',
        data: dataPoints.map((item) => item.value),
        borderColor: '#34C759',
        backgroundColor: '#34C759',
        pointBackgroundColor: '#34C759',
        pointBorderColor: '#fff',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
        },
      },
      y: {
        grid: {
          color: 'rgba(200, 200, 200, 0.2)',
        },
        beginAtZero: false,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
