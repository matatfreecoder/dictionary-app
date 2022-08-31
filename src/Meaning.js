import React from 'react';
import Synonyms from './Synonyms';
import './Meaning.css';

export default function Meaning(props) {
	//console.log(props.meaning);
	return (
		<div className="Meaning">
			<h3>{props.meaning.partOfSpeech}</h3>
			<strong>Definitons: </strong>
			{props.meaning.definitions.map(function (definition, index) {
				return (
					<div key={index}>
						{'⁘ '}
						{definition.definition}
						<br />
						<em>{definition.example}</em>
					</div>
				);
			})}
			<Synonyms synonyms={props.meaning.synonyms} />
		</div>
	);
}
