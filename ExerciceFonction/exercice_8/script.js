function numberToWord(num){
    let data = ["zero","un","deux","trois","quatre","cinq","six","sept","huit","neuf","dix"];
    for (let i = 0; i <= 10; i++) {
        if(num===i){
            return data[i];
        }
        
    }
}

console.log(numberToWord(2));