function playBeep() {
   // Créer un contexte audio
   const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
   
   // Créer un oscillateur
   const oscillator = audioCtx.createOscillator();
   
   // Créer un gain node (contrôle de volume)
   const gainNode = audioCtx.createGain();
   
   // Connecter l'oscillateur au gain node et le gain node à la destination (haut-parleurs)
   oscillator.connect(gainNode);
   gainNode.connect(audioCtx.destination);
   
   // Configurer l'oscillateur
   oscillator.type = 'sine'; // Type d'onde sonore
   oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // Fréquence en Hz (440 Hz = La4)
   
   // Configurer le gain (volume)
   gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime); // Volume initial
   gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.5); // Diminuer le volume
   
   // Démarrer et arrêter l'oscillateur
   oscillator.start();
   oscillator.stop(audioCtx.currentTime + 0.5); // Arrêter après 0.5 secondes
}





alphabetArray = [' ','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

let elementTd = document.querySelector('tr');

//Fonction de creation d element Html

function createTag(tagName, content){
   let newElement = document.createElement(tagName)
    newElement.innerText = content
    return newElement
   
}

//Boucle pour une case par lettre 
for (const alphabetLetter of alphabetArray) {
   elementTd.appendChild(createTag('td',alphabetLetter))
}

//Selection td de l element d un tableau
let selectTd = document.querySelectorAll('td')
console.log(selectTd)
// Verification de l evenement appuie touche
document.body.addEventListener('keydown',function(event){
   console.log(event.key)
// Boucle sur tous les elements td pour traiter si l appuie de la touche correspond 
   for (const selectTdUniq of selectTd) {
      
      if (event.key === selectTdUniq.innerHTML) {
         selectTdUniq.classList.toggle("colorRed")
         
         playBeep();
   }
   }
})



// console.log(window.getComputedStyle(selectA).color === "rgb(0, 0, 0)");

