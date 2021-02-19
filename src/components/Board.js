import Card from './Card.js';

const Board = (props) => {
  console.log(props)
  const data = props.map(el =>Card(el))
  const el = document.createElement('div');
  el.className = 'board';


  for (let i = 0; i < data.length; i++) {
    el.innerHTML += data[i].outerHTML;
  }

  return el;
};

export default Board;
