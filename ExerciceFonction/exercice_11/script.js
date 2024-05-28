

function infosCercle(rayon){
    console.log(`rayon : ${rayon}`);
    console.log(`Diamètre : ${rayon * 2}`);
    console.log(`Périmètre : ${(2 * 3.14 * rayon).toFixed(2)}`);
    console.log(`Aire : ${((rayon * rayon) * Math.PI).toFixed(2)}`);
}   
    
infosCercle(5);

