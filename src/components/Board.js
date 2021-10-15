import Card from './Card.js';
import shuffle from '../shuffle.js';

const Board = (props) => {
  let turnsCounter = 0;
  let activeCards = 0;
  let pointsCounter = 0;

  const el = document.createElement('main');
  el.className = 'board';

  const info = document.createElement('section');
  info.className = 'info-container';

  const cardsContainer = document.createElement('section');
  cardsContainer.className = 'cards-container';

  const turns = document.createElement('p');
  turns.textContent = `Turnos: 0`;

  const points = document.createElement('p');
  points.textContent = `Puntos: 0`;

  const shuffleArr = shuffle(props);
  const data = shuffleArr.map(el => Card(el));

  /* Cambios en fx CheckCards:
  - el chequear las cards debería solo verificar si ambos dataset.name son === y retornar true/false (purificar fx)
  - cambios en los estilos de las cartas deberían ocurrir después de esa verificación
  - verificación podría ser inmediata y solo el css en el settimeout
  - validar estado de "juego terminado": 1) chequear que todos los elementos sean '.bloqued' 2) pointsCounter = 9 (mas facil);
  */

 data.forEach(element => {
   element.addEventListener('click', (event) => {
     event.stopPropagation();
      const target = event.currentTarget;
      if(!target.classList.contains('blocked')) {
        switch (activeCards) {
          case 0:
            target.classList.add('active');
            activeCards = activeCards + 1;
            break;
            case 1:
              target.classList.add('active');
              activeCards = activeCards + 1;
              turnsCounter = turnsCounter + 1;
              setTimeout(() => {
                if(checkMatch(el)) {
                  pointsCounter = pointsCounter + 1;
                  points.textContent = `Puntaje: ${pointsCounter}`;
                  if (pointsCounter === 9) {
                    alert('Has ganado, felicitaciones!');
                    
                  }
                }
                clearCards(data);
              }, 1000);
              activeCards = 0;
              turns.textContent = `Turnos: ${turnsCounter}`;
              break;
              default:
                clearCards(data);
                break;
              }
            } else {
              alert('Ya descubriste esta carta');
            }
          });
          cardsContainer.appendChild(element);
        })

        info.appendChild(turns);
        info.appendChild(points);
        el.appendChild(info);
        el.appendChild(cardsContainer);

  return el;
};

const checkMatch = (board) => {
  const cards = board.querySelectorAll('.active');
  if(cards[0].dataset.name === cards[1].dataset.name) {
    cards[0].classList.add('blocked');
    cards[1].classList.add('blocked');
    cards[0].classList.remove('active');
    cards[1].classList.remove('active');
    return true;
  }
  return false;
};

const clearCards = (board) => {
  board.forEach(element => element.classList.remove('active'));
}

export default Board;
