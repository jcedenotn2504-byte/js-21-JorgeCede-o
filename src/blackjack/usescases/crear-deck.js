import _ from 'underscore';

/**
 * esta funcion crea un nuevo deck
 * @param {Array <string>} tiposDeCarta           ejemplos ['C','D','H','S']
 * @param {Array<string>} tiposEspaciales         ejemplos ['A','J','Q','K']
 * @returns {Array<string>}                               regresa un nuevo deck de cartas 
 */
export const crearDeck = (tiposDeCarta, tiposEspaciales) => {

    if(!tiposDeCarta || tiposDeCarta.length === 0) 
        throw new Error("tipos de carta obigatorio como un arreglo de string ");


     if(!tiposEspaciales || tiposEspaciales.length === 0) 
        throw new Error("tipos de carta obigatorio como un arreglo de string ");
    

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspaciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    
    return deck;
}