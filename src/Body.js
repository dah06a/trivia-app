import React from "react";
import Results from './Results';

function Body({ message, questionNumber, triviaItem, triviaData }) {

    const renderBodyHeader = () => {
        if (triviaItem) {
            return `Question ${questionNumber.toString()}:`
        } else {
            return message;
        }
    }

    const renderBodyMessage = () => {
        if (triviaItem) {
            return <h4 className="card-text">{triviaItem.question}</h4>;
        } else {
            return questionNumber === 0
                ? <h4 className="card-text">You will be presented with 10 true or false questions.  Can you score 100%?</h4>
                : <Results triviaData={triviaData} />
        }

    }

    const currBodyHeader = renderBodyHeader();
    const currBodyMessage = renderBodyMessage();

    return (
        <div className="card h-100 p-3" style={{overflowY: 'scroll', overflowX: 'hidden'}}>
            <div className="card-header">
                <h3>{currBodyHeader}</h3>
            </div>
            <div className="card-body h-50">
                {currBodyMessage}
            </div>
        </div>
    );
}

export default Body;
