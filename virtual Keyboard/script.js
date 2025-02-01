

let textContainer = document.querySelector(".textContainer");
let enterKey = document.querySelector(".enter");
let spaceKey = document.querySelector(".space");
let deleteKey = document.querySelector(".delete");
let capsLock = document.querySelector(".capsLock");
let allKeys = document.querySelectorAll(".key");
let isCaps = false;





enterKey.addEventListener('click', ()=>{
    let content = textContainer.innerText;
    let newContent  = content+'\n';
    textContainer.innerText = newContent;

    

})



spaceKey.addEventListener('click', ()=>{
    let content = textContainer.innerText;
    let newContent  = content+'\u00A0';
    textContainer.innerText = newContent;

    

})


deleteKey.addEventListener("click",()=>{
    let content = textContainer.innerText;
    let newContent = content.slice(0, content.length-1);
    textContainer.innerText = newContent;
    

})



capsLock.addEventListener("click",()=>{

    isCaps=!isCaps;
   if(isCaps){
   
    capsLock.classList.add("active");
      for(let key of allKeys){
           if(key.classList.length > 1){
            //do nothing ;
        
           }else{
              key.innerText = key.innerText.toUpperCase();
           }
      }

   }else{
    capsLock.classList.remove("active");
    for ( let key of allKeys){
        if(key.classList.length> 1){

        }else{
            key.innerText = key.innerText.toLowerCase();
        }
    }

   }
 
})




for(let key of allKeys){
    if(key.classList.length> 1){

    }else{
        key.addEventListener('click', ()=>{
            textContainer.innerText +=key.innerText;
        })
    }
}
