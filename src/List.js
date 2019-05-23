import React from 'react';
import Card from './Card';
import './List.css';

// props.store.allCards.map(cards)

// const cards = Object.keys(props.store.allCards)

function List (props) {
  const cards = props.cards
  let cardComponents = cards.map((card,index) => {
    // console.log(card);
    return <Card key={index} cardKey={card.cardKey} title={card.card.title} content={card.card.content} onDeleteItem = {props.onDeleteItem} />
  });
  return (
    <section className="List">
    <header className="List-header">
      <h2>{props.header}</h2>
    </header>
    <div className="List-cards">
      {cards.map((card,index) => (
        <Card key={index} cardKey={card.cardKey} title={card.card.title} content={card.card.content} onDeleteItem = {props.onDeleteItem} />
      ))}
      <button type="button" className="List-add-button" onClick={() =>{
        props.onAddItem(props.listId)}
      }>
        + Add Random Card
      </button>
    </div>
  </section>
  )
}

export default List;