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

	// Add new property and update state triviaData to show right/wrong response from user
	const answerQuestion = (response) => {
		let updatedTriviaItem = triviaData[currQuestion];
		updatedTriviaItem.responseCorrect = response === updatedTriviaItem.correct_answer ? true : false;

		const updatedTriviaData = triviaData.map((triviaItem, index) => {
			if (index === currQuestion) triviaItem = updatedTriviaItem;
			return triviaItem;
		});

		setTriviaData(updatedTriviaData);
		const questionNumber = currQuestion;
		setCurrQuestion(questionNumber + 1);
	}

	// All state settings needed to reset game
	const resetGame = () => {
		setTriviaData([]);
		setError(null);
		setIsLoading(false)
		setCurrQuestion(-1);
	}

	// Main function to start a new game with new questions
	const startGame = () => {
		resetGame();
		getData();
		setCurrQuestion(0);
	}

	return (
		<Main
			triviaData={triviaData}
			error={error}
			isLoading={isLoading}
			currQuestion={currQuestion}
			startGame={startGame}
			answerQuestion={(response) => answerQuestion(response)}
		/>
	);
}

export default App;
