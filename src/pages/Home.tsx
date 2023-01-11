import React from 'react';
import {Button, Header} from "../comopnents";
import {StatCard} from "../comopnents/cards/cards";

const Home = () => {
    return (
        <div className="page page-home">
            <h5>Status</h5>
            <section className="section-1">
                <StatCard/>
                <StatCard/>
                <StatCard/>
                <StatCard/>
            </section>
        </div>
    );
};

export default Home;