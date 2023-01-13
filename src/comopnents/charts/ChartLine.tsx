import React from 'react';
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from "chart.js";

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

export const data = {
    labels: ["May 12", "May 13", "May 14", "May 15", "May 16", "May 17", "May 18", ],
    datasets: [{
        data: [8, 7.8, 6, 8, 7, 5, 6],
        backgroundColor: 'transparent',
        borderColor: 'red',
        pointBorderColor: 'green',
        pointBorderWidth: 4,
        tension: 0.5
    }]
};
export const options = {
    responsive: true,
    plugins: {
        legend: false,
        title: {
            display: true,
            text: 'Devis / Factures',
            font: {
                family: "Poppins"
            }
        },
    }
};

const ChartLine = () => {
    return (
        <div className="chart">
            <Line data={data} options={options} />
        </div>
    );
};

export default ChartLine;