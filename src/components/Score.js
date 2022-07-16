// Item.js
import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

function Score(props) {
  return (
    <div>
      Score: {props.score} <br></br>
      High Score: {props.highScore}
    </div>
  );
}

export default Score;
