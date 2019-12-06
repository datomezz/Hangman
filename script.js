let wordBox = document.querySelector(".wordbox");
let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let underline = document.querySelectorAll(".wordbox__letter");
let miss = 0;
let stick = ["img/hangman_1.png", "img/hangman_2.png", "img/hangman_3.png", "img/hangman_4.png"];
let picture = document.querySelector(".chance__picture");

console.log(stick);

let hideWord = prompt("sheiyvanet saxeli");

hideWord = hideWord.toUpperCase();
hideWord = hideWord.replace(/\s/g, "");

for(let i = 0; i < hideWord.length; i ++){
    underline[i].style.display = "flex";
}

console.log(hideWord.charAt(0));
// for(let i = 0; i < hideWord.length; i++){
//     let newDiv = document.createElement("p");
//     let txt = document.createTextNode("_");
//     newDiv.appendChild(txt);
//     newDiv.className = "wordbox__letter";
//     wordBox.appendChild(newDiv);
// }

for(let i = 0; i < alphabet.length; i++){
    function letter(i){
        checkLose();
        let letter = alphabet[i];
        document.querySelectorAll(".letter")[i].style.backgroundColor = "red";
        for(let c = 0; c < hideWord.length; c++){
            if(letter === hideWord.charAt(c)){
                underline[c].innerText = hideWord.charAt(c);
                miss--;
            }
        }
        miss++;
        pictureChange();
        console.log(miss);
    }
}

function checkLose(){
    if(miss >= 3){
        document.documentElement.style.pointerEvents = "none";
        alert("You Lose !");
        setInterval(function(){
            window.location.href = "https://datomezz.github.io/Hangman/";
           }, 5000);
    
    }
}

function pictureChange(){
    switch (miss){
        case 1 : 
            picture.src = stick[0];
        break;
        case 2 : 
            picture.src = stick[1];
        break;
        case 3 : 
            picture.src = stick[2];
        break;
        case 4 : 
            picture.src = stick[3];
        break;
        default : 
            "nothing";
        break;
    }
}