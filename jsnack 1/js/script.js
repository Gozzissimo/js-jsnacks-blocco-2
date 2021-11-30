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

let randName = Math.floor(Math.random() * (firstNames.length));
let randSur = Math.floor(Math.random() * (lastNames.length));

// console.log(randName);
// console.log(randSur);

let userName = firstNames[randName] + ' ' + lastNames[randSur]

// console.log(userName);