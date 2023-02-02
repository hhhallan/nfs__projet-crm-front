import React from 'react';

const Error404: React.FC = () => {
	return (
		<div className='page-404'>
			<h1>Error 404</h1>
			<p>Désolé, la page que vous recherchez est introuvable.</p>
			<a href='/'>Retour</a>
		</div>
	);
};

export default Error404;
