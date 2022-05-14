import {useEffect, useState} from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import React from 'react';

const App = (props) => {
    const [searchField, setSearchField] = useState('');
    const [persons, setPersons] = useState([]);
    console.log("App render")
    const onSearchChange = (event) => {
        const searchField = event.target.value.toLowerCase();
        setSearchField(searchField);
    }


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => setPersons(users))
    }, [])

    useEffect(() => {
        persons.filter((person) => person.name.toLowerCase().includes(searchField));
    }, [persons, searchField]);

    const filteredPersons = persons.filter((person) => person.name.toLowerCase().includes(searchField));

    return (
        <div className="App">
            <h1>Hiren Vadher is Learning React</h1>
            <SearchBox onChangeHandler={onSearchChange}
                       placeholder='search persons'
                       className='monster-search-box'
            />

            <CardList persons={filteredPersons}/>
        </div>
    );
}

export default App;
