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

let hour = 1;
let min = 60;
let sec = 60;
function timer(h,m,s){
    let i = 1;
    setInterval(() => {
        console.log(i);
        i++;
    },1000);
}
timer(hour,min,sec);