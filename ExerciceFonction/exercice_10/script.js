

function premier(nbre){
    
    if(nbre<2){
        return false
    } 
    for (let i = 2; i < nbre; i++) {
        if ( nbre % i === 0 )  {
            return false;
        }; 
    }
    return true;
}   
    

for (let index = 0; index < 100; index++) {
    if (premier(index)){
        console.log(index);
    };
}
