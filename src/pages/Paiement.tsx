import React, {useState} from 'react';
import {Button, Input} from "../comopnents";

const Paiement: React.FC = () => {

    // REGEX
    const cardNumberPattern = /^(?:(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12})$/;
    const expiryDatePattern = /^(0[1-9]|1[0-2])\/(\d{2})$/;
    const cvvPattern = /^[0-9]{3}$/;

    return (
        <div className="page page-payment">
            {/*<h5>Paiement</h5>
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
            </section>*/}
            <form className="form-container">
                <div className="field">
                    <label htmlFor="name">Name</label>
                    <input id="name" maxLength={20} type="text"/>
                </div>
                <div className="field">
                    <label htmlFor="cardnumber">Card Number</label>
                    <input id="cardnumber" type="text" pattern="[0-9]*" inputMode="numeric"/>
                </div>

                <div className="field-container">
                    <div className="field">
                        <label htmlFor="expirationdate">Expiration (mm/yy)</label>
                        <input id="expirationdate" type="text" pattern="[0-9]*" inputMode="numeric"/>
                    </div>
                    <div className="field">
                        <label htmlFor="securitycode">Security Code</label>
                        <input id="securitycode" type="text" pattern="[0-9]*" inputMode="numeric"/>
                    </div>
                </div>

                <Button text="Payer" type="submit" />
            </form>
        </div>
    );
};

export default Paiement;