import React, { useContext, useState } from 'react';
import { AuthContext } from '../auth/AuthContext';
import {Input, Button, DropDown} from '../comopnents/index';
import Product from '../models/Product';
import Client from '../models/User/Client';
import Commercial from '../models/User/Commercial';

interface FormProps {
    
}

const FormDevis = ({  }: FormProps) => {
    const { user, updateToken } = useContext(AuthContext);

    const [commercials, setCommercials] = useState<Commercial[]>([]);
    const [clients, setClients] = useState<Client[]>([]);
    const [commercial, setCommercial] = useState<Commercial>();
    const [client, setClient] = useState<Client>();

    return (
        <div className="form__group">
            <form>
                <div className="field-container">
                    {user!.role_power == 2 && <DropDown label='commercial' name='commercial' value={commercial} setValue={setCommercial} options={commercials} getOptionLabel={(commercial: Commercial) => `${commercial.firstname} ${commercial.lastname}`} />}
                    <DropDown label='client' name='client' value={client} setValue={setClient} options={clients} getOptionLabel={(client: Client) => `${client.firstname} ${client.lastname}`}/>
                </div>
                <Button text="Ajout Devis" type="submit" />
            </form>
        </div>
    );
};

export default FormDevis;