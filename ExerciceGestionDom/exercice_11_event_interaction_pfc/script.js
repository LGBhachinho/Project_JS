const TableauArrayChoicesCPU = ["Pierre","Feuille","Ciseaux"]

let selectButton = document.querySelectorAll('button')
let selectCiseaux = document.querySelector('.ciseaux')
let selectPierre = document.querySelector('.pierre')
let selectFeuille = document.querySelector('.feuille')
let selectSpan = document.querySelector('span')
let selectClassMessage = document.querySelector('.message')



selectButton.forEach(function(bt) {
   
   bt.addEventListener('click',function(){

      //initialisation des style des boutons 
       for (const button of selectButton) {
         button.style.backgroundColor = ""
       }
      
        

      selectSpan.innerText = ""
      
      choiceRandom = TableauArrayChoicesCPU[Math.floor(Math.random() * TableauArrayChoicesCPU.length)]
      selectSpan.innerText = choiceRandom 
      
      if (choiceRandom === bt.innerText )  {
         selectClassMessage.innerText = 'Egalite recommencer' 
      }else if ((bt.innerText === "Feuille" && choiceRandom === "Pierre") ||
               (bt.innerText === "Pierre" && choiceRandom === "Ciseaux") ||
               (bt.innerText === "Ciseaux" && choiceRandom === "Papier")
               ){
                  selectClassMessage.innerText = 'Bravo vous avez gagné'
      }else{
         selectClassMessage.innerText = 'L ordinateur a gagné'
      
      }
      bt.style.backgroundColor = 'red';
   })
   
})
