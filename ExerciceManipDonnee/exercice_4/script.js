function DegFar(deg){
     if (typeof deg === "number"){
        return Math.round(deg * (9/5) + 32)
    }
        return "Données en entrée non-correctes."
}

console.log(DegFar(12))
