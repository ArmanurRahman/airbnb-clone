import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
    return (
        <div className={classes.Card}>
            <img src={props.src} />
            <div>
                <h4>{props.title}</h4>
                <h5>{props.description}</h5>
                <p>{props.price}</p>
            </div>
        </div>
    );
};

export default Card;
