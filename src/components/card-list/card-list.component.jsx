import {Component} from "react";
import './card-list.styles.css';
import Card from "./card/card.component";

class CardList extends Component {

    render() {
        const {persons} = this.props;
        return (
            <div className='card-list'>
                {persons.map((person) => <Card key={person.id} person={person}/>)}
            </div>
        );
    }
}


export default CardList;
