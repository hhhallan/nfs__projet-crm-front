import React, {useState} from 'react';
import {Button, Input} from "../comopnents";


interface FormData {
    name: string;
    cardNumber: string;
    expiration: string;
    cvv: string;
}

const cardNumberPattern = /^(?:(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12})$/;
const expirationPattern = /^(0[1-9]|1[0-2])\/(\d{2})$/;
const cvvPattern = /^[0-9]{3}$/;
const namePattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const onlyNumbersPattern = /^\d+$/;


const Paiement: React.FC = () => {
    const [name, setName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiration, setExpiration] = useState('');
    const [cvv, setCvv] = useState('');

    const [errors, setErrors] = useState<FormData>({
        cardNumber: "",
        cvv: "",
        expiration: "",
        name: ""
    })

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Validate the inputs
        if (name)

        if (!cardNumberPattern.test(cardNumber)) {
            // Handle card number error
        }
        if (!expirationPattern.test(expiration)) {
            // Handle expiration error
        }
        if (!cvvPattern.test(cvv)) {
            // Handle CVV error
        }

        // Do the form submission or show a success message
    };

    return (
        <div className="page page-payment">
            <form className="form-container">
                <Input
                    label="Nom"
                    placeholder="Allan Lebogoss le sannnng"
                    name="name"
                    type="text"
                    pattern={"/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/"}
                    value={name}
                    setValue={setName}
                />
                <Input
                    label="Numéro de carte"
                    placeholder="1111 2222 3333 4444"
                    name="card-number"
                    type="text"
                    pattern="/^\d+$/"
                    value={cardNumber}
                    setValue={setCardNumber}
                />

                <div className="field-container">
                    <Input
                        label="Date d'expiration"
                        placeholder="01/23"
                        name="expiration"
                        type="text"
                        value={expiration}
                        setValue={setExpiration}
                    />

                    <Input
                        label="CVV"
                        placeholder="123"
                        name="expiration"
                        type="text"
                        value={cvv}
                        setValue={setCvv}
                    />
                </div>

                <Button text="Payer" type="submit" />
            </form>
        </div>
    );
};

export default Paiement;