import { AxiosError } from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import {Input, Button, DropDown, Table} from '../comopnents/index';
import Product from '../models/Product';
import Client from '../models/User/Client';
import Commercial from '../models/User/Commercial';
import ApiProductService from '../services/api/ApiProductService';
import { ServiceContext } from '../services/context/ServiceContext';
import Card from './cards/Card';

interface FormProps {
    
}

const FormDevis = ({  }: FormProps) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user, updateToken } = useContext(AuthContext);
    const { clientService, userService, devisService, productService } = useContext(ServiceContext);

    const [commercials, setCommercials] = useState<Commercial[]>([]);
    const [clients, setClients] = useState<Client[]>([]);
    const [commercial, setCommercial] = useState<string>();
    const [client, setClient] = useState<string>();
    const [contents, setContents] = useState<{quantity?: number, productId?: string}[]>([]);
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        let requestClient = user?.role_power == 2 ? (clientService.getAll()) : (clientService.getByCommercial(user!.id));
        requestClient.then(data => {
            setClients(data);
        }).catch((err: AxiosError) => {
            if(err.status === 401) {
                updateToken(null);
                navigate('/login');
            } else {
                console.error(err);
            }
        });

        if(user?.role_power == 2) {
            userService.getAll().then(data => {
                setCommercials(data.filter(c => c.type == "COMMERCIAL").map(c => c as Commercial));
            }).catch((err: AxiosError) => {
                if(err.status === 401) {
                    updateToken(null);
                    navigate('/login');
                } else {
                    console.error(err);
                }
            });
        }

        if(id) {
            devisService.read(id).then(devis => {
                setClient(devis.client.id);
                setCommercial(devis.commercial.id);
                setContents(devis.content.map(c => {return { quantity: c.quantity, productId: c.product.id! }}));
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
            devisService.update(id, data.contents).then(data => {
                navigate('/quotes-invoices');
            }).catch((err: AxiosError) => {
                if(err.status === 401) {
                    updateToken(null);
                    navigate('/login');
                } else {
                    console.error(err)
                }
            });
        }else{
            devisService.create(data).then(data => {
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
            <Card title={(id ? 'Edition du ' : 'Création d\'un') +' Devis'}>
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
                                        <Input label={'Quantity'} name={'quantity'+index} type="number" key={index} value={c.quantity?.toString() ?? ''} setValue={(t) => { contents[index].quantity = parseInt(t); setContents([...contents])  }} />
                                    </td>
                                    <td>
                                        <DropDown placeholder='selectionner un produit' label={'Produit'} name={'product'+index}  key={index} value={c.productId} setValue={(t) =>{contents[index].productId = t; setContents([...contents])}} options={products} getOptionValue={(product: Product) => product.id! } getOptionLabel={(product: Product) => `${product.name} / ${product.plateforme}`}/>
                                    </td>
                                    
                                    <td width={'10%'}>
                                        <Button type='button' text='supprimer' small style={{background: 'red'}} onClick={(() => { contents.splice(index, 1); setContents([...contents]);} )}/>
                                    </td>
                                </tr>
                            ))}

                            <tr>
                                <td colSpan={3}>
                                    <Button type='button' text='ajouter un contenue' style={{marginTop: '12px', marginBottom: '12px'}} onClick={(() => {console.log('oui'); contents.push({ quantity: 0 }); setContents([...contents]);} )}/>
                                </td>
                            </tr>

                        </Table>
                        

                        <Button text={id ? "Modifier le devis" : "Ajouter le devis"} type="submit" />
                    </form>
                </div>
            </Card>
        </div>
        
    );
};

export default FormDevis;