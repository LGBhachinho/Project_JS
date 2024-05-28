
const tableau = [10, 22, 3, 47, 5]
let somme = 0;
let grand = tableau[0];
let petit = tableau[0];


for (let i = 0; i < tableau.length; i++) {
     somme += tableau[i];
     
     if (tableau[i] > grand ){
        grand = tableau[i];
     }else if(tableau[i] < petit){
        petit = tableau[i]; 
     }
 }

let moyenne = somme / tableau.length;
console.log(`La somme des nombres du tableau est ${somme}`);
console.log(`La moyenne des nombres du tableau est ${moyenne}`)
console.log(`Le plus grand nombre du tableau est ${grand}`)
console.log(`Le plus petit nombre du tableau est ${petit}`)

