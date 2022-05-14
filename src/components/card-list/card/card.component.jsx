import {Component} from "react";
import './card.styles.css';

import React from 'react';

const Card = ({person}) => {
    const {name, id, email} = person;

    return (
        <div className='card-container' key={id}>
            <img alt={`monster ${name}`}
                 src={`https://robohash.org/${id}?set=set5&size=180x180`}/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}


export default Card;
