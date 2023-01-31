import React from 'react';
import {TableHistoric} from "../comopnents";

const Historic: React.FC = () => {
    return (
        <div className="page page-historic">
            <h5>Historic</h5>
            <section className="section">
                <TableHistoric />
            </section>
        </div>
    );
};

export default Historic;