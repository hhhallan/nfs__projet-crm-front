import React, {useState} from 'react';
import {Modal, DevisCard, Table, FactureCard, Button} from "../comopnents";
import {devisCards} from "../services/constants/devis";
import {factureCards} from "../services/constants/factures";

const DevisFactures: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filter, setFilter] = useState(false);

    const handleClick = () => {
        setFilter(!filter);
    }

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

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

            <Button onClick={handleClick} text="Changer de type" type="button" link/>

            {
                filter ?
                    <>
                        <h5>Devis</h5>
                        <section className="section">
                            {devisCards.map((card, index) => (
                                <DevisCard key={index} cardData={card}/>
                            ))}
                        </section>
                    </>
                    :
                    <>
                        <h5>Factures</h5>
                        <section className="section">
                            {factureCards.map((card, index) => (
                                <FactureCard key={index} cardData={card}/>
                            ))}
                        </section>
                    </>
            }
        </div>
    );
};

export default DevisFactures;