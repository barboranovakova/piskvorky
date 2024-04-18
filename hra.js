import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'circle';
const hraciPole = document.querySelectorAll('button');

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
    alert('Kolečko je borec!');
    location.reload();
  } else if (vitez === 'x') {
    alert('X dobře ty! Kolečko se může jít klouzat');
    location.reload();
  } else if (vitez === 'tie') {
    alert('Smůla, nemáme vítěze, ani poraženého. Zkuste to znova');
    location.reload();
  }
};
console.log(hraciPole);

const aktualniPole = Array.from(hraciPole).map((button) => {
  if (button.classList.contains('container__game--circle')) {
    return 'o';
  }
  if (button.classList.contains('container__game--cross')) {
    return 'x';
  }
  return '_';
});

console.log(aktualniPole);

const vitez = findWinner(aktualniPole);
if (vitez === 'o') {
  alert('Kolečko je borec!');
  location.reload();
} else if (vitez === 'x') {
  alert('X dobře ty! Kolečko se může jít klouzat');
  location.reload();
} else if (vitez === 'tie') {
  alert('Smůla, nemáme vítěze, ani poraženého. Zkuste to znova');
  location.reload();
}

console.log(vitez);

hraciPole.forEach((button) => {
  button.addEventListener('click', vybratPole);
});
