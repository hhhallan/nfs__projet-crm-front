import React, { useState } from 'react';
import {Input, Button} from '../comopnents/index';

interface ClientsProps {
    
}

const FormClients = ({}:ClientsProps) => {
    
    // 
    return (
        <div className="form__group">
            <form>
                <Input field="nom" type="text"/>
                <Input field="prénom" type="text" />

                <Input field="e-mail" type="email" />
                
                <Button text="Ajout Client" type="submit" />
            </form>
        </div>
    );
};

export default FormClients;