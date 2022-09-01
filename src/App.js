import React from 'react';
import Dictionary from './Dictionary';
import './App.css';

function App() {
	return (
		<div className="App">
			<div className="container">
				<header className="App-header">
					<img src="./book.png" alt="dictionary" />
					<img src="./book.png" alt="dictionary" />
					<img src="./book.png" alt="dictionary" />
					<h2>Welcome to dictionary</h2>
				</header>
				<main>
					<Dictionary defaultKeyword="dictionary" />
				</main>
				<footer className="text-center App-footer">
					Coded by{' '}
					<a
						href="https://github.com/matatfreecoder/dictionary-app"
						target="_blank"
						rel="noreferrer"
					>
						Natalia Matat
					</a>
				</footer>
			</div>
		</div>
	);
}

export default App;
