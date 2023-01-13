import React from 'react';
import {StatsCard} from '../comopnents/index';
import {statCards} from "../services/constants/statistics";
import {Button, ChartLine, ChartVerticalBar} from "../comopnents";


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
                    <ChartLine/>
                    <ChartVerticalBar/>
                </section>
            </div>

        </div>
    );
};

export default Home;