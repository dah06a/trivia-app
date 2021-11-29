import React from 'react';
import Title from './Title';
import './Main.css';

function Main({ getData, triviaData, currQuestion }) {

    let currMessage = 'Welcome To The Trivia Challenge!';
    if (currQuestion >= triviaData.length) {
        currMessage = 'Your Results:';
    }

    const currTriviaItem = triviaData ? triviaData[currQuestion] : null;


    return(
        <div className="container main">

            <div className="row h-25 align-items-center">
                <div className="col ">
                    <Title message={currMessage} triviaItem={currTriviaItem} />
                </div>
            </div>

            <div className="row h-50 align-items-center">
                <div className="col">
                    Main Body
                </div>
            </div>

            <div className="row h-25 align-items-center">
                <div className="col">
                    <button onClick={() => getData()}>Get Data</button>
                    Main Buttons
                </div>
            </div>

        </div>
    );
}

export default Main;
