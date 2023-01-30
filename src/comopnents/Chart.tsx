import React, {FC} from 'react';
import {Bar, Line} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    LineElement,
    PointElement,
    ChartData,
    ChartOptions
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
);

interface Props {
    type: 'line' | 'bar';
    data: ChartData;
    options: ChartOptions;
}

const Chart: FC<Props> = ({type, data, options}) => {
    switch (type) {
        case 'line':
            return <div className="chart"><Line data={data} options={options}/></div>;
        case 'bar':
            return <div className="chart"><Bar data={data} options={options}/></div>;
        default:
            return <div className="chart">Invalid chart type</div>;
    }
}

export default Chart;