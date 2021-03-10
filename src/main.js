import App from './components/App.js';

document.getElementById('root').appendChild(App());

const cards = document.querySelectorAll('.card')

cards.forEach(element => {
  element.addEventListener('click', (event) => {
    const target = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    target.classList.contains('active') ? target.classList.remove('active') : target.classList.add('active');
  })
});
