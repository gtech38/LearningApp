import React, { Component } from "react";
import { render } from "react-dom";
import AddDeckForm from './AddDeck';
import {Link} from "react-router";


import axios from 'axios';

class Decks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading"
    };
  }
  
  componentDidMount(){
    fetch('api/decks')
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
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
      <li key={deck.slug} className="list-group-item d-flex justify-content-between align-items-center">
        <span> {deck.deck_name} </span> 
        <span>
           <button className="btn btn-secondary mr-2"> Details </button>
        </span>
      </li>
    ));
  }

  render() {
    return (
    	<div className="decks">
    		<h3> My Decks </h3>
    		{this.renderDecks()}
		  </div>
	        )

	}
}


export default Decks;

const container = document.getElementById("decks");
render(<Decks />, container);