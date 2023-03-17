
/*SERVER PROJECTS 1 2 3 (API FROM IRONHACK)*/

const SERVER_URL_PROJECTS = 'https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects';

/*Sever PROJECTS 4 5 6 (MY JSON API)*/
const SERVER_URL_PROJECTSDOS = 'http://localhost:8000/projects';

window.onload = () => {
    console.log('0NLOAD');


    /*BUTTON HAMBURGER---------------------------*/

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


    /*SELECTORS---------------------------*/

    const h1 = document.querySelector('h1').innerHTML



    /*API---------------------------*/

    /*Funcion 1 obtener el nombre del proyecto de la URL---------------------------*/

    function _getUrlName() {
        const params = new Proxy(new URLSearchParams(window.location.search), {
            get: (searchParams, prop) => searchParams.get(prop),
        })
        console.log(params.name);
        return params.name;
    }

    /*Funcion 2 obtener información de la API y filtrarla para tener el objeto que corresponde con el numbre de la URL---------------------------*/

    /*Se realiza una funcion asincrona para que se ejecute la llamada una vez que se tengan todos los datos de la API. Dado que la función llama a dos APIS diferentes se gestiona de la siguiente forma:
    La función llama al servidor1 (el que se le pasa por parametro para ejecutarla) 
    Si ha encontrado el objeto (porque el nombre esta en la API que ha llamado) se ejecuta la función 'distributeInfo'
    Si no lo ha encontrado sigue con el siguiente paso porque (exist = false) y no retorna nada,
    El siguiente paso es ejecutar la función con el server2 Si encuentra el nombre ejecuta la función 'distributeInfo'
    Si no lo encuentra corta la ejecución (exit = true)*/

    async function fetchProjectsData(url, exit = false) {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        const [projectToShow] = data.filter(object => object.name.toLowerCase() === _getUrlName())
        console.log(projectToShow)

        if (projectToShow) {
            distributeInfo(projectToShow)
            return;
        }

        if (exit) {
            return;
        }

        fetchProjectsData(SERVER_URL_PROJECTSDOS, true)
    }

    /*Funcion 3 se distribuye la información---------------------------*/

    function distributeInfo(objeto) {
        const { name, description, content, image, completed_on } = objeto;

        document.querySelector('h1').innerHTML = name;
        document.querySelector('#description').innerHTML = description;
        document.querySelector('#completeDate').innerHTML = completed_on;
        document.querySelector('#content').innerHTML = content;
        document.querySelector('.simplyImg').src = (image);
        document.querySelector('.simplyImgFilter').src = (image);

    }

    /*Llamada a la función con el server1---------------------------*/

    fetchProjectsData(SERVER_URL_PROJECTS);

}
