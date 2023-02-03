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
    const colors: {[key: string]: string} = {
        "VALIDATE": "rgb(50,50,255)",
        "DRAFT": "rgb(0,0,0)"
    }

    return (
        <a className="card card-link" href={'/facture/'+id+'/edit'}>
            <div className="card-title-container" >
                <p className="card-title">Facture N°{title.replace(/([a-f]|-)/g, '').substring(0, 5)}</p>
                <span style={{color: (colors[state] ?? 'rgb(50,150,50)')}}>{state}</span>
            </div>
            <div className="card-content">
                <span>{amount}</span>
                <p>{createdAt}</p>
            </div>
        </a>
    );
};

export default FactureCard;