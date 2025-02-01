let currentPage = 0;
let nextBtn = document.querySelector(".next");
let prevBtn =  document.querySelector(".prev");
let pages = document.querySelectorAll(".page");



nextBtn.addEventListener("click", ()=>{
    if(currentPage===pages.length-1){
        return;
    }
   pages[currentPage].classList.remove("active");
   currentPage+=1;
   pages[currentPage].classList.add("active");


})

prevBtn.addEventListener("click", ()=>{

    if(currentPage ==0  )return;
    pages[currentPage].classList.remove("active");
    currentPage--;
    pages[currentPage].classList.add("active");

})



for(let i = 0; i<pages.length;i++){
    pages[i].addEventListener("click",()=>{
        pages[currentPage].classList.remove("active");
        pages[i].classList.add("active");
        currentPage = i;
    })
}