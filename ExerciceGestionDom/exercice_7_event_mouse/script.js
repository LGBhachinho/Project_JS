let selectImg = document.querySelector('img')

selectImg.addEventListener("mouseover", function () {
    selectImg.style.filter = 'blur(5px)'
      
  });
  selectImg.addEventListener("mouseout", function () {
    selectImg.style.filter = 'blur(0px)'
      
  });
