// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero. //

// 1. Chiedi quanti kilometri vuole percorrere

const km = parseInt ( prompt ('Quanti kilometri vuoi percorrere?') );


// 2. Chiedi l'età del passeggero

const age = parseInt ( prompt ("Qual è l'età del passeggero?") );


// 3. Definisci il prezzo del biglietto in base ai km da percorrere

const price = km * 0.21;


// 4. Definisci prezzo finale del biglietto

let finalPrice = price * km;


// 5. Applica sconto del 20% se l'utente è minorenne, del 40% se l'utente è over 65

if (age < 18)  {
    finalPrice = finalPrice - (finalPrice * 20 / 100);

} else if (age > 65) {
    finalPrice = finalPrice - (finalPrice * 40 / 100);
}


// 6. Arrotondamento prezzo finale a max due decimali

finalPrice = finalPrice.toFixed(2);

// 7. Mostra output del prezzo finale

document.getElementById('result').innerHTML = 'Il tuo biglietto costa: ' + '€'+ finalPrice;



