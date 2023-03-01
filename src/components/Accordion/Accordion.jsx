import { useState } from 'react';
import './Accordion.css';

export const Accordion = () => {
	const [show, setShow] = useState(false);

	// toggle
	const toggleShow = () => {
		// Solucion 1
		// if (show) {
		// 	setShow(false);
		// } else {
		// 	setShow(true);
		// }

		// solucion 2
		// setShow(show ? false : true);

		// Solucion final
		setShow(!show);
	};

	return (
		<div className="accordion">
			<header className="header" onClick={toggleShow}>
				<h2>Como comprar en la tienda?</h2>
				<button>⬇️</button>
			</header>
			<div className={show ? 'show' : 'hidden'}>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
				dignissimos doloremque fuga aliquam, laborum id vel aut ipsam,
				reiciendis saepe maiores provident ea perspiciatis voluptatibus
				temporibus minus officia. Voluptate, architecto?
			</div>
		</div>
	);
};
