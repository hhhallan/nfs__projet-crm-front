import React from 'react';
import {Table} from "../comopnents";
import {logs} from "../services/constants/historic";

const Historic: React.FC = () => {
    let headers = ["Source", "Target", "Type", "Date", "Message"];

    return (
        <div className="page page-historic">
            <h5>Historic</h5>
            <section className="section">
                <Table headers={headers}>
                    {logs.map((log) => (
                        <tr key={log.id}>
                            <td>{log.source}</td>
                            <td>{log.target}</td>
                            <td>{log.type}</td>
                            <td>{log.date}</td>
                            <td>{log.message}</td>
                        </tr>
                    ))}
                </Table>
            </section>
        </div>
    );
};

export default Historic;