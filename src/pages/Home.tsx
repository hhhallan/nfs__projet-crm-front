import React from 'react';
import {StatsCard, Chart, TableHistoric} from '../comopnents/index';
import {statCards} from "../services/constants/statistics";
import {Chart} from "../comopnents";
import {
    lineChartData,
    lineChartOptions,
    barChartData,
    barChartOptions,
    devisFactureOptions,
    devisFactureData,
    testLineOptions,
    testLineData
} from "../services/constants/charts";

const Home = () => {
    return (
        <div className="page page-home">
            <div>
                <h5>Stats</h5>
                <section className="section">
                    {statCards.map((card, index) => (
                        <StatsCard key={index} cardData={card}/>
                    ))}
                </section>
            </div>

            <div>
                <h5>Graphics</h5>
                <section className="section">
                    <Chart type="line" data={testLineData} options={testLineOptions}/>
                    <Chart type="bar" data={devisFactureData} options={devisFactureOptions}/>
                </section>

                <section className="section">
                    <Chart type="line" data={lineChartData} options={lineChartOptions}/>
                    <Chart type="bar" data={barChartData} options={barChartOptions}/>
                </section>
            </div>
        </div>
    );
};

export default Home;