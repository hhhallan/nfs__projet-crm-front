import React, { useContext, useEffect, useState } from 'react';
import { StatsCard, Chart } from '../../comopnents/index';
import { AuthContext } from '../../auth/AuthContext';
import { devisFactureOptions, testLineOptions } from '../../services/constants/charts';
import Devis from '../../models/Devis';
import Facture from '../../models/Facture';
import { ServiceContext } from '../../services/context/ServiceContext';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router';
import moment from 'moment';

const UserHome: React.FC = () => {
	const navigate = useNavigate();
	const { user, updateToken } = useContext(AuthContext);
	const { devisService, factureService } = useContext(ServiceContext);

	const [devis, setDevis] = useState<Devis[]>([]);
	const [factures, setFacture] = useState<Facture[]>([]);

	useEffect(() => {
		devisService
			.getByClient(user!.id)
			.then((devis) => {
				setDevis(devis);
			})
			.catch((err: AxiosError) => {
				if (err.status === 401) {
					updateToken(null);
					navigate('/login');
				} else {
					console.error(err);
				}
			});

		factureService
			.getByClient(user!.id)
			.then((facture) => {
				setFacture(facture);
			})
			.catch((err: AxiosError) => {
				if (err.status === 401) {
					updateToken(null);
					navigate('/login');
				} else {
					console.error(err);
				}
			});
	}, []);

	const getData = (
		factures: Facture[],
		devis: Devis[],
		type: 'quantity' | 'sum'
	) => {
		const labels: string[] = [];
		let facturesDataSet = {
			sum: {
				data: [0],
				backgroundColor: 'transparent',
				label: 'Facture',
				borderColor: 'rgba(255, 99, 132, 0.5)',
				pointBorderColor: 'green',
				pointBorderWidth: 4,
				tension: 0.5,
			},
			quantity: {
				label: 'Facture',
				data: [0],
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
			},
		};

		let devisDataSet = {
			sum: {
				data: [0],
				backgroundColor: 'transparent',
				borderColor: 'rgba(53, 162, 235, 0.5)',
				label: 'Devis',
				pointBorderColor: 'green',
				pointBorderWidth: 4,
				tension: 0.5,
			},
			quantity: {
				label: 'Devis',
				data: [0],
				backgroundColor: 'rgba(53, 162, 235, 0.5)',
			},
		};

		if (factures.length > 2) {
			factures = factures.sort(
				(f1, f2) => moment(f1.create_at).unix() - moment(f2.create_at).unix()
			);
			let firstMonth = moment(factures[0].create_at);
			let secondMonth = moment(factures[factures.length - 1].create_at);

			var date = firstMonth.startOf('month');
			while (date < secondMonth.endOf('month')) {
				let format = date.format('YYYY-MM');
				if (!labels.includes(format)) labels.push(format);
				date.add(1, 'month');
			}
		} else if (factures.length) {
			let format = moment(factures[0].create_at).format('YYYY-MM');
			if (!labels.includes(format)) labels.push(format);
		}

		if (devis.length > 2) {
			devis = devis.sort(
				(f1, f2) => moment(f1.create_at).unix() - moment(f2.create_at).unix()
			);
			let firstMonth = moment(devis[0].create_at);
			let secondMonth = moment(devis[devis.length - 1].create_at);

			var date = firstMonth.startOf('month');
			while (date < secondMonth.endOf('month')) {
				let format = date.format('YYYY-MM');
				if (!labels.includes(format)) labels.push(format);
				date.add(1, 'month');
			}
		} else if (devis.length) {
			let format = moment(devis[0].create_at).format('YYYY-MM');
			if (!labels.includes(format)) labels.push(format);
		}

		let data = labels.map((raw) => {
			let month = moment(raw);
			let matchFactures = factures.filter((f) =>
				moment(f.create_at).isSame(month, 'month')
			);
			return {
				quantity: matchFactures.length,
				sum: matchFactures.reduce(
					(pre, val) =>
						pre +
						val.content.reduce(
							(pre, val) => pre + val.quantity * (val.product.price ?? 0),
							0
						),
					0
				),
			};
		});

		facturesDataSet.quantity.data = data.map((d) => d.quantity);
		facturesDataSet.sum.data = data.map((d) => d.sum);

		data = labels.map((raw) => {
			let month = moment(raw);
			let matchDevis = devis.filter((f) =>
				moment(f.create_at).isSame(month, 'month')
			);
			return {
				quantity: matchDevis.length,
				sum: matchDevis.reduce(
					(pre, val) =>
						pre +
						val.content.reduce(
							(pre, val) => pre + val.quantity * (val.product.price ?? 0),
							0
						),
					0
				),
			};
		});

		devisDataSet.quantity.data = data.map((d) => d.quantity);
		devisDataSet.sum.data = data.map((d) => d.sum);

		return {
			labels,
			datasets: [devisDataSet[type], facturesDataSet[type]],
		};
	};

	const ToPrice = (prix: number): string => {
		const formattedPrice = prix.toFixed(2).replace(".", ",");
		const formattedPriceWithSpaces = formattedPrice.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
		return `${formattedPriceWithSpaces} €`;
	}

	return (
		<div className="page page-home">
			<div>
				<h5>Stats</h5>
				<section className="section">
					<StatsCard
						cardData={{
							title: 'Devis',
							data: devis.length.toString(),
							percentage:
							ToPrice(devis.reduce(
									(pre, val) =>
										pre +
										val.content.reduce(
											(pre, val) =>
												pre + val.quantity * (val.product.price ?? 0),
											0
										),
									0
								))
						}}
					/>
					<StatsCard
						cardData={{
							title: 'Facture',
							data: factures.length.toString(),
							percentage:
							ToPrice(factures.reduce(
									(pre, val) =>
										pre +
										val.content.reduce(
											(pre, val) =>
												pre + val.quantity * (val.product.price ?? 0),
											0
										),
									0
								)),
						}}
					/>
				</section>
			</div>

			<div>
				<h5>Graphics</h5>
				<section className="section">
					<Chart
						type="line"
						data={getData(factures, devis, 'sum')}
						options={testLineOptions}
					/>
					<Chart
						type="bar"
						data={getData(factures, devis, 'quantity')}
						options={devisFactureOptions}
					/>
				</section>
			</div>
		</div>
	);
};

export default UserHome;
