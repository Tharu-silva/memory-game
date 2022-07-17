// Item.js
import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

const Button = (props) => {
  return (
    <div>
      <button id = {props.idValue} onClick = {props.onClick}>{props.value}</button>
    </div>
  );
}

export default Button;
