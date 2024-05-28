function createTag(tagName, content){
    let newElement = document.createElement(tagName)
     newElement.innerText = content
     return newElement
    
}
document.body.appendChild(createTag('div',''))

let selectDiv = document.querySelector('div')

selectDiv.appendChild(createTag('p','Bonjour a tous'))