const Card = (data) => {
  const el = document.createElement('div');
  el.className = 'card';
  el.dataset.name = data.id;

  const front = document.createElement('div')
  front.className = 'card-front';
  front.innerHTML = '<img src="./img/pokememory-logo.png">';

  const back = document.createElement('div');
  back.className = 'card-back';
  back.innerHTML = `<img src=${data.image} alt="${data.id} card image">`;

  el.appendChild(front);
  el.appendChild(back);

  // el.addEventListener('click', (event) => {
  //   console.log(event.target);
  //   console.log('hola' + data.id)
  //   event.target.contain('active') ? event.target.classList.remove('active') : event.target.classList.add('active');
  // });
  return el;
};

export default Card;
