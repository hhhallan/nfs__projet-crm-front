import React from 'react';
import {Button, Header} from "../comopnents";
import {StatCard} from "../comopnents/cards/cards";
import {ListClient} from "../comopnents/index";

const Home = () => {
    return (
        <div className="page page-home">
            <h5>Status</h5>
            <section className="section-2">
                <StatCard/>
                <StatCard/>
                <StatCard/>
                <StatCard/>
            </section>
            <section className="section-3">
                <ListClient/>
            </section>
        </div>
    );
};

export default Home;