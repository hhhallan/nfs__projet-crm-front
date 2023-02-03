import React from 'react';

interface DevisCardProps {
    cardData: {
        title: string,
        amount: string,
        createdAt: string
    };
}

const DevisCard: React.FC<DevisCardProps> = ({cardData: {title, amount, createdAt}}) => {
    return (
        <div className="card">
            <p className="card-title">{title}</p>
            <div className="card-content">
                <span>{amount}</span>
                <p>{createdAt}</p>
            </div>
        </div>
    );
};

export default DevisCard;