//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {

// 1 gigasseconde converti en millisecondes
const gigasecond = 1000000000000

let dateFinale = new Date (date.getTime()+ gigasecond)

return dateFinale;


}; 
