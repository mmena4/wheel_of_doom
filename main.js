'use strict'

let random_name= ["Player 1", "Player 4", "Player 3", "Player 4", "Player 5", "Player 6", "Player 7", "Player 8", "Player 9", "Player 10", "Player 11", "Player 12"];


document.querySelector("#button").addEventListener("click", die);

let sacrified= [];

function die() {
  if(random_name.length === 0){
  alert("💀 START AGAIN 💀");
  }
  let randomNumber = Math.round(Math.random()*(random_name.length-1));
  let sacrificio = random_name[randomNumber];
  sacrified.push(random_name.splice(randomNumber, 1));
  document.querySelector("#resultado").innerHTML = sacrificio;
}
