
const SERVER_URL_PROJECTS = 'https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects';

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

    /*PROJETS---------------------------*/

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

    function fetchProjectsData(url) {
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
    }

    /*Gestion de la PROMISE 2 enlazar cada parte del objeto con el DOM---------------------------*/


    fetchProjectsData(SERVER_URL_PROJECTS)
        .then(project => {
            console.log(project)
            const { uuid, name, description, content, image, completed_on } = project;
                   {
                   uuid,
                   name,
                   description,
                   content,
                   image,
                   completed_on
                   }
        document.querySelector('h1').innerHTML = project.name;
        document.querySelector('#description').innerHTML = project.description;
        document.querySelector('#completeDate').innerHTML = project.completed_on;
        document.querySelector('#content').innerHTML = project.content;
        document.querySelector('.simplyImg').src = (image);
        document.querySelector('.simplyImgFilter').src = (image);

        })
        .catch(err => {
            console.error(err)
        })



        
}
