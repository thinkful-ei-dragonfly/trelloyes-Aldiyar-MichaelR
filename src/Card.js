import React from 'react';
import STORE from './store';

function Cards (props) {
  console.log(props.store.allCards);
  return (
    <div>

      <button>Delete</button>
    </div>
  );
}

export default Cards;