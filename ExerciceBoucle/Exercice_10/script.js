let mot = prompt("Donnez moi un mot")
let affichage = "";

for (let pas = 0; pas <= mot.length - 1 ; pas++) {
    affichage += (mot[pas]);
    if (pas < mot.length-1){
        affichage +=  "-";
    }
}
console.log(affichage);