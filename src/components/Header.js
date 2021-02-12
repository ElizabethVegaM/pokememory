const Header = () => {
  const el = document.createElement('header');

  el.className = 'header';
  el.innerHTML = '<img src="./img/pokememory-logo.png">';

  return el;
};

export default Header;
