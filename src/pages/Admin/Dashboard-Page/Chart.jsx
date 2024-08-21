import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Charts = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Vendors",
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: "#b965e8",
        tension: 0.1,
      },
      {
        label: "Customers",
        data: [28, 48, 40, 19, 86, 27],
        fill: false,
        borderColor: "#ff4800",
        tension: 0.1,
      },
      {
        label: "Purchases",
        data: [18, 48, 77, 9, 100, 33],
        fill: false,
        borderColor: "#00b3ff",
        tension: 0.1,
      },
      {
        label: "Sales",
        data: [28, 75, 50, 29, 76, 50],
        fill: false,
        borderColor: "#1eff00",
        tension: 0.1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Months",
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Values",
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default Charts;
