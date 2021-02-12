const Card = (props) => {
  const el = document.createElement('div');

  el.className = 'card';
  el.textContent = 'Soy una card';

  return el;
};

export default Card;
