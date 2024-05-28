
let mot = "fdsfsdfqsdfghdghgfjaeiouyhfgh";


// for ( const letter of letters) {

//         for (const voyelle of voyelles) {
            
//             if (letter === voyelle ){
//                nbreVoyelle++
//             }
//         }
    
// }


// console.log(nbreVoyelle)



function nbreVoyelle(mot) {
    let voyelles = ["a", "e", "i", "o", "u", "y"];
    let nbreVoyelle = 0
    let letters = (mot.split(""))

    letters.forEach(letter => {
        voyelles.forEach(voyelle => {
            if (letter === voyelle){ 
                nbreVoyelle++ 
            }
        })
    })
    
console.log(nbreVoyelle)
}

nbreVoyelle(mot)

 


