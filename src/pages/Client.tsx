import React from 'react';
import {TableClient} from "../comopnents";

const Client = () => {
    return (
        <div className="page page-client">
            <div>
                <h5>Clients</h5>
                <section className="section">
                    <TableClient/>
                </section>
            </div>
        </div>
    );
};

export default Client;