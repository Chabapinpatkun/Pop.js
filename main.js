//References to DOM elements
const popcat =document.querySelector("#popcat");
const btn=document.querySelector("#btn");

// tha tow images of the POP CAT
const openMouthImg ="./Photo/freeman1.jpg"
const closeMouthImg="./Photo/freeman2.jpg"

// tne tow Popping sounds
const openMouthSound=new Audio("./sound/sound-open.mp3");
const closeMouthSound=new Audio("./sound/sound-close.mp3");

// Event Handlers (Desktops)
btn.addEventListener("mousedown",openMouth);
btn.addEventListener("mouseup",closeMouth);

// Event Handlers (Touch Screens)
btn.addEventListener("touchstart",function(e){
    e.preventDefault();
    openMouth();
})

btn.addEventListener("touchend",function(e){
    e.preventDefault();
    openMouth();
})

//the functions which will perform the cool stuff
function openMouth(){
    popcat.src=openMouthImg;
    openMouthSound.play();
}

function closeMouth(){
    popcat.src= closeMouthImg
    closeMouthSound.play();
}