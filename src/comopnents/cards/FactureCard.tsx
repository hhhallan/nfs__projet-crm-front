import React from 'react';

interface FactureCardProps {
    cardData: {
        title: string,
        amount: string,
        createdAt: string,
        state: 'brouillon' | 'validée' | 'payée' | string
    };
}

// EN FONCTION DU STATE, PASSER UNE CLASSE AU SPAN et gérer les classes en css

const FactureCard: React.FC<FactureCardProps> = ({cardData: {title, amount, createdAt, state}}) => {
    return (
        <div className="card">
            <div className="card-title-container">
                <p className="card-title">{title}</p>
                <span>state</span>
            </div>
            <div className="card-content">
                <span>{amount}</span>
                <p>{createdAt}</p>
            </div>
        </div>
    );
};

export default FactureCard;