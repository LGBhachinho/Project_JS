/////////////////////////////////////   TEST ////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function() {

    // Charger l'en-tête et le pied de page

    loadHeader();
    loadFooter();
    
 // Fonction pour charger le contenu dans la partie principale de la page

    window.loadContent = function(page) {

        page_html="/html/"+page;

        page_css="/css/"+page;

        fetch(page_html)

            .then(response => response.text())

            .then(data => {

                document.getElementById('main').innerHTML = data;

                loadPageSpecificCSS(page);

            });

    };




    // Fonction pour mettre à jour le titre de la page

function updatePageTitle(pageTitle) {

    document.title = pageTitle;

}

});




// Fonction pour charger l'en-tête

function loadHeader() {

    fetch('header.html')

        .then(response => response.text())

        .then(data => {

            document.getElementById('header').innerHTML = data;

        });

}




// Fonction pour charger le pied de page

function loadFooter() {

    fetch('footer.html')

        .then(response => response.text())

        .then(data => {

            document.getElementById('footer').innerHTML = data;

        });

}




// Fonction pour charger le CSS spécifique à chaque page

function loadPageSpecificCSS(page) {

    

    const cssFile = "/css/"+(page.replace('.html', '.css'));

    const linkElement = document.createElement('link');

    linkElement.rel = 'stylesheet';

    linkElement.href = cssFile;

    document.head.appendChild(linkElement);

    

}