import { AxiosError } from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import {Input, Button, DropDown, Table} from './index';
import Product from '../models/Product';
import Client from '../models/User/Client';
import Commercial from '../models/User/Commercial';
import { ServiceContext } from '../services/context/ServiceContext';
import Card from './cards/Card';

interface FormProps {
    
}

const FormFacture = ({  }: FormProps) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user, updateToken } = useContext(AuthContext);
    const { clientService, userService, factureService, productService } = useContext(ServiceContext);

    const [isValidate, setIsValidate] = useState<boolean>(false);
    const [isPayed, setIsPayed] = useState<boolean>(false);
    const [commercials, setCommercials] = useState<Commercial[]>([]);
    const [clients, setClients] = useState<Client[]>([]);
    const [commercial, setCommercial] = useState<string>();
    const [client, setClient] = useState<string>();
    const [contents, setContents] = useState<{quantity?: number, productId?: string}[]>([]);
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        if(id) {
            factureService.read(id).then(facture => {
                setClient(facture.client.id);
                setCommercial(facture.commercial.id);
                setContents(facture.content.map(c => {return { quantity: c.quantity, productId: c.product.id! }}));

                setClients([facture.client as Client]);
                setCommercials([facture.commercial as Commercial]);
                setIsValidate(facture.stat !== "DRAFT");
                setIsPayed(facture.stat === "PAYED");
            }).catch((err: AxiosError) => {
                if(err.status === 401) {
                    updateToken(null);
                    navigate('/login');
                } else {
                    console.error(err);
                }
            })
        }

        productService.getAll().then(data => {
            setProducts(data);
        }).catch((err: AxiosError) => {
            if(err.status === 401) {
                updateToken(null);
                navigate('/login');
            } else {
                console.error(err);
            }
        });
    }, [id]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        let data = {
            client_id: client,
            commercial_id: commercial,
            contents: contents.map(c => {
                return {
                   quantity: c.quantity,
                   product_id: c.productId
                }
             })
        }

        if(id) {
            factureService.update(id, data.contents).then(data => {
                navigate('/quotes-invoices');
            }).catch((err: AxiosError) => {
                if(err.status === 401) {
                    updateToken(null);
                    navigate('/login');
                } else {
                    console.error(err)
                }
            });
        }
        console.log(contents)
    }

    return (
        <div className='page'>
            <Card title={(id ? 'Edition de ' : 'Création de ') +' Facture'}>
                <div className="form__group">
                    <form onSubmit={handleSubmit}>
                        <div className="field-container">
                            {user!.role_power == 2 && <DropDown disabled={id != undefined} placeholder='selectionner le commercial' label='commercial' name='commercial' value={commercial} setValue={setCommercial} options={commercials} getOptionValue={(commercial: Commercial) => commercial.id} getOptionLabel={(commercial: Commercial) => `${commercial.firstname} ${commercial.lastname}`} />}
                            <DropDown disabled={id != undefined} placeholder='selectionner le client' label='client' name='client' value={client} setValue={setClient} options={clients} getOptionValue={(commercial: Commercial) => commercial.id} getOptionLabel={(client: Client) => `${client.firstname} ${client.lastname}`}/>
                        </div>

                        <Table headers={['quantity', 'product', 'supprimer']}>
                            {!contents.length &&  <tr><td colSpan={3}><h5>No content ...</h5></td></tr>}
                            {contents.map((c, index) => (
                                <tr key={index} style={{}}>
                                    <td width={'10%'}>
                                        <Input disabled={isValidate || user?.role_power == 0} label={'Quantity'} name={'quantity'+index} type="number" key={index} value={c.quantity?.toString() ?? ''} setValue={(t) => { contents[index].quantity = parseInt(t); setContents([...contents])  }} />
                                    </td>
                                    <td>
                                        <DropDown  disabled={isValidate || user?.role_power == 0} placeholder='selectionner un produit' label={'Produit'} name={'product'+index}  key={index} value={c.productId} setValue={(t) =>{contents[index].productId = t; setContents([...contents])}} options={products} getOptionValue={(product: Product) => product.id! } getOptionLabel={(product: Product) => `${product.name} / ${product.plateforme}`}/>
                                    </td>
                                    
                                    <td width={'10%'}>
                                        <Button disabled={isValidate || user?.role_power == 0} type='button' text='supprimer' small style={{background: 'red'}} onClick={(() => { contents.splice(index, 1); setContents([...contents]);} )}/>
                                    </td>
                                </tr>
                            ))}

                            <tr>
                                <td colSpan={3}>
                                    <Button disabled={isValidate || user?.role_power == 0} type='button' text='ajouter un contenue' style={{marginTop: '12px', marginBottom: '12px'}} onClick={(() => {console.log('oui'); contents.push({ quantity: 0 }); setContents([...contents]);} )}/>
                                </td>
                            </tr>

                        </Table>
                        

                        <div style={{display: 'flex', flexDirection: 'row', gap: '12px'}}>
                            {user?.role_power !== 0 && <Button  disabled={isValidate} text={"Modifier la facture"} type="submit" />}
                            {!isValidate && user?.role_power !== 0 && <Button  text={"Valider la facture"} type="button" style={{background: 'green'}} onClick={() => {factureService.validate(id!); navigate('/quotes-invoices')}} />}
                            {!isPayed && user?.role_power == 0 && <Button  text={"Payé la facture"} type="button" style={{background: 'green'}} onClick={() => {factureService.validate(id!); navigate('/quotes-invoices')}} />}
                            <Button  text={"retour"} type="button" onClick={() => navigate('/quotes-invoices')} />
                        </div>
                    </form>
                </div>
            </Card>
        </div>
        
    );
};

export default FormFacture;