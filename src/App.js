import './App.css';
import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Button from './components/Button';
import Score from './components/Score';

function App() {
  const [items, setItems] = useState(
    {
      '1': {value: 1, 'isClicked': false},
      '2': {value: 2, 'isClicked': false},
      '3': {value: 3, 'isClicked': false},
      '4': {value: 4, 'isClicked': false}
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
    newItems[id]['isClicked'] = true
    setItems(newItems)
    //

    setScore(score + 1)
  }

  const isSelected = () => {
    // Sets the high score as the current score
    setHighScore(score)
    setScore(0)
    const newItems = items
    //Loops through the items object and sets each of the isClicked properties to false
    Object.keys(newItems).forEach(function(key) {
      newItems[key]['isClicked'] = false
  });

    setItems(newItems)

  }

  const genIndicies = () => {
    const list = [];
    const size = Object.keys(items).length
    for (let i = 0; i < size; i++) {
      list.push(i);
    }
    return list
}

  return (
    <div>
      <Score score = {score} highScore = {highScore}/>
      {shuffle(genIndicies()).map((index) => {
        // List of keys in the items object
        const keys = Object.keys(items)
        // The current key selected
        const key = keys[index]
        // The current item object selected
        const item = items[keys[index]]
        if (item['isClicked']) {
          return <Button idValue = {keys[index]} value = {item.value} onClick = {isSelected} key={keys[index]}/>
        } else {
          return <Button idValue = {key} value = {item.value} onClick = {notSelected} key={keys[index]}/>
        }
      })}
    </div>
  );
}

export default App;
