let wordBox = document.querySelector(".wordbox");
let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let underline = document.querySelectorAll(".chance__block");

let arr = new Array();

let hideWord = prompt("sheiyvanet saxeli");

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
        let letter = alphabet[i];
        console.log("aso - ", letter);
        for(let c = 0; c < hideWord.length; c++){
            if(letter === hideWord.charAt(c)){
                arr.push(hideWord.charAt(c));
                console.log(arr[0], " - YLEO");
                underline[c].innerText = arr[c];
            }
        }
    }
}
