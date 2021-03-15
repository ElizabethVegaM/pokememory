const checkTurns = (card) => {
    const target = card.currentTarget;
    card.stopPropagation();
    card.preventDefault();
    target.classList.contains('active') ? target.classList.remove('active') : target.classList.add('active');
};

export default checkTurns;
