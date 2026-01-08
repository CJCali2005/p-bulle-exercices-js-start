// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {

  switch(name){

    case "Pure Strawberry Joy":
      
    return 0.5 ;
    break;


    case "Energizer":

    return 1.5 ;
    break;


    case "Green Garden":

    return 1.5 ;
    break;


    case "Tropical Island":
      
    return 3 ;
    break;


    case "All or Nothing":

    return 5 ;
    break;

    default:
      
    return 2.5;
    break;

  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let numberWedges = 0;
  let index = 0 ;
  let countLIME = 0 ;
  
while( numberWedges < wedgesNeeded && index <= limes.length - 1 )
{
  switch(limes[index]){

    
    case "small":

      numberWedges += 6 ;
      countLIME + index;

    break;
    case"medium":

      numberWedges += 8 ;
      countLIME + index ;

    break;
    case "large":

      numberWedges += 10 ;
      countLIME + index ;

    break;
  }
    

    index ++;

}

  return index;

}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {

  let tab = [];
  let a = 0 ;

  for(let i = 0 ; i <= orders.length - 1; i++ )
  {

  
    if( timeLeft <= 0 )
    {
      tab[a] = orders[i];
      a++
    }

    timeLeft = timeLeft-timeToMixJuice(orders[i]);

  } 
  return  tab;

}
