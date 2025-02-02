

let ClickMe = document.querySelector(".ClickMe");
let body = document.querySelector('body');
let modalBtn = document.querySelector(".modalBtn");

ClickMe.addEventListener("click",()=>{
  body.classList.add('active');

})

modalBtn.addEventListener("click", ()=>{
    body.classList.remove('active');
})

