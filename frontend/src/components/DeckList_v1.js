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


class DeckList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: 'Loading'
    };
  }
  
  componentDidMount(){
    fetch('api/decks')
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


  renderDecks () {
    return this.state.data.map(deck => (
      <li key={deck.uid} className='list-group-item d-flex justify-content-between align-items-center'>
        <span> {deck.deck_name} </span> 
        <span>
           <Button startIcon={<PlayIcon/>}>Play</Button>
          </span>
          <span>
           <Button startIcon={<CreateIcon/>}>Edit</Button>
          </span>
          <span>
          <Button startIcon={<DeleteIcon/>}>Delete</Button>
        </span>
      </li>
    ));
  }

  render() {
    return (

      <div className='decks'>
        {this.renderDecks()}
      </div>
         )

  }
}

export default DeckList;