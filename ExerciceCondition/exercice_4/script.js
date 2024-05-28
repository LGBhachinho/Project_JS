
let userMDP=prompt("Quel est votre mot de passe ? ");

if ((userMDP.length>=5) && (userMDP.length<=12)){
    console.log(`mot de passe valide`);
}else {
    console.log(`mot de passe invalide`);
}


