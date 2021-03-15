import Card from './Card.js';
import shuffle from '../shuffle.js';

const Board = (props) => {
  const el = document.createElement('div');
  el.className = 'board';
  const shuffleArr = shuffle(props);
  const data = shuffleArr.map(el => Card(el));
  let turns = 0;
  let counter = 0;
  data.forEach(element => {
    element.addEventListener('click', (event) => {
      const target = event.currentTarget;
      event.stopPropagation();
      event.preventDefault();
  switch (counter) {
    case 0:
      target.classList.add('active');
      counter = counter + 1;
      break;
    case 1:
      target.classList.add('active');
      counter = counter + 1;
      setTimeout(() => { checkCards(el, data); }, 1000);
      counter = 0;
      turns = turns +1;
      break;
    default:
      clearCards(data);
      break;
    }
    });
    el.appendChild(element)
    })
  return el;
};

const checkCards = (board, data) => {
  const cards = board.querySelectorAll('.active');
  if(cards[0].dataset.name === cards[1].dataset.name) {
    cards[0].classList.add('blocked');
    cards[1].classList.add('blocked');
    cards[0].classList.remove('active');
    cards[1].classList.remove('active');
  } else {
    clearCards(data);
  }
};

const clearCards = (board) => {
  return board.map(element => element.classList.remove('active'));
}

export default Board;
