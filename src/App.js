import React, { useState, useEffect } from 'react';
import { decodeQuestions } from './utils/decodeQuestions';
import './App.css';

function App() {

	// State for data fetch request and error handling
	const [triviaData, setTriviaData] = useState([]);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	// Async data fetch function with G2i supplied api url
	const getTriviaData = async () => {
		setError(false);
		setIsLoading(true);
		const url = "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean";
		try {
			const response = await fetch(url);
			const data = await response.json();
			const decodedData = decodeQuestions(data.results);
			setTriviaData(decodedData);
			console.log('Trivia data successfully fetched: ', decodedData);
		} catch (e) {
			setError(true);
			console.error('There was a problem retreving the triva data in the App component useEffect: ', e);
		}
		setIsLoading(false);
	}

	// Fetch trivia data when the app loads for the first time
	useEffect(() => {
		getTriviaData();
	}, []);

	const example = isLoading
		? <div>Loading...</div>
		: triviaData.map((item, index) => {
			return (
				<div key={index}>
					<p>{item.question}</p>
				</div>
			);
		});

	const errorMessage = error
		? <div><h1>There is an error!</h1></div>
		: null

	return (
		<div>
			<h1>G2i Trivia App</h1>
			{example}
			{errorMessage}
		</div>
	);
}

export default App;
