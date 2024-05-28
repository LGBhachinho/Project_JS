let mdp = "";

while ( mdp !=="tintin"){
    mdp=prompt("Quel est le mot de passe ");
    if (mdp=="tintin"){
        alert("Acces autorisé")
    }
    else{
        alert("Mot de passe incorrect, essayez à nouveau.")
    }
}
