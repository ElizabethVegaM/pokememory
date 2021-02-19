const Card = (data) => {
  const el = document.createElement('div');

  el.className = 'card';
  el.innerHTML = `<img src="${data.image}" alt="${data.id}"></div>`;

/*   document.querySelectorAll(".card").addEventListener('click', (event) => {
    event.target.contain('active') ? event.target.classList.remove('active') : event.target.classList.add('active');
  });
 */
  return el;
};

export default Card;
