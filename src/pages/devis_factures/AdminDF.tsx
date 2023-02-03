import { AxiosError } from 'axios';
import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../auth/AuthContext';
import { Button, DevisCard, FactureCard, FormDevis, Modal } from '../../comopnents';
import Devis from '../../models/Devis';
import Facture from '../../models/Facture';
import { ServiceContext } from '../../services/context/ServiceContext';
import moment from 'moment';

const AdminDF: React.FC = () => {
	const navigate = useNavigate();
	const { user, updateToken } = useContext(AuthContext);
	const { devisService, factureService } = useContext(ServiceContext);

	const [showDevis, setShowDevis] = useState(false);
	const [devis, setDevis] = useState<Devis[]>([]);
	const [factures, setFactures] = useState<Facture[]>([]);

	const handleClick = () => {
		setShowDevis(!showDevis)
	};

	useEffect(() => {
		let request: Promise<Devis[]>|Promise<Facture[]>;
		if (showDevis) {
			request = devisService.getAll()
		} else {
			request = factureService.getAll()
		}
		request.then((data) => {
			if (showDevis) {
				setDevis(data as Devis[]);
			} else {
				setFactures(data as Facture[]);
			}
		})
		.catch((err: AxiosError) => {
			if (err.status === 401) {
				updateToken(null);
				navigate('/login');
			} else {
				console.error(err);
			}
		});
	}, [showDevis]);

	const ToPrice = (prix: number): string => {
		const formattedPrice = prix.toFixed(2).replace(".", ",");
		const formattedPriceWithSpaces = formattedPrice.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
		return `${formattedPriceWithSpaces} €`;
	}

	const lastModification = (a: (Devis|Facture), b: (Devis|Facture)): number => {
		return moment(b.last_modification).unix() - moment(a.last_modification).unix()
	}

	return (
		<div className="page page-devis-factures">
			<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
				<section className="section">
					<Button disabled={!showDevis} type='button' text='Ajouter un devis' onClick={() => navigate('/devis/new')}/>
				</section>

				<div style={{display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'end'}}>
					<Button onClick={handleClick} text="Changer de type" type="button" link	/>
					<h5>{showDevis ? 'Devis - '+devis.length : 'Factures - '+factures.length}</h5>
				</div>
			</div>
			
			{showDevis ? (
				<>
					<section className="section">
						{devis.sort(lastModification).map((card, index) => (
							<DevisCard
								key={index}
								cardData={{id: card.id!, title: card.id!, createdAt: moment(card.create_at).lang("fr").format('L'), amount: ToPrice(card.content.reduce((pre, val) => pre + val.quantity * (val.product.price ?? 0), 0))  }}
							/>
						))}
					</section>
				</>
			) : (
				<>
					<section className="section">
						{factures.sort(lastModification).map((card, index) => (
							<FactureCard
								key={index}
								cardData={{id: card.id!, title: card.id!, createdAt: moment(card.create_at).lang("de").format('L'), state: card.stat, amount: ToPrice(card.content.reduce((pre, val) => pre + val.quantity * (val.product.price ?? 0), 0))  }}
							/>
						))}
					</section>
				</>
			)}
		</div>
	);
};

export default AdminDF;
