import React, { useState } from 'react';
import axios from 'axios';
import Results from './Results';
import Photos from './Photos';
import './Dictionary.css';

export default function Dictionary(props) {
	let [keyword, setKeyword] = useState(props.defaultKeyword);
	let [results, setResults] = useState(null);
	let [loaded, setLoaded] = useState(false);
	let [photos, setPhotos] = useState(null);

	function handleResponse(response) {
		setResults(response.data[0]);
	}

	function handlePexelsResponse(response) {
		console.log(response);
		setPhotos(response.data.photos);
	}

	function search() {
		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios.get(apiUrl).then(handleResponse);

		const pexelApiKey =
			'563492ad6f917000010000015618531031da413a8aca3e74b759e279';
		let pexelApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
		axios
			.get(pexelApiUrl, { headers: { Authorization: `Bearer ${pexelApiKey}` } })
			.then(handlePexelsResponse);
	}

	function handleSubmit(event) {
		event.preventDefault();
		search();
	}

	function handleKeywordChange(event) {
		setKeyword(event.target.value);
	}

	function load() {
		setLoaded(true);
		search();
	}
	if (loaded) {
		return (
			<div className="Dictionary">
				<section>
					<h1>What word do you want to look up?</h1>
					<form onSubmit={handleSubmit}>
						<input
							type="search"
							onChange={handleKeywordChange}
							defaultValue={props.defaultKeyword}
						/>
					</form>
					<div className="hint">Type a word and press Enter</div>
				</section>
				<Results results={results} />
				<Photos photos={photos} />
			</div>
		);
	} else {
		load();
		return 'Loading...';
	}
}
