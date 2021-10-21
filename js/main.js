// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero. //

// 1. Chiedi quanti kilometri vuole percorrere

const km = prompt ('Quanti kilometri vuoi percorrere?');
console.log('Km percorsi: ' + km);

// 2. Chiedi l'età del passeggero

const age = prompt ("Qual è l'età del passeggero?");
console.log('Età passeggero: ' + age);

// 3. Definisci il prezzo del biglietto in base ai km da percorrere

const price = km * 0.21;
console.log('Prezzo biglietto per km percorso: ' + price);

// 4. Definisci prezzo finale del biglietto

let finalPrice = price * km;
console.log ('Prezzo finale del biglietto: ' + finalPrice);

// 5. Applica sconto del 20% se l'utente è minorenne 

if (age < 18)  {
    discountPrice = finalPrice - (finalPrice * 20 / 100);
    console.log('Prezzo scontato per minorenni: ' + discountPrice);
}

// 6. Applica sconto del 40% se l'utente è over 65

if (age > 65) {
    discountPrice = finalPrice - (finalPrice * 40 / 100);
    console.log ('Prezzo scontato per utenti over 65: ' + discountPrice);
}

