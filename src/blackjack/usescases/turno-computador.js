import {pedirCarta,valorCarta,crearCartaHTML} from'./'


/**
 *  turno de la computadora

 * @param {number}puntosMinimos que la computadora necesita para ganar 
 * @param {HTMLBaseElement}Elemento HTML para mostrar los puntos 
 * @param {Array <String>} deck
 * 
 */



export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

    if( !puntosMinimos) throw new Error('Puntos minimos son necesarios');
    if( !puntosHTML) throw new Error('argumento puntoshtml  son necesarios');
    
    let puntosComputadora = 0;
    
    
    do { 
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
       // TODO: crear carta 

        const imgCarta = crearCartaHTML(carta)

        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Naiden Gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('La puerca computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Mi rex Gana');
        } else {
            alert('es enserio Computadora Gana?')
        }
    }, 100 );
}
