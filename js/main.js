let elForm = document.querySelector(".hero__form");
let elInput = document.querySelector(".hero__input");
let elList = document.querySelector(".hero__list");

elForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let elValue = elInput.value;

  let elItem = document.createElement("li");
  elItem.className = "hero__item";

  elItem.innerText = elValue;
  
  elInput.value = "";
  
  setInterval(function() {
    if(elValue == 2){
      elValue--;
      elItem.innerText = elValue;
      elItem.style.animation = "endIt 1s linear";
    } else if(elValue > 1){
      elValue--;
      elItem.innerText = elValue;
    } else{
      elItem.remove();
      clearInterval();
    }
  }, 1000);

  elList.appendChild(elItem);
});

