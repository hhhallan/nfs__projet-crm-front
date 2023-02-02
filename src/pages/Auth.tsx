import React from 'react';
import {Button, Input} from "../comopnents/index";

const Auth = () => {
    return (
        <div className="page page-auth">
            <div>
                <h5>Connexion</h5>

                <section className="section">
                    <form action="">
                        <Input field="E-mail" type="email"/>
                        <Input field="Mot de passe" type="password"/>

                        <Button type="submit" text="Se connecter" />
                    </form>
                </section>
            </div>
        </div>
    );
};

export default Auth;