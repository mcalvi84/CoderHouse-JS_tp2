//evento listener del boton jugar

let btn = document.querySelector("#btn-play");
btn.addEventListener("click", jugar); // llamamos a la funcion jugar

//declaro el arreglo de opciones - que prefije
let opciones = ["piedra", "papel", "tijera"];

function jugar() {
  let random = Math.floor(Math.random() * opciones.length);
  let opcion = opciones[random];
  //mando el resultado al HTML
  document.querySelector("#result").innerHTML = opcion;
}
