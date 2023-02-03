import React, {useState} from 'react';
import { Button, Modal, Table } from "../comopnents";
import {clients} from "../services/constants/clients";

const Client: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    let headers = ["Nom", "Prénom", "Rôle", "E-mail", "Modifier",];

    const roleSwitch = (role: string) => {
        switch (role) {
            case 'ROLE_USER':
                return 'User';
            case 'ROLE_ADMIN':
                return 'Admin';
            case 'ROLE_COMMERCIAL':
                return 'Commercial';
            default:
                return 'User';
        }
    }

    return (
        <div className="page page-client">
            <div>
                <h5>Ajouter un client</h5>
                <section className="section">
                    <button onClick={openModal}>Ajouter un client</button>
                    <Modal isOpen={isModalOpen} closeModal={closeModal} title="Ajout de client">
                        <p>Formulaire</p>
                    </Modal>
                </section>
            </div>

            <div>
                <h5>Clients</h5>
                <section className="section">
                    <Table headers={headers}>
                        {clients.map((client) => (
                            <tr key={client.id}>
                                <td>{client.lastName}</td>
                                <td>{client.firstName}</td>
                                <td>{roleSwitch(client.role)}</td>
                                <td>{client.email}</td>
                                <td><Button type='button' text="Modifier" link/></td>
                            </tr>
                        ))}
                    </Table>
                </section>
            </div>
        </div>
    );
};

export default Client;