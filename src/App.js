import React from 'react';
import Dictionary from './Dictionary';
import './App.css';

function App() {
	return (
		<div className="App">
			<div className="container">
				<header className="App-header">
					<h1>
						<img src="./book.png" alt="logo" />
						Welcome to Dictionary
					</h1>
				</header>
				<main className="Dictionary">
					<Dictionary />
				</main>
				<footer className="text-center App-footer">Coded by</footer>
			</div>
		</div>
	);
}

export default App;
