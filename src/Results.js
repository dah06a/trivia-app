import React from "react";

function Results({ triviaData }) {

    const renderResultRows = () => {
        return triviaData.map((triviaItem, index) => {
            const correct = triviaItem.response === triviaItem.correct_answer;
            const textColor = correct ? 'text-success' : 'text-danger';
            const indicatorSymbol = correct ? '+' : '-';
            return (
                <div className={`row my-4 p-2 bg-gradient bg-light ${textColor}`} key={triviaItem.question}>
                    <div className="col-sm d-flex align-items-center justify-content-center">
                        <h1 className='card-text align-self-center'>{indicatorSymbol}</h1>
                    </div>
                    <div className="col-sm d-flex align-items-center">

                        <p className='card-text'>{`${index+1}. ${triviaItem.question.slice(0, 50)}...`}</p>
                    </div>
                    <div className="col-sm ">
                        <div>
                            <p className='card-text mb-0'><strong>Correct Answer: {triviaItem.correct_answer}</strong></p>
                            <p className='card-text mt-0'>Your Response: {triviaItem.response}</p>
                        </div>
                    </div>
                </div>
            );
        });
    }

    const resultRows = renderResultRows();

    return (
        <div className="container">
            {resultRows}
        </div>
    );
}

export default Results;
