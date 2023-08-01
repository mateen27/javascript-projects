let wordInput = document.querySelector("#word-input")
let currentWord = document.querySelector("#current-word")
let scoreDisplay = document.querySelector("#score")
let timeDisplay = document.querySelector("#time")
let message = document.querySelector("#message")

let score = 0
let time = 5

// Array of Words
const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'defintion'
    ];

//call the main Method when page refresh
window.addEventListener("DOMContentLoaded" , init)

//main method
function init(){
    //calling randomWord generator Method
    showWord(words);
    //calling the startMatch Method
    wordInput.addEventListener("input" , startMatch)
    setInterval(countDown , 1000)
    setInterval(checkStatus , 50)
}

//for generating random word
function showWord(words){
    const randomWord = Math.floor(Math.random()*words.length);
    currentWord.innerHTML = words[randomWord];
}

function startMatch(){
    if(matchWords()){
        //display a new word if matchWords method is true
        showWord(words);
        //this will empty the textField
        wordInput.value = '';
        //will display message if words are matched!
        message.innerHTML = "Correct!!";
        score++;
        time = 6;
    }else{
        //will display message if words are not matched!
        message.innerHTML = "InCorrect!!";
    }
    scoreDisplay.innerHTML = score;
}

//method to match the words[inside the textField and the currentWord]
function matchWords(){
    if(currentWord.innerHTML === wordInput.value){
        return true;
    }else{
        return false;
    }
}

function countDown(){
    if(time>0){
        time--
        timeDisplay.innerHTML = time;
    }
}

function checkStatus(){
    if(time === 0){
        message.innerHTML = 'GAME OVER!!'
        wordInput.disabled = true
    }
}