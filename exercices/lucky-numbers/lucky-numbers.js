// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let somme1 = 0;
  let somme2 = 0;

  for (let i = 0; i < array1.length; i++) {
    somme1 = somme1 * 10 + array1[i];
  }

  for (let x = 0; x < array2.length; x++) {
    somme2 = somme2 * 10 + array2[x];
  }
 
  return somme1 + somme2;
}


/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {

  let a = value.toString().length;
  let b = value.toString();
  let c = true ; 
  let d = 0 ; 

  for (let i = 0 ; i <= a / 2 ; i++)
  {

    if( b[ i ] !== b[ a - 1 - i ] )
    {
      return false;
    }

  }

  return true;
  
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {

  if(input === null || input === undefined || input === '')
  {
    return "Required field";
  }
  else if ( isNaN(Number(input)) && input !== '' || Number(input) < 1 && input !== ''){

    return  "Must be a number besides 0";

  }
  else{
    return '' ;
  }


  
}
