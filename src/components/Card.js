const Card = (data) => {
  const el = document.createElement('div');

  el.className = 'card';
  el.innerHTML = `<img src="${data.image}" alt="${data.id}"></div>`;

  return el;
};

export default Card;
