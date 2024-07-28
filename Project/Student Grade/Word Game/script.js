const inputs = document.querySelector(".inputs");
resetBtn = document.querySelector(".reset-btn");
hint = document.querySelector(".hint span");
guessLeft = document.querySelector(".guess-left span");
wrongLatter = document.querySelector(".wrong-latter span");
typinginput = document.querySelector(".typing-input");


let word, maxGuesses, corrects = [], incorrects = [];

function randomWord(){
    // Getting random object from wordlist
  let ranObj = wordList[Math.floor(Math.random() * wordList.length)];
  word = ranObj.word; //GETTING word from random object
  maxGuesses = 10; corrects = []; incorrects = [];
  // console.log(word);

  hint.innerText = ranObj.hint;
  guessLeft.innerText = maxGuesses;
  wrongLatter.innerText = incorrects

  let html = "";
  for (let i = 0; i < word.length; i++){
    html += `<input type="text" disabled>`;
  }
  inputs.innerHTML = html;


}   
randomWord();

function initGame(e) {
  let key = e.target.value;
  if(key.match(/^[A-Za-z]+$/) && !incorrects.includes(` ${key}`)   && ! corrects.includes(key)){

    // console.log(key);
    if(word.includes(key)) { //if user latter found in the word
      for (let i = 0; i < word.length; i++) {


        //........showing matched letter in the input value........


        if(word[i] === key) {
          corrects.push(key);
          inputs.querySelectorAll("input")[i].value = key;
        }
      }
 
    } else {
      maxGuesses--; //decrement maxGuesses by 1
      incorrects.push(`${key}`);
    }
    guessLeft.innerText = maxGuesses;
    wrongLatter.innerText = incorrects;
  }
  
  typinginput.value = "";

  setTimeout(() => {
    if(corrects.length === word.length) { // if user found all latters
      alert(`Congrats! you found the word ${word.toUpperCase()}`);
      randomWord(); // calling randomword function, so the game re start
    }else if(maxGuesses < 1) {//if user couldn't found all latters
      alert("Game over! you don't have remaining guesses");
      for (let i = 0; i < word.length; i++) {
  
  
        //........show all letter in the input........
  
          inputs.querySelectorAll("input")[i].value = word[i];
        
      }
    }
  });
}
resetBtn.addEventListener("click", randomWord);
typinginput.addEventListener("input", initGame);
inputs.addEventListener("click", () => typinginput.focus());
document.addEventListener("keydown", () => typinginput.focus());