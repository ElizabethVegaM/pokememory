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

  // cards.forEach(element => {
  //   element.addEventListener('click', (event) => {
  //     const target = event.currentTarget;
  //     event.preventDefault();
  //     event.stopPropagation();
  //     target.classList.contains('active') ? target.classList.remove('active') : target.classList.add('active');
  //   })
  // });
  el.addEventListener('click', (event) => {
    const target = event.currentTarget;
    event.stopPropagation();
    event.preventDefault();
    target.classList.contains('active') ? target.classList.remove('active') : target.classList.add('active');
  })

  return el;
};

export default Card;
