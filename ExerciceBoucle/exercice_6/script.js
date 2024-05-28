let reponse;
let nbre = 58;
let nbreEssai = 0;
let limitEssai = 5;
let limitEssaiTotal = limitEssai;
while ((reponse !== nbre) && (limitEssai !== 0)){
    reponse = parseInt(prompt("Trouver le nombre magic"));
    nbreEssai += 1;
    limitEssai -= 1;
    if (reponse < nbre && (limitEssai >= 1 )){
        
        alert("Trop petit, " + "il vous reste " + limitEssai + " Essai" );
        
    }
    
    else if ((reponse > nbre) && (limitEssai >= 1)){
        
        alert("Trop grand, " + "il vous reste " + limitEssai + " Essai" );
    }    
}

if (limitEssai > 0){
    alert("Bravo vous avez reussi en "+ nbreEssai + " coup");
}
else {
    alert("Perdu vous n'avez pas reussi en "+ limitEssaiTotal + " coup");
}

