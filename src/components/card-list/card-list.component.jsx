import {Component} from "react";
import './card-list.styles.css';
import Card from "./card/card.component";

import React from 'react';

const CardList = ({persons}) =>
    <div className='card-list'>
        {persons.map((person) => <Card key={person.id} person={person}/>)}
    </div>


export default CardList;
