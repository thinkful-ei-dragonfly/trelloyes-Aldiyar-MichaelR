import React from 'react';
import List from './List';
import './App.css';

function App(props) {
  const array = props.store.lists;
  console.log(array)
  return (
    <main className='App'>
      {array.map(list => (
        <List 
        key={list.id}
        header={list.header}
        cards={list.cardIds.map(id => (
          props.store.allCards[id]
        ))}
        />
      ) )}
    </main>
  );
}

export default App;