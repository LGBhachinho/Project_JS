const tableau1 = [2, 6, 14, 6, 0]
const tableau2 = [6, 8, 7, 8, 10]

function impair(tab){
    let impair = false;
    for (let index = 0; index < tab.length; index++) {
         if (tab[index] % 2 === 1) {
            impair = true;
        };        
    }
    return impair;
}

console.log(impair(tableau2));