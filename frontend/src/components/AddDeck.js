import React, { Component } from "react";
import { render } from "react-dom";
import axios from 'axios';

class AddDeck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please enter a name for your new deck.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event, requestType) {
    const deck_name = event.target.elements.addDeck.value;
    event.preventDefault();

    axios.post('/api/decks/create/', {deck_name: deck_name})
    .then(res => console.log(res))
    .catch(error=>console.error(error));
    //alert('A new deck was created: ' + deck_name);
    location.reload()
    console.log(deck_name);
  }

  render() {
    return (
      <div>
        <form className="AddDeck" onSubmit={(event) => this.handleSubmit(event)}>
          <input name="addDeck" placeholder="Enter the new deck name here."/> 
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddDeck;





