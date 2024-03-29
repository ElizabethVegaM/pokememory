//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
import pokemon from '../data/pokemon/pokemon.js';
console.log(pokemon);
//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);

import Board from './Board.js';
import Header from './Header.js';

const App = () => {
  const el = document.createElement('div');

  el.className = 'App';
  const arrCopy = pokemon.items.slice();
  pokemon.items.forEach(el => arrCopy.push(el));

  el.appendChild(Header());
  el.appendChild(Board(arrCopy));

  return el;
};

export default App;
