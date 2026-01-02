//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = ( Nomplanete , NBsec) => {

  //Représente le nombre de jours (tours de 24h) éffectué par la planet concernée en 1 an
  let NBtours = 0;
  let AgePlanete = 0;

  
  switch(Nomplanete){

    case "earth":

      NBtours = 365.25 * 1.0;

      break;

    case "mercury":
      NBtours = 365.25 * 0.2408467;

      break;

    case "venus":

      NBtours = 365.25 * 0.61519726;

      break;

    case "mars":

      NBtours = 365.25 * 1.8808158;

      break;

    case "jupiter":

      NBtours = 365.25 * 11.862615;

      break;

    case "saturn":

      NBtours = 365.25 * 29.447498;

      break;

    case "uranus":

      NBtours = 365.25 * 84.016846;

      break; 

    case "neptune":

      NBtours = 365.25 * 164.79132;

      break;

      default : 
      throw new Error("not a planet");

  }

  AgePlanete = Math.round(((((NBsec/60)/60) / 24) / NBtours)*100)/100;

  return AgePlanete;

};


