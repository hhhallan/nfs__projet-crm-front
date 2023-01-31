import React, {useState} from 'react';
import {Modal} from "../comopnents";

const DevisFactures: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

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
                    <p>devis</p>
                </section>
            </div>

            <div>
                <h5>Factures</h5>
                <section className="section">
                    <p>facture</p>
                </section>
            </div>
        </div>
    );
};

export default DevisFactures;