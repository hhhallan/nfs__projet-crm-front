import React, {useState} from 'react';
import {Button, Input} from "../comopnents";

const Paiement: React.FC = () => {

    // REGEX
    const cardNumberPattern = /^(?:(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12})$/;
    const expiryDatePattern = /^(0[1-9]|1[0-2])\/(\d{2})$/;
    const cvvPattern = /^[0-9]{3}$/;

    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');

    const handleCardNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCardNumber(event.target.value);
    };

    const handleExpiryDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setExpiryDate(event.target.value);
    };

    const handleCvvChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCvv(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!cardNumberPattern.test(cardNumber)) {
            // Afficher une erreur pour le numéro de carte bancaire
        }

        if (!expiryDatePattern.test(expiryDate)) {
            // Afficher une erreur pour la date d'expiration
        }

        if (!cvvPattern.test(cvv)) {
            // Afficher une erreur pour le code CVV
        }

        // Continuer avec la validation et la soumission des données
    };

    return (
        <div className="page page-payment">
            <h5>Paiement</h5>
            <section className="section">
                <form onSubmit={handleSubmit}>
                    <Input
                        placeholder="1111 2222 3333 4444"
                        field="Numéro de carte"
                        type="text"
                        value={cardNumber}
                    />
                    <div>
                        <Input
                            placeholder="01/01"
                            field="Date d'expiration"
                            type="text"
                            value={expiryDate}
                        />
                        <Input
                            placeholder="123"
                            field="CVV"
                            type="text"
                            value={cvv}
                        />
                    </div>

                    <Button text="Payer" type="submit" />
                </form>
            </section>
        </div>
    );
};

export default Paiement;