import React, { useState } from 'react';
import { decodeQuestions } from './utils/decodeQuestions';
import Main from './Main';

function App() {

	// State for data fetch request and error handling
	const [triviaData, setTriviaData] = useState([]);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [currQuestion, setCurrQuestion] = useState(-1);

	// Async data fetch function with G2i supplied api url
	const getData = async () => {
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

	const goToNextQuestion = () => {
		const questionNumber = currQuestion;
		setCurrQuestion(questionNumber + 1);
	}

	// const resetGame = () => {
	// 	setTriviaData([]);
	//  setCurrQuestion(-1);
	// }

	return (
		<Main
			triviaData={triviaData}
			error={error}
			isLoading={isLoading}
			currQuestion={currQuestion}
			getData={() => getData()}
			goToNextQuestion={() => goToNextQuestion()}
		/>
	);
}

export default App;
