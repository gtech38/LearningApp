import React from 'react';
import DeckList from '../components/DeckList';
import AddDeck from '../components/AddDeck';
function Decks() {
  return (
	<div className='decks'>
	<h3> My Decks </h3>
	  <AddDeck/>
    <DeckList/>
    </div>

  );
}

export default Decks;