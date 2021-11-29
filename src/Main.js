import React from 'react';
import Title from './Title';
import Body from './Body';
import Select from './Select';
import './Main.css';

function Main({ triviaData, error, isLoading, currQuestion, startGame, answerQuestion }) {

    console.log(error, isLoading);

    // Conditionally create title question or message
    const currTitleMessage = currQuestion >= triviaData.length ? 'Your Results:' : 'Welcome To The Trivia Challenge!';
    const currSelectMessage = currQuestion >= triviaData.length ? 'Try Again?' : 'Begin!';
    const currBodyMessage = currQuestion >= triviaData.length ? null : 'You will be shown 10 true or false questions.  Can you score 100%?';
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
                    <Body message={currBodyMessage} triviaItem={currTriviaItem} />
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
