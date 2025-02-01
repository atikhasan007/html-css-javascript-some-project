let currentSlide = 0;
let slides = document.querySelectorAll(".slide");
let preBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");

//carousel
const next = () => {
    let nextSlide = (currentSlide+1) % slides.length;
   slides[currentSlide].style.display = "none";
   slides[nextSlide].style.display = "block";
   currentSlide = nextSlide;

}

nextBtn.addEventListener('click', next);
setInterval(next, 3000);



preBtn.addEventListener("click", function(){
    let prevSlide = currentSlide === 0 
    ? slides.length-1
    : currentSlide - 1;

    slides[currentSlide].style.display = "none";
    slides[prevSlide].style.display = "block";
    currentSlide = prevSlide;
})