import React, { useState } from 'react';
import axios from 'axios';
import Results from './Results';
import './Dictionary.css';

export default function Dictionary() {
	let [keyword, setKeyword] = useState('');
	let [results, setResults] = useState(null);

	function handleResponse(response) {
		setResults(response.data[0]);
	}

	function search(event) {
		event.preventDefault();
		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

		axios.get(apiUrl).then(handleResponse);
	}

	function handleKeywordChange(event) {
		setKeyword(event.target.value);
	}

	return (
		<div className="Dictionary">
			<form onSubmit={search}>
				<label>Type a word and press Enter</label> {'  '}
				<input type="search" autoFocus={true} onChange={handleKeywordChange} />
			</form>
			<Results results={results} />
		</div>
	);
}
