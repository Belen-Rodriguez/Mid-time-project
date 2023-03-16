
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");


const ul = document.querySelector("nav ul")
const liContact = document.createElement("li");
liContact.innerHTML = "<a id='contactBt' class='p03 removeBtnContact'  href='/contact/indexContact.html'>Contact Us</a>"

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
    ul.appendChild(liContact);
})
cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
    ul.removeChild(liContact)
})
