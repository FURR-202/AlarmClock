let dice = document.querySelectorAll(".face");
console.log(dice)
let flip = document.querySelector(".dice");
let AllRedPieces = document.querySelectorAll(".red-piece");
let RedpiecesArray = []; // denoting locked pieces
for(let i =  0;i<AllRedPieces.length;i++){
RedpiecesArray[i]= AllRedPieces[i]
}
let path1 = document.querySelector("#path1");
let path2 = document.querySelector("#path2");
let path3 = document.querySelector("#path3");
let path4 = document.querySelector("#path10");
let path5 = document.querySelector("#path11");
let path6 = document.querySelector("#path12");
let path7 = document.querySelector("#path9");
let path8 = document.querySelector("#path8");
let path9 = document.querySelector("#path7");
let path10 = document.querySelector("#path6");
let path11 = document.querySelector("#path5");
let path12 = document.querySelector("#path4");
let path1_array = Array.from(path1.querySelectorAll(".num"));
let path2_array = Array.from(path2.querySelectorAll(".num"));
let path3_array = Array.from(path3.querySelectorAll(".num"));
let path4_array = Array.from(path4.querySelectorAll(".num"));
let path5_array = Array.from(path5.querySelectorAll(".num"));
let path6_array = Array.from(path6.querySelectorAll(".num"));
let path7_array = Array.from(path7.querySelectorAll(".num"));
let path8_array = Array.from(path8.querySelectorAll(".num"));
let path9_array = Array.from(path9.querySelectorAll(".num"));
let path10_array = Array.from(path10.querySelectorAll(".num"));
let path11_array = Array.from(path11.querySelectorAll(".num"));
let path12_array = Array.from(path12.querySelectorAll(".num"));
let Allpath = [path1_array,path2_array,path3_array,path4_array,path5_array,path6_array,path7_array,path8_array,path9_array,path10_array,path11_array,path12_array];
console.log(Allpath);

// let red_path = document.querySelector(".red-path");
// let piece_num = 0;// which piece number there are 4 pieces 
// let current_piece = "";//current piece
function generate_random(){
    let r = Math.floor(Math.random()*6);
    return r;
}
dice.forEach(ele =>{
    ele.addEventListener("click",()=>{
        let r = generate_random();
        console.log(r);
        ele.style.zIndex = "1";
        dice[r].style.zIndex = "2"; 
        gameplay(r);
        if(active == 0){
        openingPieces(r);};
        // if(dice[r].getAttribute("class") == "face six"){
        //     if(RedpiecesArray.length > 0){
        //     path12.appendChild(AllRedPieces[piece_num]);
        //     red_path.appendChild(AllRedPieces[piece_num]);
        //     RedpiecesArray.pop();
        //     piece_num++;
        //     }
        //     else{console.log("no item found??")}
        //  }
        //  else{

        //  }

    })
})
flip.addEventListener("click",()=>{
    flip.style.transition = "transform 0.2s";
    if(flip.style.transform == "rotateY(360deg)"){flip.style.transform = "rotateY(0deg)"}
    else{flip.style.transform = "rotateY(360deg)"}
})
let active = 0;
let n = 0;
function openingPieces(r){
    let dice_number = r + 1;
    if(dice_number == 6){
        if(RedpiecesArray != []){
            path12_array[1].appendChild(AllRedPieces[n]);
            active = AllRedPieces[n];
            RedpiecesArray.pop();
            if(n<4){
                n++;
            }else{
                n=0;
            }
        }
    }
}
let rb = 1;
let rp = 11;
function gameplay(num){
    num = num +1;
    if(active != 0){
        if(num == 1){
            rb = rb +1;
            if(rb >= 5){
                rb = -5;
                rp = rp - 11;
            }
            if(rb == 0){
                rb = 1;
                rp = rp +1;
            }
        }
        if(num == 2){
            active.style.transition = "2s";
            rb = rb +2;
            if(rb >= 5){
                rb = -5;
                rp = rp - 11;
            }
            if(rb == 0){
                rb = 1;
                rp = rp +1;
            }
        }
        if(num == 3){
            active.style.transition = "2s";
            rb = rb +3;
            if(rb >= 5){
                rb = -5;
                rp = rp - 11;
            }
            if(rb == 0){
                rb = 1;
                rp = rp +1;
            }
        }
        if(num == 4){
            active.style.transition = "2s";
            rb = rb +4;
            if(rb >= 5){
                rb = -5;
                rp = rp - 11;
            }
            if(rb == 0){
                rb = 1;
                rp = rp +1;
            }
        }
        if(num == 5){
            active.style.transition = "2s";
            rb = rb +5;
            if(rb >= 5){
                rb = -5;
                rp = rp - 11;
            }
            else if(rb == 0){
                rb = 1;
                rp = rp +1;
            }
        }
        if(num == 6){
            active.style.transition = "2s";
            rb = rb +6;
            if(rb >= 5){
                rb = -5;
                rp = rp - 11;
            }
            if(rb == 0){
                rb = 1;
                rp = rp +1;
            }
        }
          Allpath[rp][rb].appendChild(active);
    }
    }