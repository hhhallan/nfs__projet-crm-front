import React from 'react';

interface FactureCardProps {
    cardData: {
        id: string,
        title: string,
        amount: string,
        createdAt: string,
        state: 'brouillon' | 'validée' | 'payée' | string
    };
}

// EN FONCTION DU STATE, PASSER UNE CLASSE AU SPAN et gérer les classes en css

const FactureCard: React.FC<FactureCardProps> = ({cardData: {id, title, amount, createdAt, state}}) => {
    return (
        <a className="card card-link" href={'/devis/'+id}>
            <div className="card-title-container">
                <p className="card-title">Facture N°{title}</p>
                <span>state</span>
            </div>
            <div className="card-content">
                <span>{amount}</span>
                <p>{createdAt}</p>
            </div>
        </a>
    );
};

export default FactureCard;