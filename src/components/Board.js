import Card from './Card.js';
import shuffle from '../shuffle.js';

const Board = (props) => {
  console.log(props)
  const shuffleArr = shuffle(props);
  const data = shuffleArr.map(el =>Card(el))
  const el = document.createElement('div');
  el.className = 'board';

  for (let i = 0; i < data.length; i++) {
    el.innerHTML += data[i].outerHTML;
  }

  return el;
};

export default Board;
