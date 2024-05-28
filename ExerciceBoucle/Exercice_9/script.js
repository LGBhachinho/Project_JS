let nbre = parseInt(prompt("Donnez moi un nombre"));
let pas=0;

// for (let pas = 0; pas <= parseInt(nbre); pas++) {
//     if ( pas % 2 === 1){
//         console.log(pas );
//     }
// }


/// Faire en While

while (pas <= nbre){
    
    if (pas % 2 === 1){
        console.log(pas);
    }
    pas++;
    
    
}