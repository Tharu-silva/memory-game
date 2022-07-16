import './App.css';
import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import { click } from '@testing-library/user-event/dist/click';

function App() {
  const [items, setItems] = useState(
    {
      '1': {value: 1, isClicked: false},
      '2': {value: 2, isClicked: false},
      '3': {value: 3, isClicked: false}
    });

  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  
  const shuffle = (array) => {
    var tmp, current, top = array.length;
    if(top) while(--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
  }
    return array;
  }

  const notSelected = (e) => {
    const id = e.target.id

    //Sets the is clicked property of the item that was just clicked to true
    const newItems = items
    const clickedItem = newItems[id]
    clickedItem.isClicked = true
    setItems(newItems)
    //

    setScore(score + 1)
  }

  return (
      shuffle([0,1,2]).map((index) => {
        const keys = Object.keys(items)
        const key = keys[index]
        const item = items[key]

        return <Item key = {key} value = {item.value}/> 
      })
  );
}

export default App;
