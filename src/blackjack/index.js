import _ from 'underscore'

import { crearCarta, crearDeck, pedirCarta, acumularPuntos, turnoComputadora  } from './usecases'

let deck = [];
const tipos  = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];
let puntosJugadores = [];
// Referencias del Html
const btnPedir = document.querySelector('#btnPedir'),
      btnDetener = document.querySelector('#btnDetener'),
      btnNuevo = document.querySelector('#btnNuevo');

const divCartasJugadores = document.querySelectorAll('.divCartas'),
      puntosHTML = document.querySelectorAll('small');

      
const inicializarJuego = (numJugadores = 2) => {
  deck = crearDeck(tipos, especiales); 
  puntosJugadores = [];
  for(let i = 0; i < numJugadores; i++) {
    puntosJugadores.push(0);
  }

  puntosHTML.forEach((elemento) => elemento.innerHTML = 0);
  divCartasJugadores.forEach((element) => element.innerHTML = '');
  btnPedir.disabled = false;
  btnDetener.disabled = false;
}


btnNuevo.addEventListener('click', () => {
  inicializarJuego();
})

// const valor = valorCarta(pedirCarta())
// console.log({valor})
// Eventos
btnPedir.addEventListener('click', () => {
  const carta = pedirCarta(deck);
  const puntosJugador = acumularPuntos(carta, 0, puntosJugadores, puntosHTML);

  crearCarta(carta, 0, divCartasJugadores)

  if(puntosJugador > 21) {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador, deck, puntosJugadores, puntosHTML, divCartasJugadores);
  } else if(puntosJugador === 21) {
    console.warn('21, genial!');
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador, deck, puntosJugadores, puntosHTML, divCartasJugadores)
  }
});

btnDetener.addEventListener('click', () => {
  btnPedir.disabled = true;
  btnDetener.disabled = true;
  turnoComputadora(puntosJugadores[0], deck, puntosJugadores, puntosHTML, divCartasJugadores);
})


