function modifModel(phrase){
        let phraseArray = phrase.split(" ")
        
        phraseArray.forEach(array => console.log(array.padStart(8,"_").padEnd(12,"_")))

 //equivalent -->  phrase.split(" ").forEach(array => console.log(array.padStart(8,"_").padEnd(12,"_")))
}

const string = "un deux trois quatre cinq six sept huit neuf dix";

modifModel(string)

