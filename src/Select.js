import React from "react";

function Select({ message, triviaItem, startGame, answerQuestion }) {

    const renderSelect = () => {
        if (triviaItem) {
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
        return (
            <button
                className="btn btn-lg btn-primary"
                onClick={startGame}
                >{message}
            </button>
        );
    }

    const currSelect = renderSelect();

    return (
        <>
            {currSelect}
        </>
    );
}

export default Select;
