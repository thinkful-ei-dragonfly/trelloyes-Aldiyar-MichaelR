import React from 'react';
import Card from './Card';
import './List.css';

// props.store.allCards.map(cards)

// const cards = Object.keys(props.store.allCards)

function List (props) {
  const cards = props.cards
  return (
    <section className="List">
    <header className="List-header">
      <h2>{props.header}</h2>
    </header>
    <div className="List-cards">
      {cards.map((card,index) => (
        <Card key={index} title={card.title} content={card.content} onDeleteItem = {props.onDeleteItem} />
      ))}
      <button type="button" className="List-add-button" onClick={() =>{
        props.onAddItem()}
      }>
        + Add Random Card
      </button>
    </div>
  </section>
  )
}

export default List;