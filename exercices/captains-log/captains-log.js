// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {

  let aleaNum = Math.floor(1000 + Math.random()* (9999 - 1000))

  return "NCC-" + aleaNum;
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {

return Math.floor(41000 + Math.random()* (42000 - 41000));
  
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  const tabLettre = ['D','H','J','K','L','M','N','R','T','Y'];

  let aleatoireNB = Math.floor(0 + Math.random()* (10 - 0));

  return tabLettre[aleatoireNB] ;
}
