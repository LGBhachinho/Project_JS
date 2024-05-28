function message(){
    return confirm(`Avez vous les droits pour accéder aux codes nucléaires ? Soyez honnête s\’il vous plait, cela peut être dangereux.`)
}

if (message()){
    alert("1234");
} else{
    alert("vous n’avez pas les droits !!")
}
