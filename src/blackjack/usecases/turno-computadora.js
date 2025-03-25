import { pedirCarta } from "./pedir-cartas";
import { crearCarta } from "./crear-carta";
import { acumularPuntos } from "./acumular-puntos";
import { determinarGanador } from "./determinar-ganador";
/**
 * 
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {Array<String>} deck
 */

// Turno de la Computador
export const turnoComputadora = (puntosMinimos, deck = [], puntosJugadores, puntosHTML, divCartasJugadores) => {
  if( !puntosMinimos ) throw new Error('Puntos minimos son necesarios')

  let puntosComputadora = 0;
  do {
    const carta = pedirCarta(deck);
    puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1, puntosJugadores, puntosHTML);
    crearCarta(carta, puntosJugadores.length - 1, divCartasJugadores);
    if (puntosMinimos > 21) {
      break;
    }
  } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));
  determinarGanador(puntosJugadores);
}
