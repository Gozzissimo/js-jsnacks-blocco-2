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

const randName = Math.floor(Math.random() * (firstNames.length));
const randSur = Math.floor(Math.random() * (lastNames.length));
// console.log(randName);
// console.log(randSur);

const userName = firstNames[randName] + ' ' + lastNames[randSur]
// console.log(userName);



// FUNZIONE
listNames = casualName('Marco',
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
)

listSurnames = casualName('Garibaldi',
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
)


function casualName(listNames, listSurnames) {

    const randName = Math.floor(Math.random() * (listNames.length));
    const randSur = Math.floor(Math.random() * (listSurnames.length));
    console.log(randName);
    console.log(randSur);

    const userName = listNames[randName] + ' ' + listSurnames[randSur]
    console.log(userName);
}