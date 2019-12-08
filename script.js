let wordBox = document.querySelector(".wordbox");
let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let underline = document.querySelectorAll(".wordbox__letter");
let stick = ["img/hangman_1.png", "img/hangman_2.png", "img/hangman_3.png", "img/hangman_4.png"];
let picture = document.querySelector(".chance__picture");
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let miss = 0;

let hideWord = prompt("sheiyvanet saxeli");

while(hideWord === ""){
    hideWord = prompt("saxelshi araferia sheyvanili");
}

hideWord = hideWord.toUpperCase();
hideWord = hideWord.replace(/\s/g, "");

for(let i = 0; i < numbers.length; i++){
    var regex = new RegExp(numbers[i], 'g');
    hideWord = hideWord.replace(regex, "");
}

for(let i = 0; i < hideWord.length; i ++){
    underline[i].style.display = "flex";
}

for(let i = 0; i < hideWord.length; i++){
    let newDiv = document.createElement("p");
    let txt = document.createTextNode("_");
    newDiv.appendChild(txt);
    newDiv.className = "wordbox__letter";
    wordBox.appendChild(newDiv);
}

for(let i = 0; i < alphabet.length; i++){
    function letter(i){
        checkLose();

        let letter = alphabet[i];
        document.querySelectorAll(".letter")[i].style.backgroundColor = "red";
        document.querySelectorAll(".letter")[i].style.color = "#fff";
        for(let c = 0; c < hideWord.length; c++){
            if(letter === hideWord.charAt(c)){
                underline[c].innerText = hideWord.charAt(c);
                document.querySelectorAll(".letter")[i].style.backgroundColor = "#59e93c";
                document.querySelectorAll(".letter")[i].style.color = "#000";
                miss--;
            }
        }
        miss++;
        checkWin();
        pictureChange();
        console.log(miss);
    }
}

function checkLose(){
    if(miss > 3){
        document.documentElement.style.pointerEvents = "none";
        alert("You Lose !");
        setInterval(function(){
            window.location.href = "https://datomezz.github.io/Hangman/";
           }, 5000);
    
        }
}

function checkWin(){
    let wordCheck = new String();
    for(let i = 0; i < hideWord.length; i++){
        wordCheck += underline[i].innerText;
    }
    if(wordCheck === hideWord){
        document.documentElement.style.pointerEvents = "none";
        alert("You Win !");
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