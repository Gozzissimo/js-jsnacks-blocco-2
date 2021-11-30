// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.

const firstNames = [
    'Marco',
    'Giovanni',
    'Mariangelo',
    'Luca',
    'Graziello',
    'Concetta',
    'Vito',
    'Barnaba',
    'Carlo',
    'Agamennone',
    'Giangiacomo'
]

const lastNames = [
    'Garibaldi',
    'Garasau',
    'Rossi',
    'Berlusconi',
    'Berlinguer',
    'Kennedy',
    'Catone',
    'Baraldi',
    'Barbarossa',
    'Russo',
    'Shevchenko'
]

let randName = Math.floor(Math.random() * (firstNames.length) + 1);
let randSur = Math.floor(Math.random() * (lastNames.length) + 1);

console.log(randName);
console.log(randSur);

