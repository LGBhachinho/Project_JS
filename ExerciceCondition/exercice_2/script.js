let nbre1=parseInt(prompt("donner un nombre "));
let nbre2=parseInt(prompt("donner un autre nombre "));

if (nbre1>nbre2){
    console.log(`le Nombre 1 : ${nbre1} est plus grand que le Nombre 2 : ${nbre2}`);
} else if(nbre1<nbre2){
    console.log(`le Nombre 1 : ${nbre1} est plus petit que le Nombre 2 : ${nbre2}`);
} else{
    console.log(`le Nombre 1 : ${nbre1} et le Nombre 2 : ${nbre2} sont egaux`);
}
