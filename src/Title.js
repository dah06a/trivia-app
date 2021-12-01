import React from "react";

function Title({ location, triviaItem, getScore, isLoading, error }) {

    // Conditionally render title based on location
    const renderTitle = () => {
        if (error || isLoading) {
            return null
        }
        if (location === 'start') {
            return <h1>Welcome To The Trivia Challenge!</h1>
        }
        if (location === 'game') {
            return  (
                <div>
                    <h1><strong>Category:</strong> {triviaItem.category}</h1>
                    <h3><strong>Difficulty:</strong> {triviaItem.difficulty.charAt(0).toUpperCase() + triviaItem.difficulty.slice(1)}</h3>
                </div>
            );
        }
        if (location === 'results') {
            return <h1>{`Results: ${getScore().toString()}/10`}</h1>
        }
        return <h3 className="text-danger">Error: Please Refresh</h3>
    }

    const currTitle = renderTitle();

    // Main Return Function
    return currTitle;
}

export default Title;
