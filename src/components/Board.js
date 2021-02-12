const Board = () => {
  const el = document.createElement('div');

  el.className = 'board';
  el.textContent = 'Hola soy el tablero!';

  return el;
};

export default Board;
