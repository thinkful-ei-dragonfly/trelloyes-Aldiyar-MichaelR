import React from 'react';
import './Card.css';

function Card (props) {
  

    return (
      <div className='card'>
        <button type="button" onClick={() =>{
          props.onDeleteItem(props.index)
        }}>delete</button>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </div>
    )
  }

export default Card;