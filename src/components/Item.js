// Item.js
import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

function Item(props) {
  return (
    <div id = {props.key} onClick = {props.onClick}>
      <button>{props.value}</button>
    </div>
  );
}

export default Item;
