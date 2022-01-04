import React from 'react';
import "./Main.css";
import words from "../data.json"

const Main = (props) => {
    console.log(props)
    return (
        <div className="Main-site">
            <p>{props.x}</p>
            <div><p>{props.rusForm}</p></div>
        </div>
    );
};

export default Main;
