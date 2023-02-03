import React, { useState, useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import {Button, Input} from "../comopnents/index";
import { ServiceContext } from '../services/context/ServiceContext';

const Auth: React.FC = () => {
    const authContext = useContext(AuthContext);
    const { authService } = useContext(ServiceContext);

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        authService.login(email, password).then((token: string) => {
            authContext.updateToken(token);
        }).catch(err => {
            console.error(err);
        });
    };

    return (
        <div className="page page-auth">
            <div>
                <h5>Connexion</h5>

                <section className="section">
                    <form onSubmit={handleSubmit}>
                        <Input label="E-mail" name="email" type="email" value={email} setValue={setEmail} />
                        <Input label="Mot de passe" name="password" type="password" value={password} setValue={setPassword} />

                        <Button type="submit" text="Se connecter"/>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default Auth;