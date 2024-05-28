let nbre1=prompt("Donner  moi un nombre ",1 );
let nbre2=prompt("Donner un autre nombre ",4 );

//Faire un parseint serait mieux pour les calculs 

console.log(nbre1 + " x " + nbre2 + " = " + nbre1*nbre2);
console.log(nbre1 + " - " + nbre2 + " = " + (nbre1-nbre2));


console.log(`${nbre1} + ${nbre2} = ${parseInt(nbre1)+parseInt(nbre2)}`);
console.log(`${nbre1} / ${nbre2} = ${parseInt(nbre1)/parseInt(nbre2)}`);
console.log(nbre1+" exposant "+nbre2+" = "+nbre1**nbre2);
