import React from 'react';
import './Synonyms.css';

export default function Synonyms(props) {
	if (props.synonyms && props.synonyms.length > 0) {
		return (
			<div className="Synonyms">
				<strong>Synonyms: </strong>
				<ul>
					{props.synonyms.map(function (synonym, index) {
						return <li key={index}>{synonym}</li>;
					})}
				</ul>
			</div>
		);
	} else {
		return null;
	}
}

/*if (props.synonyms.length === 0) {
		return null;
	} else {
		return (
			<div>
				<strong>Synonyms:</strong>
				<ul className="Synonyms">
					{props.synonyms.map(function (synonym, index) {
						return <li key={index}>{synonym}</li>;
					})}
				</ul>
			</div>
		);
	}
}*/
