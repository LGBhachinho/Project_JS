let selectForm = document.querySelector('form')

selectForm.addEventListener("submit", function (event) {
    // permet d'empêcher le comportement par défaut de l'événement
    event.preventDefault();
  
    // permet de récupérer l'élément sur lequel l'événement a été déclenché
    const form = event.currentTarget;
    
    
    
    // permet de récupérer les données du formulaire
    const data = new FormData(form);
  
    // permet de récupérer la valeur de l'input firstname
    const name = data.get("name");
  
    // permet d'afficher la valeur de l'input name au moment du submit
    if (name.length< 5){
        alert('Pas bon recommence')
    } else{

        // envoyer le formulaire
        form.submit()
        alert('Super C est fait')
    }   
  });
