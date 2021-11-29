import React from "react";

function Title({ message, triviaItem }) {

    const renderTitle = () => {
        if (triviaItem) {
            return  (
                <div>
                    <h1><strong>Category:</strong> {triviaItem.category}</h1>
                    <h3><strong>Difficulty:</strong> {triviaItem.difficulty.charAt(0).toUpperCase() + triviaItem.difficulty.slice(1)}</h3>
                </div>
            );
        }
        return <h1>{ message }</h1>;
    }

    const currTitle = renderTitle();

    return (
        <>
            {currTitle}
        </>
    );
}

export default Title;
