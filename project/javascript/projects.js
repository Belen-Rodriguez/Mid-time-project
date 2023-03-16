


    /*Sever PROJECTS 4 5 and 6*/
    const SERVER_URL_PROJECTSDOS = 'http://localhost:8000/projects';

    /*Sever PROJECTS 1 2 and 3*/

const SERVER_URL_PROJECTS = 'https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects';

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
    

    /*PROJETS 1, 2 y 3---------------------------*/

    /*SELECTORES---------------------------*/

    const h1 = document.querySelector('h1').innerHTML
    const h3 = document.querySelector('h3') 

    /*Funcion 1 para obtener el nombre del proyecto de la URL---------------------------*/

    function _getUrlName() {
        const params = new Proxy(new URLSearchParams(window.location.search), {
            get: (searchParams, prop) => searchParams.get(prop),
        })
        console.log(params.name);
        return params.name;
    }



    /*Funcion 2 con PROMISE 1 obtener objeto que quiero según el nombre que sale en la URL---------------------------*/

    /*function fetchProjectsData(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(projects => {
                    console.log(`${projects} hey there`)

                    const [projectToShow] = projects.filter(project => project.name.toLowerCase() === _getUrlName())
                    resolve(projectToShow)
                })
                .catch(err => reject(err))
        })
    }*/

    async function fetchProjectsData(url, exit = false) {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        const [projectToShow] = data.filter(object => object.name.toLowerCase() === _getUrlName())
        console.log (projectToShow)

        if (projectToShow) {
            distributeInfo(projectToShow)
            return;
        }

        if (exit) {
            return;
        }

        fetchProjectsData(SERVER_URL_PROJECTSDOS, true)
    }


    //const objetoProjectos123 = fetchProjectsData(SERVER_URL_PROJECTS);
   // console.log(objetoProjectos123)


    function distributeInfo(objeto){
        const { name, description, content, image, completed_on } = objeto;

        document.querySelector('h1').innerHTML = name;
        document.querySelector('#description').innerHTML = description;
        document.querySelector('#completeDate').innerHTML = completed_on;
        document.querySelector('#content').innerHTML = content;
        document.querySelector('.simplyImg').src = (image);
        document.querySelector('.simplyImgFilter').src = (image);

    }

    fetchProjectsData(SERVER_URL_PROJECTS);

    
   // distributeInfo(objetoProjectosDos)
   // distributeInfo(objetoProjectos456)


    /*Gestion de la PROMISE 2 enlazar cada parte del objeto con el DOM---------------------------*/


    /*fetchProjectsData(SERVER_URL_PROJECTS)
        .then(project => {
            console.log(project)
            const { name, description, content, image, completed_on } = project;

        document.querySelector('h1').innerHTML = name;
        document.querySelector('#description').innerHTML = description;
        document.querySelector('#completeDate').innerHTML = completed_on;
        document.querySelector('#content').innerHTML = content;
        document.querySelector('.simplyImg').src = (image);
        document.querySelector('.simplyImgFilter').src = (image);

        })
        .catch(err => {
            console.error(err)
        })*/



    /*PROJETS 4, 5 y 6---------------------------*/

 /*Funcion 1 para obtener el nombre del proyecto de la URL---------------------------*/



/*Gestion de la PROMISE 2 enlazar cada parte del objeto con el DOM---------------------------*/


/*fetchProjectsData(SERVER_URL_PROJECTS2)
    .then(project => {
        console.log(project)
        const { name, description, content, image, completed_on } = project;

        document.querySelector('h1').innerHTML = name;
        document.querySelector('#description').innerHTML = description;
        document.querySelector('#completeDate').innerHTML = completed_on;
        document.querySelector('#content').innerHTML = content;
        document.querySelector('.simplyImg').src = (image);
        document.querySelector('.simplyImgFilter').src = (image);

    })
    .catch(err => {
        console.error(err)
    })*/
        
}
