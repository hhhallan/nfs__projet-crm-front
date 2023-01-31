import React from 'react';
import {useState} from 'react';
import {Button} from "./index";

/*interface BtnProps {
    small?: boolean,
    outline?: boolean,
    text?: string
}*/

// Commercial peut voir - créer - modifier un prospect puis un client

const TableClient: React.FC = () => {
    const [clients, setList] = useState([
        {first_name: "Jean", last_name: "Claire", role: "client", email: "jean.claire@gmail.com"},
        {first_name: "Philipe", last_name: "Legrand", role: "prospect", email: "philipe.legrand@gmail.com"},
        {first_name: "Michelle", last_name: "Vasseur", role: "admin", email: "michelle.vasseur@gmail.com"},
        {first_name: "Valentine", last_name: "Jile", role: "client", email: "valentine.jile@gmail.com"}
    ])

    const addRow = () => {
        let newClient = {first_name: "Pierre", last_name: "Paul", role: "prospect", email: "pierre.paul@gmail.com"}
        setList([...clients, newClient]);
    }

    const updateRow = (index: number) => {
        let newClient = clients[index];
        newClient["first_name"] = "Modifier";
        newClient["last_name"] = "User";
        newClient["role"] = "client";
        newClient["email"] = "modifier.user@gmail.com";
        clients[index] = newClient;
        setList([...clients]);
    }

    return (
        <>
            <table className="table">
                <thead>
                <tr>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Rôle</th>
                    <th>E-mail</th>
                    <th>Modifier</th>
                </tr>
                </thead>
                <tbody>
                {clients.map((client, key) =>
                    (
                        <tr key={key}>
                            <td>{client.last_name}</td>
                            <td>{client.first_name}</td>
                            <td>{client.role}</td>
                            <td>{client.email}</td>
                            <td>
                                {/*<button onClick={() => updateRow(key)}>Modifier</button>*/}
                                <Button link text="Modifier"/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/*<Button text="Ajouter"/>*/}
        </>
    );
};

export default TableClient;