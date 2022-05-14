import {Component} from "react";
import './card.styles.css';
class Card extends Component {
    render() {
        const {name, id, email} = this.props.person;
        return (
            <div className='card-container' key={this.props.id}>
                <img alt={`monster ${name}`}
                     src={`https://robohash.org/${id}?set=set5&size=180x180`}/>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        );
    }
}

export default Card;
