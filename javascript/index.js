
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

let btnContact = document.querySelector("#contactBt")

abrir.addEventListener("click", () => {
    nav.innerHTML += btnContact;
    nav.classList.add("visible");
})
cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})
