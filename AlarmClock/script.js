let stars = document.querySelectorAll("img")
function createStars() {
    for (let i = 0; i < stars.length; i++) {

        // Random position
        stars[i].style.left = Math.random() * window.innerWidth + "px";
        stars[i].style.top = Math.random() * window.innerHeight + "px";

        // Random animation duration & delay
        stars[i].style.animationDuration = (Math.random() * 2 + 2) + "s";    
    }
}
createStars();
let border = document.querySelector("#border");

//making smooth
border.addEventListener("mouseenter",()=>{
    border.style.transform = "scale(1.1)";
    border.style.transition = "transform 0.2s"
})
border.addEventListener("mouseleave",()=>{
    border.style.transform = "scale(1)";
})

const hour = document.querySelector(".hour");
let p_hour = hour.querySelector("p");
const min = document.querySelector(".min");
let p_min = min.querySelector("p");
const sec = document.querySelector(".sec");
let p_sec = sec.querySelector("p");
const setTimerBox = document.querySelector(".setTimerBox");
const container = document.querySelector(".container");
const time_box =  document.querySelector(".time")
const timerElements = container.querySelectorAll("p");
let timers_hour = timerElements[0];
let timers_min = timerElements[2];
let timers_sec = timerElements[4];

let fixedHour = 0;
let fixedmin = 0;
let fixedsec = 0;
function increaseHour(){
    fixedHour += 1
    if(fixedHour >= 99){
        fixedHour = 0;
    }
    p_hour.innerText = String(fixedHour).padStart(2, '0');
}
function increaseMin(){
    fixedmin += 1
    if(fixedmin >= 59){
        fixedmin = 0;
    }
    p_min.innerText = String(fixedmin).padStart(2, '0');

}
function increaseSec(){
    fixedsec +=1
    if(fixedsec >= 59){
        fixedsec = 0;
    }
    p_sec.innerText = String(fixedsec).padStart(2, '0');

}
function decreaseHour(){
    fixedHour -= 1;
    if(fixedHour <= 0){
        fixedHour = 99;
    }
    p_hour.innerText = String(fixedHour).padStart(2, '0');
}
function decreaseMin(){
    fixedmin -= 1;
    if(fixedmin <= 0){
        fixedmin = 59;
    }
    p_min.innerText = String(fixedmin).padStart(2, '0');

}
function decreaseSec(){
    fixedsec -= 1;
    if(fixedsec <= 0){
        fixedsec = 59;
    }
    p_sec.innerText = String(fixedsec).padStart(2, '0');

}
function save(){
    setTimerBox.style.display = "none";
    border.style.display = "block";
    container.style.display = "flex";
    timers_hour.innerText = String(fixedHour).padStart(2, '0');
    timers_min.innerText = String(fixedmin).padStart(2, '0');
    timers_sec.innerText = String(fixedsec).padStart(2, '0');
}
function cancel(){
    fixedHour = 0;
    fixedmin = 0;
    fixedsec = 0;
    setTimerBox.style.display = "none";
    border.style.display = "block";
    container.style.display = "flex";
}
time_box.addEventListener("click",()=>{
    container.style.display = "none";
    border.style.display = "none";
    setTimerBox.style.display = "flex";
})
let isRunning = false;

function start() {
    if(!isRunning) {
        isRunning = true;
        timer(fixedHour, fixedmin, fixedsec);
        fixedHour = 0;
        fixedmin = 0;
        fixedsec = 0;
    }
}

//Timer 
function timer(hour,min,sec) {
    let total_seconds = (hour*3600) + (min*60) + sec;
    if(total_seconds <= 0){
        console.log("Time's up!");
        return;
    }
        timers_hour.innerText = String(hour).padStart(2, '0');
        timers_min.innerText = String(min).padStart(2, '0');
        timers_sec.innerText = String(sec).padStart(2, '0');
    let next_hour = hour;
    let next_min = min;
    let next_sec = sec - 1;
    if(next_sec < 0){
        next_min--;
        next_sec = 59;
    }
    if(next_min < 0){
        next_hour--;
        next_min = 59
    }
        setTimeout(() => {
            timer(next_hour,next_min,next_sec);
        }, 1000);
}
