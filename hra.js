import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'circle';
const hraciPole = document.querySelectorAll('button');

const vybratPole = async (evt) => {
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
  const aktualniPole = Array.from(hraciPole).map((button) => {
    if (button.classList.contains('container__game--circle')) {
      return 'o';
    }
    if (button.classList.contains('container__game--cross')) {
      return 'x';
    }
    return '_';
  });

  const vitez = findWinner(aktualniPole);
  if (vitez === 'o') {
    setTimeout(() => {
      alert(`Kolečko je borec`);
      location.reload();
    }, 300);
  } else if (vitez === 'x') {
    setTimeout(() => {
      alert(`X dobře ty! Kolečko se může jít klouzat`);
      location.reload();
    }, 300);
  } else if (vitez === 'tie') {
    setTimeout(() => {
      alert('Smůla, nemáme vítěze, ani pořaženého. Zkus to znova');
      location.reload();
    }, 300);
  }

  const response = await fetch(
    'https://piskvorky.czechitas-podklady.cz/api/suggest-next-move',

    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        board: aktualniPole,
        player: 'x',
      }),
    },
  );

  const data = await response.json();
  const { x, y } = data.position;
  const pole = hraciPole[x + y * 10];
  if (currentPlayer === 'cross') {
    pole.click(response);
  }
};
hraciPole.forEach((button) => {
  button.addEventListener('click', vybratPole);
});

const reset = (event) => {
  if (!confirm('Opravdu chceš začít znovu?')) {
    event.preventDefault();
  }
};
document
  .querySelector('.container__navigation--again')
  .addEventListener('click', reset);
