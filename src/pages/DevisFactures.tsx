import React, {useState} from 'react';
import {Modal, Table} from "../comopnents";

const DevisFactures: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    let headersDev = ["Commercial", "Client", "Quantité", "Référence"];
    let headersFac = ["Commercial", "Client", "Quantité", "Référence", "State"];

    return (
        <div className="page page-devis-factures">
            <div>
                <h5>Créer un devis</h5>
                <section className="section">
                    <button onClick={openModal}>Créer un devis</button>
                    <Modal isOpen={isModalOpen} closeModal={closeModal} title="Création de devis">
                        <p>Formulaire</p>
                    </Modal>
                </section>
            </div>

            <div>
                <h5>Devis</h5>
                <section className="section">
                    <Table headers={headersDev}>

                    </Table>
                </section>
            </div>

            <div>
                <h5>Factures</h5>
                <section className="section">
                    <Table headers={headersFac}>

                    </Table>
                </section>
            </div>
        </div>
    );
};

export default DevisFactures;