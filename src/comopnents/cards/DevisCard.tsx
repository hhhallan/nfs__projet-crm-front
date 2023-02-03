import React from 'react';

interface DevisCardProps {
    cardData: {
        id: string,
        title: string,
        amount: string,
        createdAt: string
    };
}

const DevisCard: React.FC<DevisCardProps> = ({cardData: {id, title, amount, createdAt}}) => {
    return (
        <a className="card card-link" href={'/devis/'+id}>
            <p className="card-title">Devis N°{title}</p>
            <div className="card-content">
                <span>{amount}</span>
                <p>{createdAt}</p>
            </div>
        </a>
    );
};

export default DevisCard;