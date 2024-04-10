let currentPlayer = 'circle';

const vybratPole = (evt) => {
  evt.target.disabled = true;
  if (currentPlayer === 'circle') {
    currentPlayer = 'cross';
    evt.target.classList.add('container__game--circle');
    const kdoHraje = document.querySelector('.navigace_ikona');
    kdoHraje.src = 'cross.svg';
  } else {
    currentPlayer = 'circle';
    evt.target.classList.add('container__game--cross');
    const kdoHraje = document.querySelector('.navigace_ikona');
    kdoHraje.src = 'circle.svg';
  }
};

document
  .querySelector('button:nth-child(1)')
  .addEventListener('click', vybratPole);
document
  .querySelector('button:nth-child(2)')
  .addEventListener('click', vybratPole);
document
  .querySelector('button:nth-child(3)')
  .addEventListener('click', vybratPole);
document
  .querySelector('button:nth-child(4)')
  .addEventListener('click', vybratPole);
document
  .querySelector('button:nth-child(5)')
  .addEventListener('click', vybratPole);
document
  .querySelector('button:nth-child(6)')
  .addEventListener('click', vybratPole);
document
  .querySelector('button:nth-child(7)')
  .addEventListener('click', vybratPole);
document
  .querySelector('button:nth-child(8)')
  .addEventListener('click', vybratPole);
document
  .querySelector('button:nth-child(9)')
  .addEventListener('click', vybratPole);
document
  .querySelector('button:nth-child(10)')
  .addEventListener('click', vybratPole);
