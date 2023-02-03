import React, { useState } from 'react';
import {Input, Button} from '../comopnents/index';
import Product from '../models/Product';

interface FormProps {
    data?: {quantity: number, product: Product}[],
}

const FormDevis = ({data = []}:FormProps) => {
    const [clients, setList] = useState([
        {first_name: "Jean", last_name: "Claire", role: "client", email: "jean.claire@gmail.com"},
        {first_name: "Philipe", last_name: "Legrand", role: "prospect", email: "philipe.legrand@gmail.com"},
        {first_name: "Michelle", last_name: "Vasseur", role: "admin", email: "michelle.vasseur@gmail.com"},
        {first_name: "Valentine", last_name: "Jile", role: "client", email: "valentine.jile@gmail.com"}
    ])
    // Commercial(dropdown) Client(dropdown) Liste de produit (Tableau d'objet -> quantité & une ref)
    return (
        <div className="form__group">
            <form>
                <Input field="commercial" type="select" data={clients}/>
                <Input field="client" type="select" data={clients}/>

                <Input field="quantity" type="text" />
                <Input field="ref" type="text" />
                <Button text="Ajout Devis" type="submit" />
            </form>
        </div>
    );
};

export default FormDevis;