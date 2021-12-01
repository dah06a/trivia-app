import React from 'react';
import Title from './Title';
import Body from './Body';
import Select from './Select';
import './Main.css';

function Main({ triviaData, location, currQuestion, startGame, answerQuestion, getScore }) {

    // Get current trivia item
    const currTriviaItem = location === 'game' ? triviaData[currQuestion] : null;

    //Main Return Function
    return(
        <div className="container main">

            {/* Title Area  */}
            <div className="row h-25 align-items-center">
                <div className="col">
                    <Title
                        location={location}
                        triviaItem={currTriviaItem}
                    />
                </div>
            </div>

            {/* Main Display */}
            <div className="row h-50 align-items-center">
                <div className="col col-sm-10 col-lg-8 h-100 m-auto">
                    <Body
                        location={location}
                        questionNumber={currQuestion+1}
                        triviaItem={currTriviaItem}
                        triviaData={triviaData}
                        getScore={getScore}
                    />
                </div>
            </div>

            {/* Select Buttons */}
            <div className="row h-25 align-items-center">
                <div className="col">
                    <Select
                        location={location}
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
