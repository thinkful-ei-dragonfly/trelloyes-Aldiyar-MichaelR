import React from 'react';
import Card from './Card';

// props.store.allCards.map(cards)

// const cards = Object.keys(props.store.allCards)

function List (props) {
  const cards = props.cards
  return (
    <section class="List">
    <header class="List-header">
      <h2>{props.header}</h2>
    </header>
    <div class="List-cards">
      {cards.map(card => (
        <Card key={card.id} title={card.title} content={card.content}/>
      ))}
      <button type="button" class="List-add-button">
        + Add Random Card
      </button>
    </div>
  </section>
  )
}

export default List;