import React from 'react';
import Title from './Title';
import Body from './Body';
import Select from './Select';
import './Main.css';

function Main({ triviaData, error, isLoading, currQuestion, startGame, answerQuestion, getScore }) {

    console.log(error, isLoading);

    // Conditionally create title question or message
    const currTitleMessage = currQuestion >= triviaData.length ? 'Your Results:' : 'Welcome To The Trivia Challenge!';
    const currSelectMessage = currQuestion >= triviaData.length ? 'Try Again?' : 'Begin!';
    const currBodyMessage = currQuestion >= triviaData.length ? `You scored ${getScore().toString()} out of 10` : 'Ready To Play?';
    const currTriviaItem = triviaData && currQuestion < triviaData.length ? triviaData[currQuestion] : null;


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
                <div className="col col-md-6 m-auto">
                    <Body
                        message={currBodyMessage}
                        questionNumber={currQuestion+1}
                        triviaItem={currTriviaItem}
                    />
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
