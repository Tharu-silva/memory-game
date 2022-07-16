import './App.css';
import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './components/Item';
import Item from './components/Item';
import Score from './components/Score';

function App() {
  const [items, setItems] = useState(
    {
      '1': {value: 1, 'isClicked': false},
      '2': {value: 2, 'isClicked': false},
      '3': {value: 3, 'isClicked': false}
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
    clickedItem['isClicked'] = true
    setItems(newItems)
    //

    setScore(score + 1)
  }

  const isSelected = () => {
    // Sets the high score as the current score
    setHighScore(score)

    //Loops through the items object and sets each of the isClicked properties to false
    for (const item in Object.keys(items)) {
      const currItem = items[item]
      currItem['isClicked'] = false
    }
  }

  return (
    <div>
      <Score score = {score} highScore = {highScore}/>
      {shuffle([0,1,2]).map((index) => {
        // List of keys in the items object
        const keys = Object.keys(items)
        // The current key selected
        const key = keys[index]
        // The current item object selected
        const item = items[key]
        if (item['isClicked']) {
          return <Item key = {key} value = {item.value} onClick = {isSelected}/>
        } else {
          return <Item key = {key} value = {item.value} onClick = {notSelected}/>
        }
      })}
    </div>
  );
}

export default App;
