import React, { useState } from 'react';
import {Input, Button} from './index';

interface ProspectProps {
    
}

const FormProspect = ({}:ProspectProps) => {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    // 
    return (
        <div className="form__group">
            <form>
                <Input label="nom" name='nom' type="text" value={nom} setValue={setNom} />
                <Input label="prénom" name='prenom' type="text" value={prenom} setValue={setPrenom} />

                <Input label="e-mail" name='email' type="email" value={email} setValue={setEmail} />
                
                <Button text="Ajout Client" type="submit" />
            </form>
        </div>
    );
};

export default FormProspect;