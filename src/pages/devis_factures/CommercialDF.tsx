import { AxiosError } from 'axios';
import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../auth/AuthContext';
import { Button, DevisCard, FactureCard, Modal } from '../../comopnents';
import Devis from '../../models/Devis';
import Facture from '../../models/Facture';
import { ServiceContext } from '../../services/context/ServiceContext';
import moment from 'moment';

const CommercialDF: React.FC = () => {
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
			request = devisService.getByCommercial(user!.id)
		} else {
			request = factureService.getByCommercial(user!.id)
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
	return (
		<div className="page page-devis-factures">
			<Button onClick={handleClick} text="Changer de type" type="button" link	/>
			{showDevis ? (
				<>
					<h5>Devis - { devis.length }</h5>
					<section className="section">
						{devis.map((card, index) => (
							<DevisCard
								key={index}
								cardData={{id: card.id!, title: card.id!, createdAt: moment(card.create_at).format('L'), amount: ToPrice(card.content.reduce((pre, val) => pre + val.quantity * (val.product.price ?? 0), 0))  }}
							/>
						))}
					</section>
				</>
			) : (
				<>
					<h5>Factures - { factures.length }</h5>
					<section className="section">
						{factures.map((card, index) => (
							<FactureCard
								key={index}
								cardData={{id: card.id!, title: card.id!, createdAt: moment(card.create_at).format('L'), state: card.state, amount: ToPrice(card.content.reduce((pre, val) => pre + val.quantity * (val.product.price ?? 0), 0))  }}
							/>
						))}
					</section>
				</>
			)}
		</div>
	);
};

export default CommercialDF;
