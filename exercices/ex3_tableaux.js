// Tableau des notes
let notes = [12, 8, 15, 10, 7];

// 1️⃣ Calcul de la moyenne
let somme = 0;
for(let i = 0; i < notes.length; i++) {
    somme += notes[i];
}
let moyenne = somme / notes.length;
console.log("Moyenne : " + moyenne.toFixed(2));

// 2️⃣ Meilleure note
let max = notes[0];
for(let i = 1; i < notes.length; i++) {
    if(notes[i] > max) {
        max = notes[i];
    }
}
console.log("Meilleure note : " + max);

// 3️⃣ Nombre de notes ≥ 10
let count = 0;
for(let i = 0; i < notes.length; i++) {
    if(notes[i] >= 10) {
        count++;
    }
}
console.log("Nombre de notes ≥ 10 : " + count);