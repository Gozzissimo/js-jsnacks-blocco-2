// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

let numbers = [];

for (let i = 0; i < 10; i++) {
    
    numbers.push(Math.floor(Math.random() * 101));
}

console.log(numbers);

let sum = 0

for (let i = 0; i < numbers.length; i += 2) {
    sum += numbers[i];
}

console.log(sum);

// FUNZIONE
function sumOfOddIndex(array) {
    let sum = 0

    for (let i = 0; i < array.length; i += 2) {
        sum += array[i];
    }

    return sum
}
