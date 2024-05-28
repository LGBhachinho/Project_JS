let selectInput = document.querySelector('input')

selectInput.addEventListener("input", function (event) {
    // permet d'empêcher le comportement par défaut de l'événement
    
  
    // permet de récupérer l'élément sur lequel l'événement a été déclenché
    const input = event.target.value;
    
    
    if (input >= 50 && input <= 100 ){ 
        selectInput.style.backgroundColor = 'green'

    }else{
        selectInput.style.backgroundColor = 'red'
    }
  });


