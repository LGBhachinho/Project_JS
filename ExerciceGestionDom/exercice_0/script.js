let elementH1 = document.createElement('h1');

elementH1.style.fontSize = '50px';
elementH1.style.color = 'red';
elementH1.innerText = 'coucou';

let selection = document.querySelector('header')
let selectionFooter = document.querySelector('footer')

selection.appendChild(elementH1)
selectionFooter.remove()



