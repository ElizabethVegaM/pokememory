const Card = (data) => {
  const el = document.createElement('div');
  el.className = 'card';
  el.dataset.name = data.id;

  const front = document.createElement('div')
  front.className = 'card-front';
  front.innerHTML = '<img src="./img/pokemon-egg.png">';

  const back = document.createElement('div');
  back.className = 'card-back';
  back.style.backgroundColor = data.bgColor;
  back.innerHTML = `<img src=${data.image} alt="${data.id} card image">`;

  el.appendChild(front);
  el.appendChild(back);

  return el;
};

export default Card;
