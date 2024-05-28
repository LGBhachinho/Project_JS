let selectButton = document.querySelector('button')
let selectSpan = document.querySelector('span')
let count = 0;
selectSpan.innerText = count

selectButton.addEventListener('click', function() {
   count += 1;
   selectSpan.innerText = count
})

