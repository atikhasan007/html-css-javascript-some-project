


let  isClick = false;
let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", ()=>{
    if(isClick){
        hamburger.classList.remove("active");

    }else{
        hamburger.classList.add("active");
        isClick = !isClick;

    }
})
