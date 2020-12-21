'use strict'

let aleatorios= ["Estefanie", "Vanessa", "Alvaro", "Sergio", "Jackson", "Giselle", "Jorge A", "Jose Maria", "Rene", "Laura1", "Lorena", "Quim", "Carmen", "Laura2", "Moi", "Gabriel", "Mercedes", "Loredana", "Joan", "Olga", "Giacomo", "Isma", "El Chiri", "Alejandra"];


document.querySelector("#boton").addEventListener("click", muertis);

let sacrificados= [];

function muertis() {
  if(aleatorios.length === 0){
  alert("💀 AHORA  TE  TOCA  A  TI 💀");
  }
  let randomNumber = Math.round(Math.random()*(aleatorios.length-1));
  let sacrificio = aleatorios[randomNumber];
  sacrificados.push(aleatorios.splice(randomNumber, 1));
  document.querySelector("#resultado").innerHTML = sacrificio;
}
