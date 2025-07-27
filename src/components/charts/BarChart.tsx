import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

// Register necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Monthly Active Users (k)',
      data: [15, 18, 21, 24, 30, 35],
      backgroundColor: 'rgba(99, 102, 241, 0.7)', // Indigo-500 from Tailwind
    },
    {
      label: 'New Subscriptions',
      data: [50, 60, 70, 80, 100, 120],
      backgroundColor: 'rgba(16, 185, 129, 0.7)', // Emerald-500 from Tailwind
    },
    {
      label: 'Churn Rate (%)',
      data: [5, 4.5, 4, 3.8, 3.5, 3],
      backgroundColor: 'rgba(239, 68, 68, 0.7)', // Red-500 from Tailwind
    },
  ],
}

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'SaaS Startup Metrics (H1)',
      font: {
        size: 18,
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
}

export default function BarChart() {
  return <Bar data={data} options={options} />
}
