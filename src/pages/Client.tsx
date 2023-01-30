import React from 'react';
import {ListClient} from "../comopnents";

const Client = () => {
    return (
        <div className="page page-client">
            <div>
                <h5>Clients</h5>
                <section className="section">
                    <ListClient/>
                </section>
            </div>
        </div>
    );
};

export default Client;