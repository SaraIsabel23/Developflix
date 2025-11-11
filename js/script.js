/*import peliculas from './peliculas.js'
//LO QUE YO HE HECHO
/*const accion = peliculas.filter(element => element.genre_ids.includes(28));
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
        </div>X
    `).join('');
}

pintarPeliculas(accion, box1);
pintarPeliculas(thriller, box2);
pintarPeliculas(aventura, box3);*/
//////////////////////////////////////////////////////////////////////////////////////////////////////
//LO QUE DATA HA HECHO
// capturar los sitios donde pondremos las películas OK
// filtrar las películas por genero OK
// poner las películas en su sitio dentro del DOM

// filter, map, getElementById, literal template (createrElement, appendChild..), cambiar los divs por ul... -> li
// accion 28, thriller 53, aventura 12

import peliculas from './peliculas.js'

const accion   = document.getElementById("genero-28")
const thriller = document.getElementById("genero-53")
const aventura = document.getElementById("genero-12")


function pelisGenero (generoid, genero) {
  const pelisFiltradas = peliculas.filter(peli => peli.genre_ids.includes(generoid))
  const mostrarPelis = pelisFiltradas.map(peli => {
    const urlBase = "https://image.tmdb.org/t/p/w500"
    const template = `
    <div class="card">
    <img src="${urlBase}${peli.poster_path}" alt=${peli.title} />
    <h3>${peli.title}<h3>
  </div>
  `
  return template
}).join("")
  genero.innerHTML = mostrarPelis
}

pelisGenero(28, accion)
pelisGenero(53, thriller)
pelisGenero(12, aventura)


//peliculas tiene el array completo de todas las pel´culas. tengo que saber cual es el género de cada una de las pelis. 28 era accion

/*const peliculasfiltradasaventura = []
const peliculasfiltradasthriller = []

for(let i = 0; i < peliculas.length; i++) {
  if(peliculas[i].genre_ids.includes(12)) {
    peliculasfiltradasaventura.push(peliculas[i])
  }
}

for(let i = 0; i < peliculas.length; i++) {
  if(peliculas[i].genre_ids.includes(53)) {
    peliculasfiltradasthriller.push(peliculas[i])
  }
}

console.log(peliculasfiltradasaventura)
console.log(peliculasfiltradasthriller)


// const pelisAventura = []

// for(let i = 0; i < peliculas.length; i++) {
//   if(peliculas[i].genre_ids.includes(12)) {
//     pelisAventura.push(peliculas[i])
//   }
// }

// console.log(pelisAventura)

// const pelisAventuraFiltradas = peliculas.filter(peli => peli.genre_ids.includes(12))
// const pelisThriller = peliculas.filter(peli => peli.genre_ids.includes(53))
// const pelisAccion = peliculas.filter(peli => peli.genre_ids.includes(28))

// const pelisAventura = pelisAventuraFiltradas.map(peli => {
//   const urlBase = "https://image.tmdb.org/t/p/w500"
//   const template = `
//   <div class="card">
//     <img src="${urlBase}${peli.poster_path}" alt=${peli.title} />
//     <h3>${peli.title}<h3>
//   </div>
//   `
//   return template
// }).join("")


// aventura.innerHTML = pelisAventura*/