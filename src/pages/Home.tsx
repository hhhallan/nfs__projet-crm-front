import React from 'react';
import {StatsCard} from '../comopnents/index';
import {statCards} from "../services/constants/statistics";
import {Button} from "../comopnents";

const Home = () => {
    return (
        <div className="page page-home">
            <h5>Stats</h5>
            <section className="section">
                {statCards.map((card, index) => (
                    <StatsCard key={index} cardData={card}/>
                ))}
            </section>
        </div>
    );
};

export default Home;