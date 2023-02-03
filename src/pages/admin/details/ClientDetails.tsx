import React from "react";
import { useNavigate } from "react-router-dom";
import moment from 'moment';
import { Button, Table } from "../../../comopnents";
import Card from "../../../comopnents/cards/Card";
import Devis from "../../../models/Devis";
import Client from "../../../models/User/Client";
import Facture from "../../../models/Facture";

export interface ClientDetailProps {
   user: Client
}

const ClientDetail: React.FC<ClientDetailProps> = ({ user }) => {
   const navigate = useNavigate();
   return (
      <Card title={`Detail du client : ${user.firstname} ${user.lastname}`}>
         <Card>
            <h6 style={{ 'fontStyle': 'italic', textDecoration: 'underline'}}>Information Général</h6>
            <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
               <div style={{display: "flex", flexDirection: 'row'}}>
                  <span style={{'width': '10%', fontWeight: 'bold'}}>Nom :</span>
                  <span style={{'width': '100%'}}>{user.lastname}</span>
               </div>
               <div style={{display: "flex", flexDirection: 'row'}}>
                  <span style={{'width': '10%', fontWeight: 'bold'}}>Prénom :</span>
                  <span style={{'width': '100%'}}>{user.firstname}</span>
               </div>
               <div style={{display: "flex", flexDirection: 'row'}}>
                  <span style={{'width': '10%', fontWeight: 'bold'}}>Email :</span>
                  <span style={{'width': '100%'}}>{user.email}</span>
               </div>
               <div style={{display: "flex", flexDirection: 'row'}}>
                  <span style={{'width': '10%', fontWeight: 'bold'}}>Commercial :</span>
                  <a style={{ 'width': '100%' }} href={'/admin/'+user.commercial.id}>{user.commercial.firstname} {user.commercial.lastname}</a>
               </div>
            </div>
         </Card>  

         <Card>
            <div style={{ display: 'flex', flexDirection: 'row', gap: 16 }}>
               <div style={{ width: '50%', display: 'flex', flexDirection: 'column', gap: 16}}>
                  <h6 style={{ 'fontStyle': 'italic', textDecoration: 'underline'}}>Devis</h6>
                  <Table headers={['Créer le', 'Derniere modification', 'Prix']}>
                     {!user.devis.length && <tr><td>aucune devis...</td></tr>}
                     {user.devis.map((d: Devis) => (
                        <tr>
                           <td width={'40%'}>
                              {moment(d.create_at).format('L')}
                           </td>
                           <td width={'40%'}>
                              {moment(d.last_modification).format('L')}
                           </td>
                           <td width={'20%'}>
                              <span>{Math.round(d.content.reduce((pre, val) => pre + val.quantity * (val.product.price ?? 0), 0)*100)/100} €</span>
                           </td>
                        </tr>
                     ))}
                  </Table>
               </div>

               <div style={{ width: '50%', display: 'flex', flexDirection: 'column', gap: 16}}>
                  <h6 style={{ 'fontStyle': 'italic', textDecoration: 'underline'}}>Facture</h6>
                  <Table headers={['Créer le', 'Derniere modification', 'Prix']}>
                     {!user.factures.length && <tr><td>aucune facture...</td></tr>}
                     {user.factures.map((f: Facture) => (
                        <tr>
                           <td width={'40%'}>
                              {moment(f.create_at).format('L')}
                           </td>
                           <td width={'40%'}>
                              {moment(f.last_modification).format('L')}
                           </td>
                           <td width={'20%'}>
                              <span>{Math.round(f.content.reduce((pre, val) => pre + val.quantity * (val.product.price ?? 0), 0)*100)/100} €</span>
                           </td>
                        </tr>
                     ))}
                  </Table>
               </div>
            </div>
         </Card>   

         <Button style={{width: '50%', alignSelf: 'center', marginTop: 24}} type="button" text="Retour" onClick={() => navigate('/admin')}/>
      </Card>
   );
}

export default ClientDetail;