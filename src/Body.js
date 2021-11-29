import React from "react";

function Body({ message, triviaItem }) {

    const renderTitle = () => {
        if (triviaItem) {
            return  (
                <div>
                    <h3><strong>True Or False?</strong></h3>
                    <h4> {triviaItem.question}</h4>
                </div>
            );
        }
        return <h4>{ message }</h4>;
    }

    const currTitle = renderTitle();

    return (
        <>
            {currTitle}
        </>
    );
}

export default Body;
