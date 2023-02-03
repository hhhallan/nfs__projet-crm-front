import React, {useState} from 'react';
import {Button, Input} from "../comopnents";

const PasswordForgot = () => {
    const [email, setEmail] = useState<string>("")

    return (
        <div className="page page-forgot-password">
            <div>
                <h5>Mot de passe oublié ?</h5>
                <section className="section">
                    <form>
                        <Input label="E-mail" name="email" type="text" value={email} setValue={setEmail} />
                        <Button text="Envoyer" type="submit" />
                    </form>
                </section>
            </div>

        </div>
    );
};

export default PasswordForgot;