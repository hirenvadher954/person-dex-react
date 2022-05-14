import logo from './logo.svg';

import {Component} from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
    constructor() {
        super();
        this.state = {
            persons: [],
            searchField: ''
        }
    }

    onSearchChange = (event) => {
        const searchField = event.target.value.toLowerCase();
        this.setState(() => {
            return {searchField: searchField}
        });                            // this.state.monsters.filter((monster) => event.target.value === monster.name);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => this.setState(() => {
                return {persons: users}
            }))
    }

    render() {
        const {persons, searchField} = this.state;
        const {onSearchChange} = this;
        const filteredMonsters = persons.filter((person) => person.name.toLowerCase().includes(searchField));
        return (
            <div className="App">
                <h1>Hiren Vadher is Learning React</h1>
                <SearchBox onChangeHandler={onSearchChange}
                           placeholder='search monsters'
                           className='person-search-box'
                />

                <CardList persons={filteredMonsters}/>
            </div>
        );
    }
}

export default App;
