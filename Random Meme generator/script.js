

let img = document.querySelector("img");
console.log(img);

 async function randomMemeGenerator (){

    let res = await fetch(' https://meme-api.com/gimme');
    let json = await res.json();
    let url = json.url;
    console.log(url);
    img.src = url;
    
    
}

randomMemeGenerator();
let timer = setInterval(randomMemeGenerator, 2000);


img.addEventListener('mouseover', ()=>{
    clearInterval(timer);
})


img.addEventListener("mouseleave", () => {

        timer = setInterval(randomMemeGenerator, 2000);
    
});

