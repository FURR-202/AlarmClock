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
border.addEventListener("mouseenter",()=>{
    border.style.transform = "scale(1.1)";
    border.style.transition = "transform 0.2s"
})
border.addEventListener("mouseleave",()=>{
    border.style.transform = "scale(1)";
})


//Timer 
// function timer(hour,min,sec) {
//     let total_seconds = (hour*3600) + (min*60) + sec;
//     if(total_seconds <= 0){
//         console.log("Time's up!");
//         return;
//     }
//     console.log(hour,min,sec)
//     let next_hour = hour;
//     let next_min = min;
//     let next_sec = sec - 1;
//     if(next_sec < 0){
//         next_min--;
//         next_sec = 59;
//     }
//     if(next_min < 0){
//         next_hour--;
//         next_min = 59
//     }
//         setTimeout(() => {
//             timer(next_hour,next_min,next_sec);
//         }, 1000);
    
// }
// timer(1,59,0);