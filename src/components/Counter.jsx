import { useState } from 'react';
import reactLogo from '../assets/react.svg';

export const Counter = () => {
	// Si hay muchos estados se empieza a separar en componentes
	const [count, setCount] = useState(10);
	const [title, setTitle] = useState('Vite + React');

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src="/vite.svg" className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>{title}</h1>
			<div className="card">
				<button onClick={() => setCount(count + 1)}>increment {count}</button>
				<button onClick={() => setCount(count - 1)}>decrement {count}</button>
				<button onClick={() => setTitle('titulo nuevo desde el boton')}>
					cambiar titulo
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
};
