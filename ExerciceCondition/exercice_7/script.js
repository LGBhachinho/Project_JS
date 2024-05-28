let annee=parseInt(prompt("Quel est l'année ? "));

// if((annee%4===0)&&(annee%100!==0)&&(annee%400!==0)){
//     console.log("Annee Bissextile");
// } else {
//     console.log("Annee non Bissextile");
// }

//Mode ternaire

(annee%4===0)&&(annee%100!==0)&&(annee%400!==0) ? console.log("Annee Bissextile") : console.log("Annee non Bissextile");




