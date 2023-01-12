import React from 'react';
import {StatsCard} from '../comopnents/cards/index';

const statsData = {
    title: "titre",
    data: "123k",
    percentage: "-72%"
}
const devisData = {
    title: "Devis",
    data: "26",
    percentage: "-72%"
}


const Home = () => {
    return (
        <div className="page page-home">
            <h5>Stats</h5>
            <section className="section">
                <StatsCard cardData={devisData}/>
                <StatsCard cardData={statsData}/>
                <StatsCard cardData={statsData}/>
                <StatsCard cardData={statsData}/>
            </section>

            <section className="section">

            </section>
        </div>
    );
};

export default Home;