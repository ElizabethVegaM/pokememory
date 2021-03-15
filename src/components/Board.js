import Card from './Card.js';
import shuffle from '../shuffle.js';

const Board = (props) => {
  const shuffleArr = shuffle(props);
  const data = shuffleArr.map(el =>Card(el))
  const el = document.createElement('div');
  el.className = 'board';

  data.forEach(element => {
    el.appendChild(element)
  });

  return el;
};

export default Board;
