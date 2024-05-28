let selectLi = document.querySelectorAll('li')

// Ajoute un gestionnaire d'événements de clic à chaque élément <li>
selectLi.forEach(function(li) {
  
  li.addEventListener("click", function () {
    li.classList.toggle('barre');
    
  });
});


