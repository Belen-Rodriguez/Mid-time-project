const SERVER_URL_CONTACT = 'http://localhost:8000/contacts';

window.onload = () => {
    console.log('0NLOAD');


/*BUTTON HAMBURGER---------------------------*/

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})
cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

/*JSON SEND CONTACTS------------------------*/

/*Falta hacer validacion
hacer clase que se llame contact con su constructor y metodos*/

/*Clase para funcion 1 (no es necesario hacerla, se hace para practicar, se puede construir el objeto directamente en la funcion 1)*/

class contact {
constructor(name, email, phone, comment){
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.comment = comment;
}
}

/*Funcion 1 que crea un objeto con los datos rellenados por el usuario*/

function _handleSubmitButton(){
    console.log('_handleSubmitButton');
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value;
    const comment = document.querySelector('#comment').value;

    const newContact = new contact(name,email,phone,comment);

    console.log(newContact);
    _saveContactData(newContact);
}

/*Funcion 3 que envía los datos recogidos por la funcion 1 al servidor*/

function _saveContactData(contact){
    fetch(SERVER_URL_CONTACT, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(contact)
})
   .then(response => response.json())
   .then(response => console.log(JSON.stringify(response)))
}

/*Funcion 2 activa la funcion que recoge los datos del usuario al hacer click el Submit*/

function _bindEvents() {
    const submitBtn = document.querySelector('.submitBtn')
    submitBtn.addEventListener('click', _handleSubmitButton)
}
_bindEvents();

}

