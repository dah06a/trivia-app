import React from 'react';
import './Main.css';

function Main() {
    return(
        <div className="container main">

            <div className="row h-25 align-items-center">
                <div className="col ">
                    <h2>Main Title</h2>
                </div>
            </div>

            <div className="row h-50 align-items-center">
                <div className="col">
                    Main Body
                </div>
            </div>

            <div className="row h-25 align-items-center">
                <div className="col">
                    Main Buttons
                </div>
            </div>

        </div>
    );
}

export default Main;
