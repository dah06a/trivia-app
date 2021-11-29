import React from 'react';
import Title from './Title';
import Select from './Select';
import './Main.css';

function Main({ triviaData, error, isLoading, currQuestion, startGame, answerQuestion }) {

    console.log(error, isLoading);

    // Conditionally create title question or message
    const currTitleMessage = currQuestion >= triviaData.length ? 'Your Results:' : 'Welcome To The Trivia Challenge!';
    const currSelectMessage = currQuestion >= triviaData.length ? 'Try Again?' : 'Start Game!';
    const currTriviaItem = triviaData ? triviaData[currQuestion] : null;


    return(
        <div className="container main">

            <div className="row h-25 align-items-center">
                <div className="col ">
                    <Title
                        message={currTitleMessage}
                        triviaItem={currTriviaItem}
                    />
                </div>
            </div>

            <div className="row h-50 align-items-center">
                <div className="col">
                    Main Body
                </div>
            </div>

            <div className="row h-25 align-items-center">
                <div className="col">
                    <Select
                        message={currSelectMessage}
                        triviaItem={currTriviaItem}
                        startGame={startGame}
                        answerQuestion={(response) => answerQuestion(response)}
                    />
                </div>
            </div>

        </div>
    );
}

export default Main;
