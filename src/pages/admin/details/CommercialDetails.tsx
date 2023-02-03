import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Table } from "../../../comopnents";
import Card from "../../../comopnents/cards/Card";
import Commercial from "../../../models/User/Commercial";

export interface CommercialDetailProps {
   user: Commercial
}

const CommercialDetail: React.FC<CommercialDetailProps> = ({ user }) => {
   const navigate = useNavigate();
   return (
      <Card title={`Detail du commercial : ${user.firstname} ${user.lastname}`}>
         <Card>
            <h6 style={{ 'fontStyle': 'italic', textDecoration: 'underline'}}>Information Général</h6>
            <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
               <div style={{display: "flex", flexDirection: 'row'}}>
                  <span style={{'width': '7%', fontWeight: 'bold'}}>Nom :</span>
                  <span style={{'width': '100%'}}>{user.lastname}</span>
               </div>
               <div style={{display: "flex", flexDirection: 'row'}}>
                  <span style={{'width': '7%', fontWeight: 'bold'}}>Prénom :</span>
                  <span style={{'width': '100%'}}>{user.firstname}</span>
               </div>
               <div style={{display: "flex", flexDirection: 'row'}}>
                  <span style={{'width': '7%', fontWeight: 'bold'}}>Email :</span>
                  <span style={{'width': '100%'}}>{user.email}</span>
               </div>
            </div>
         </Card>

         <Card>
            <h6 style={{ 'fontStyle': 'italic', textDecoration: 'underline' }}>Clients</h6>
            <Table headers={['Nom', 'Prenom', 'Email', 'details']}>
               {user.clients.filter(c => c.type === "CLIENT").map(u => (
                  <tr>
                     <td>
                        <span>{u.type}</span>
                     </td>
                     <td>
                        <span>{u.firstname}</span>
                     </td>
                     <td>
                        <span>{u.email}</span>
                     </td>
                     <td width={'5%'}>
                        <button className={`btn--small btn--outline`} style={{ 'width': '100%'}} onClick={() => navigate('/admin/'+u.id)}>
                           Details
                        </button>
                     </td>
                  </tr>
               ))}
            </Table>
         </Card>   
         
         <Card>
            <h6 style={{ 'fontStyle': 'italic', textDecoration: 'underline'}}>Prospect</h6>
            <Table headers={['Nom', 'Prenom', 'Email']}>
               {user.clients.filter(c => c.type === "PROSPECT").map(u => (
                  <tr>
                     <td>
                        <span>{u.lastname}</span>
                     </td>
                     <td>
                        <span>{u.firstname}</span>
                     </td>
                     <td>
                        <span>{u.email}</span>
                     </td>
                  </tr>
               ))}
            </Table>
         </Card>   
         <Button style={{width: '50%', alignSelf: 'center', marginTop: 24}} type="button" text="Retour" onClick={() => navigate('/admin')}/>
      </Card>
   );
}

export default CommercialDetail;