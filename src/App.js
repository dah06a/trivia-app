import React, { useState } from 'react';
import { decodeQuestions } from './utils/decodeQuestions';
import Main from './Main';

function App() {

	// State for data fetch request and error handling
	const [triviaData, setTriviaData] = useState([]);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [location, setLocation] = useState('start');
	const [currQuestion, setCurrQuestion] = useState(0);

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
			setLocation('game');
			console.log('Trivia data successfully fetched.');
		} catch (e) {
			setError(true);
			console.error('There was a problem retreving the triva data in the App component useEffect: ', e);
		}
		setIsLoading(false);
	}

	// Add new property and update state triviaData to show response from user
	const answerQuestion = (response) => {
		let updatedTriviaItem = triviaData[currQuestion];
		updatedTriviaItem.response = response;

		const updatedTriviaData = triviaData.map((triviaItem, index) => {
			if (index === currQuestion) triviaItem = updatedTriviaItem;
			return triviaItem;
		});

		setTriviaData(updatedTriviaData);

		if (currQuestion + 1 >= triviaData.length) {
			setLocation('results');
		} else {
			setCurrQuestion(currQuestion + 1);
		}
	}

	// All state settings needed to reset game
	const resetGame = () => {
		setTriviaData([]);
		setError(null);
		setIsLoading(false)
		setCurrQuestion(0);
	}

	// Main function to start a new game with new questions
	const startGame = () => {
		resetGame();
		getData();
	}

	// Function to retreive score based on current triviaData state
	const getScore = () => {
        let score = 0;
        triviaData.forEach(triviaItem => {
            if (triviaItem.response === triviaItem.correct_answer) {
                score++;
            }
        });
        return score;
    }

	// Main Return Function
	return (
		<Main
			triviaData={triviaData}
			error={error}
			isLoading={isLoading}
			location={location}
			currQuestion={currQuestion}
			startGame={startGame}
			answerQuestion={(response) => answerQuestion(response)}
			getScore={getScore}
		/>
	);
}

export default App;
