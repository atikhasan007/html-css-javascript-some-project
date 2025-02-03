
// in one  rotation there is 360 deg
// in 12 hour there is 360deg -> 1 hour = 30deg
// in 60 minutes there is 360 deg => 1 mini = 6 deg
// in 60 secs there is 360 deg => 1 sec = 6deg




function clock(){
    let hour = document.querySelector(".hour");
    let minutes = document.querySelector(".minute");
    let second = document.querySelector(".second");

    let date = new Date();
    
   // console.log(date);
   let hr = date.getHours();
   let mint = date.getMinutes();
   let sec = date.getSeconds();
   hour.style.transform = `rotateZ(${hr*30 + mint/12}deg)`;
   minutes.style.transform =`rotateZ(${mint * 6 }deg)`;
   second.style.transform = `rotateZ(${sec*6}deg)`;
   




}


clock();
setInterval(clock, 1000)

