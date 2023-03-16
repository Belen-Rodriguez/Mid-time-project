
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

//let btnContact= document.querySelector("#contactBt")
//let lista = document.querySelector(".nav-list")

abrir.addEventListener("click", () => {
   // lista.innerHTML += `<li>${btnContact}</li>`
    nav.classList.add("visible");
})
cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})
