import {AxiosError} from 'axios';
import React, {useContext, useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {AuthContext} from '../auth/AuthContext';
import {Input, Button, DropDown, Table} from '../comopnents/index';
import Product from '../models/Product';
import Client from '../models/User/Client';
import Commercial from '../models/User/Commercial';
import ApiProductService from '../services/api/ApiProductService';
import {ServiceContext} from '../services/context/ServiceContext';
import Card from './cards/Card';

interface FormProps {

}

const FormDevis = ({}: FormProps) => {
    const {id} = useParams();
    const navigate = useNavigate();
    const { user, updateToken } = useContext(AuthContext);
    const { clientService, userService, devisService, productService, factureService } = useContext(ServiceContext);

    const [commercials, setCommercials] = useState<Commercial[]>([]);
    const [clients, setClients] = useState<Client[]>([]);
    const [commercial, setCommercial] = useState<string>();
    const [client, setClient] = useState<string>();
    const [contents, setContents] = useState<{ quantity?: number, productId?: string }[]>([]);
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        let requestClient = user?.role_power == 2 ? (clientService.getAll()) : (clientService.getByCommercial(user!.id));
        requestClient.then(data => {
            setClients(data);
        }).catch((err: AxiosError) => {
            if (err.status === 401) {
                updateToken(null);
                navigate('/login');
            } else {
                console.error(err);
            }
        });

        if (user?.role_power == 2) {
            userService.getAll().then(data => {
                setCommercials(data.filter(c => c.type == "COMMERCIAL").map(c => c as Commercial));
            }).catch((err: AxiosError) => {
                if (err.status === 401) {
                    updateToken(null);
                    navigate('/login');
                } else {
                    console.error(err);
                }
            });
        }

        if (id) {
            devisService.read(id).then(devis => {
                setClient(devis.client.id);
                setCommercial(devis.commercial.id);
                setContents(devis.content.map(c => {
                    return {quantity: c.quantity, productId: c.product.id!}
                }));
            }).catch((err: AxiosError) => {
                if (err.status === 401) {
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
            if (err.status === 401) {
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
        if (id) {
            devisService.update(id, data.contents).then(data => {
                navigate('/quotes-invoices');
            }).catch((err: AxiosError) => {
                if (err.status === 401) {
                    updateToken(null);
                    navigate('/login');
                } else {
                    console.error(err)
                }
            });
        } else {
            devisService.create(data).then(data => {
                navigate('/quotes-invoices');
            }).catch((err: AxiosError) => {
                if (err.status === 401) {
                    updateToken(null);
                    navigate('/login');
                } else {
                    console.error(err)
                }
            });
        }
    }

    return (
        <div className='page'>
            <Card title={(id ? 'Edition du ' : 'Création d\'un') + ' Devis'}>
                <div className="form__group">
                    <form onSubmit={handleSubmit}>
                        <Table headers={['Quantité', 'Produit', 'Supprimer']}>
                            {!contents.length && <tr>
                                <td colSpan={3}><h5>No content ...</h5></td>
                            </tr>}
                            {contents.map((c, index) => (
                                 <tr key={index} style={{}}>
                                    <td width={'10%'}>
                                        <Input disabled={user?.role_power == 0} label={'Quantity'} name={'quantity'+index} type="number" key={index} value={c.quantity?.toString() ?? ''} setValue={(t) => { contents[index].quantity = parseInt(t); setContents([...contents])  }} />
                                    </td>
                                    <td>
                                        <DropDown disabled={user?.role_power == 0}  placeholder='selectionner un produit' label={'Produit'} name={'product'+index}  key={index} value={c.productId} setValue={(t) =>{contents[index].productId = t; setContents([...contents])}} options={products} getOptionValue={(product: Product) => product.id! } getOptionLabel={(product: Product) => `${product.name} / ${product.plateforme}`}/>
                                    </td>

                                    <td width={'10%'}>
                                        <Button disabled={user?.role_power == 0}  type='button' text='supprimer' small style={{background: 'red'}} onClick={(() => { contents.splice(index, 1); setContents([...contents]);} )}/>
                                    </td>
                                </tr>
                            ))}

                            {user?.role_power !== 0 && <tr>
                                <td colSpan={3}>
                                     <Button  type='button' text='ajouter un contenue' style={{marginTop: '12px', marginBottom: '12px'}} onClick={(() => {console.log('oui'); contents.push({ quantity: 0 }); setContents([...contents]);} )}/>
                                </td>
                            </tr>}

                        </Table>

                        <div style={{display: 'flex', flexDirection: 'row', gap: '12px'}}>
                            {user?.role_power !== 0 && <Button text={id ? "Modifier le devis" : "Ajouter le devis"} type="submit" />}
                            {id && user?.role_power !== 0 && <Button text={"Créer une facture"} type="button" style={{background: 'green'}} onClick={() => {factureService.create(id); navigate('/quotes-invoices')}} /> } 
                            <Button  text={"retour"} type="button" onClick={() => navigate('/quotes-invoices')} />
                        </div>
                    </form>
                </div>
            </Card>
        </div>

    );
};

export default FormDevis;