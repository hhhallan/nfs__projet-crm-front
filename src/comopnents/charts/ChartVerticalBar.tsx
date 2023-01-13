import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Devis / Factures',
            font: {
                family: "Poppins"
            }
        },
    },
};
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Devis',
            data: [8, 7.8, 6, 8, 7, 5, 6],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Facture',
            data: [8, 7.8, 6, 8, 7, 5, 6],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

const ChartVerticalBar = () => {
    return (
        <div className="chart">
            <Bar data={data} options={options} />
        </div>
    );
};

export default ChartVerticalBar;