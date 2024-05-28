function addition(a, b){
    return parseInt(a) + parseInt(b);  
}

function soustraction(a, b){
        return  parseInt(a) - parseInt(b);
}

function multiplication(a, b){
        return  parseInt(a) * parseInt(b);
}

function division(a, b){
    return  parseInt(a) / parseInt(b); 
}


function calcul(typeCalcul,a,b){ 
    if ((typeof a === "number") && (typeof b === "number")){
        if (typeCalcul === "addition"){
            return addition(a,b)
        }else if (typeCalcul === "soustraction"){
            return soustraction(a,b)
        }else if (typeCalcul === "multiplication"){
            return multiplication(a,b)
        }else if (typeCalcul === "division"){
            return division(a,b)
        }
    } 
    return "c pas bon";
}

let a=12;
let b=2;
let typeCalcul="division";

console.log(calcul(typeCalcul,a,b));
