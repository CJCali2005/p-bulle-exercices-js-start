//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (n) => {
  if (n <= 0) return [];

  let triangle = [];
  
  // première ligne 
  let b = [1];
  triangle.push([...b]); // on copie la ligne dans le triangle

  for (let ligne = 1; ligne < n; ligne++) {
    let c = new Array(b.length + 1); // nouvelle ligne

    // 1 de la première case
    c[0] = 1;

    // somme 2 par 2 premier tour b.length = 0
    for (let i = 0; i < b.length - 1; i++) {
      c[i + 1] = b[i] + b[i + 1];
    }

    // 1 à la fin
    c[c.length - 1] = 1;

    // ajouter la ligne au triangle
    triangle.push([...c]);

    // préparer b pour la prochaine boucle
    b = c;
  }

  return triangle;
};
