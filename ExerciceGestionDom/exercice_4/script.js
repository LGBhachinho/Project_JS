const couleurs = ['red','blue','pink','black','yellow','orange'];

let max = couleurs.length - 1
let min = 0

function rand(min,max){
    return Math.floor((Math.random() * (max - min + 1)) + min)   
}

let button = document.querySelector('button')

button.addEventListener('click', function()  {
    document.body.style.backgroundColor = couleurs[rand(min,max)] ;
})


