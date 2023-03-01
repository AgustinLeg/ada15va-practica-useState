import { useState } from 'react';
import './App.css';
import { Accordion } from './components/Accordion/Accordion';
import { Counter } from './components/Counter';

function App() {
	const [title, setTitle] = useState('Clase 07');

	return (
		<div className="App">
			<h1>{title}</h1>
			{/* <Counter /> */}
			{/* <Accordion /> */}

			<div>
				<label htmlFor="title">Titulo</label>
				<input
					name="title"
					id="title"
					onChange={(e) => {
						setTitle(e.target.value);
					}}
				/>
			</div>
		</div>
	);
}

export default App;

// input.addEventListener('change', (e) => {});
