import React, { useContext } from 'react';
import {StatsCard, Chart} from '../../comopnents/index';
import {statCards} from "../../services/constants/statistics";
import { AuthContext } from '../../auth/AuthContext';
import {
    lineChartData,
    lineChartOptions,
    barChartData,
    barChartOptions,
    devisFactureOptions,
    devisFactureData,
    testLineOptions,
    testLineData
} from "../../services/constants/charts";

const UserHome: React.FC = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="page page-home">
            <div>
                <h5>Stats User</h5>
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

export default UserHome;