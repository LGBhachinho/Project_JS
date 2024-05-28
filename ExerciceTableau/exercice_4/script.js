
let nombres = [];
   
for (let i = 1; i <= 10; i++) {
     nombres.push(i);     
}
console.table(nombres);


//etape 2 Afficher les nombre dasn l ordre

let affichage = "Les dix premiers nombres sont : ";
for (const nombre of nombres) {
    affichage = affichage + nombre + ",";
}
affichage = affichage.substring(0, affichage.length - 1);
console.log(affichage);

//Etape 3 Creer un deuxieme tableau avec les 10 premiers nombres paires

let nombres2 = [];
   
for (let i = 2; i <= 20; i+=2) {
     nombres2.push(i);     
}

//Etape 4 Afficher les nombre dasn l ordre les 10 premiers nombres paires

let affichage2 = "Les dix premiers nombres paires sont : ";
for (const nombre2 of nombres2) {
    affichage2 = affichage2 + nombre2 + ",";
}
affichage2 = affichage2.substring(0, affichage2.length - 1);
console.log(affichage2);



