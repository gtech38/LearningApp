import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import {Link} from 'react-router-dom';
import axios from 'axios';
import DecksDataService from '../services/decks.service';

export default class Deck extends Component{
  constructor(props) {
    super(props);
    this.getDeck = this.getDeck.bind(this);
    this.updateDeck = this.updateDeck.bind(this);
    this.deleteDeck = this.deleteDeck.bind(this);

    this.state = {
      currentDeck: {
        id: null,
        title: "",
        description: "",
        published: false
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getDeck(this.props.match.params.id);
  }

   getDeck(id) {
    DeckDataService.get(id)
      .then(response => {
        this.setState({
          currentDeck: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePublished(status) {
    var data = {
      id: this.state.currentDeck.id,
      title: this.state.currentDeck.title,
    };

    DeckDataService.update(this.state.currentDeck.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentDeck: {
            ...prevState.currentDeck,
            published: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateDeck() {
    DeckDataService.update(
      this.state.currentDeck.id,
      this.state.currentDeck
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The Deck was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteDeck() {    
    DeckDataService.delete(this.state.currentDeck.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/decks')
      })
      .catch(e => {
        console.log(e);
      });
  }

render() {
    const { currentDeck } = this.state;

    return (
      <div>
        {currentDeck ? (
          <div className="edit-form">
            <h4>Deck</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentDeck.title}
                  onChange={this.onChangeTitle}
                />
              </div>
            </form>

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteDeck}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateDeck}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Deck...</p>
          </div>
        )}
      </div>
    );
  }

}