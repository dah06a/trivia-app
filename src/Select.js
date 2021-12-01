import React from "react";

function Select({ location, startGame, answerQuestion }) {

    // Conditionally render select buttons based on location
    const renderSelect = () => {
        if (location === 'start') {
            return <button className="btn btn-lg btn-primary" onClick={startGame}>Begin!</button>
        }
        if (location === 'game') {
            return (
                <div className="row">
                    <div className="col">
                        <button
                            className="btn btn-lg btn-success w-75"
                            onClick={() => answerQuestion('True')}
                            >True
                        </button>
                    </div>
                    <div className="col">
                        <button
                            className="btn btn-lg btn-danger w-75"
                            onClick={() => answerQuestion('False')}
                            >False
                        </button>
                    </div>
                </div>
            );
        }
        if (location === 'results') {
            return <button className="btn btn-lg btn-warning" onClick={startGame}>Try Again?</button>
        }
        return <h3 className="text-danger">Error: Please Refresh</h3>
    }

    const currSelect = renderSelect();

    // Main Return Function
    return currSelect;
}

export default Select;
