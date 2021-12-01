import React from "react";
import Results from './Results';

function Body({ location, questionNumber, triviaItem, triviaData, getScore }) {

    // Conditionally render body header based on location
    const renderBodyHeader = () => {
        if (location === 'start') {
            return <h3>Ready To Play?</h3>
        }
        if (location === 'game') {
            return <h3>{`Question ${questionNumber.toString()}`}</h3>
        }
        if (location === 'results'){
            return <h3>{`You scored ${getScore().toString()} out of 10`}</h3>;
        }
        return <h3 className="text-danger">Error: Please Refresh</h3>
    }

    // Conditionally render body content based on location
    const renderBodyContent = () => {
        if (location === 'start') {
            return <h4 className="card-text m-auto align-self-center">You will be presented with 10 true or false questions.  Can you score 100%?</h4>
        }
        if (location === 'game') {
            return <h4 className="card-text m-auto align-self-center">{triviaItem.question}</h4>;
        }
        if (location === 'results') {
            return <Results triviaData={triviaData} />
        }

    }

    const currBodyHeader = renderBodyHeader();
    const currBodyContent = renderBodyContent();

    // Main Return Function
    return (
        <div className="card h-100 p-3" style={{overflowY: 'scroll', overflowX: 'hidden'}}>
            <div className="card-header">
                {currBodyHeader}
            </div>
            <div className="card-body h-50 d-flex">
                {currBodyContent}
            </div>
        </div>
    );
}

export default Body;
