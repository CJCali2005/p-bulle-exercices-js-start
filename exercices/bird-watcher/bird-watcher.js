// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let a = 0;
  let b = Number(birdsPerDay.length);
  
  
  for( let i = 0 ; i <= b - 1 ; i ++){

    a = a + birdsPerDay[i];
  }

  return a;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let a = 0;
  let b = Number(birdsPerDay.length);
  let c = 0;

  if(week > 1){
    c = ( week - 1 ) * 7;
  }else{
    c = 0;
  }
  
  for( let i = c ; i <= c + 7 - 1 ; i ++){

    a = a + birdsPerDay[i];
  }

  return a  ;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  for(let i = 0 ; i <= birdsPerDay.length ; i++){
    if ( i%2 == 0 )
    {
      birdsPerDay[i] = birdsPerDay[i] + 1
    }
  }
}
