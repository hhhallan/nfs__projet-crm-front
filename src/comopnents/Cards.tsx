import React, { useState } from 'react';
import { StatsCard } from './cards/index';

interface CardProps {
    cardType: 'stats' | 'big';
    cardData: object
}


const Card: React.FC<CardProps> = (props) => {
    const [cardType, setCardType] = useState(props.cardType);

    return (
        <div>
            {cardType === 'stats' ? (
                <StatsCard cardData={props.cardData}/>
            ) : (
                <h2>Card</h2>
            )}
        </div>
    );
};

export default Card;