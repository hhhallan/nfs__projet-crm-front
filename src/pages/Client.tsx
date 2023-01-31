import React, {useState} from 'react';
import {Modal, TableClient} from "../comopnents";

const Client: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

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
                    <TableClient/>
                </section>
            </div>
        </div>
    );
};

export default Client;