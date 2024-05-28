
let note=prompt("Quel est votre note ? ");
let mention;



if (note===20){
    mention=`Extraordianire`;
}
else if (note>=18){
    mention=`Exellent`;
}
else if (note>=16){
    mention=`Tres bien`;
}
else if (note>=14){
    mention=`Bien`;
}
else if (note>=12){
    mention=`Passable`;
}
else{
    console.log(`Pas de mention`);
}



console.log(mention);

