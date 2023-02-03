import React, {useState} from 'react';
import {Button, Input} from "../comopnents";

const PasswordReset = () => {
    const [password, setPassword] = useState<string>("");
    const [cPassword, setCPassword] = useState<string>("");

    return (
        <div className="page page-reset-password">
            <div>
                <h5>Réinitialisation du mot de passe</h5>
                <section className="section">
                    <form action="">
                        <Input label="Mot de passe" name="password" type="password" value={password} setValue={setPassword} />
                        <Input label="Confirmer votre mot de passe" name="c-password" type="password" value={cPassword} setValue={setCPassword} />

                        <Button text="Confirmer" type="submit" />
                    </form>
                </section>
            </div>
        </div>
    );
};

export default PasswordReset;