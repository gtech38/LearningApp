import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import {Link} from 'react-router-dom';
import axios from 'axios';
import AddDeck from './AddDeck';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete';
import PlayIcon from '@material-ui/icons/PlayArrow';
import CreateIcon from '@material-ui/icons/Create';
import DecksDataService from '../services/decks.service';


export default class DeckList extends Component {
  constructor(props) {
    super(props);
    this.retrieveDecks = this.retrieveDecks.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveDeck = this.setActiveDeck.bind(this);
    this.state = {
      data: [],
      currentDeck: null,
      currentIndex: -1
    };
  }

  componentDidMount() {
    this.retrieveDecks();
  }

  retrieveDecks() {
    DecksDataService.getAll()
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: 'Something went wrong!' };
          });
        }
        return response.json();
      })
      .then(data => {
        this.setState(() => {
          return {
            data,
            loaded: true
          };
        });
      });
  }

  refreshList(){
    this.retrieveDecks();
    this.setState({
      currentDeck: null,
      currentIndex: -1
    });
  }

  setActiveDeck(deck, index) {
    this.setState({
      currentDeck: deck,
      currentIndex: index
    });
  }

  render(){
    const {data, currentDeck, currentIndex} = this.state;
    return (
      <div>
        <div className="col-md-6">
          <h4>Decks List</h4>
          <div className="list-group">
            {data &&
              data.map((deck, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveDeck(deck, index)}
                  key={index}
                >
                  {deck.deck_name}
                </li>
              ))}
          </div>
        </div>
        
        <div className="col-md-6">
          {currentDeck ? (
            <div>
              <h4>Decks</h4>
              <div>
                <label>
                  <strong>Name:</strong>
                </label>{" "}
                {currentDeck.uid}
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentDeck.slug}
              </div>
              <Button startIcon={<PlayIcon/>}>Play</Button>  
              <Link to={"/decks/" + currentDeck.slug}>
                <Button startIcon={<CreateIcon/>}>Edit</Button>
              </Link>

            </div>
          ) : (
            <div>
              <br />
              <p>Please choose a Deck</p>
            </div>
          )}
        </div>
      </div>
      );
  }

}