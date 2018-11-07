import React from "react";
import "./Header.css";

const Header = props => (
    <div className="jumbotron">
        <div>
            <ul>
                <div>
                    <h1>{props.title}</h1>
                </div>
                <div>
                    <strong></strong> {props.rightWrong}
                </div>
                <div className="score">
                    Score: {props.score}
                </div>
                <div>
                    Highest Score: {props.bestScore}
                </div>

            </ul>
        </div>
    </div>

);

export default Header;