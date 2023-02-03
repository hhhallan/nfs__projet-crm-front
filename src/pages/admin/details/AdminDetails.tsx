import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../comopnents";
import Card from "../../../comopnents/cards/Card";
import Admin from "../../../models/User/Admin";

export interface AdminDetailProps {
   user: Admin
}


const AdminDetail: React.FC<AdminDetailProps> = ({ user }) => {
   const navigate = useNavigate();
   return (
      <Card title={`Detail de l'admin : ${user.firstname} ${user.lastname}`}>
         <Card>
            <h6 style={{ 'fontStyle': 'italic', textDecoration: 'underline' }}>Information Général</h6>
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
         
         <Button style={{width: '50%', alignSelf: 'center', marginTop: 24}} type="button" text="Retour" onClick={() => navigate('/admin')}/>
      </Card>
   );
}

export default AdminDetail;