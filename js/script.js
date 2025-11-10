import peliculas from './peliculas.js'

const accion = peliculas.filter(element => element.genre_ids.includes(28));
const thriller = peliculas.filter(element => element.genre_ids.includes(53));
const aventura = peliculas.filter(element => element.genre_ids.includes(12));

const box1 = document.querySelector(".genero");
const box2 = document.querySelectorAll(".genero")[1];
const box3 = document.querySelectorAll(".genero")[2];


function pintarPeliculas(pelis, container){
    container.innerHTML = pelis.map(pelicula => `
        <div class="card">
            <img src="https://image.tmdb.org/t/p/w200${pelicula.poster_path}" alt="${pelicula.title}">
            <p>${pelicula.title}</p>
        </div>
    `).join('');
}

pintarPeliculas(accion, box1);
pintarPeliculas(thriller, box2);
pintarPeliculas(aventura, box3);