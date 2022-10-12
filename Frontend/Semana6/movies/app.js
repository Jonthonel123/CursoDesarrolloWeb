import movies from "./data.json" assert {type:"json"}
const container = document.querySelector(".container")
const button = document.querySelector(".buttn")
const buscador = document.getElementById("buscador")


button.onclick = ()=>{
    const texto = buscador.value
    console.log(texto);
    const movieFiltrado= movies.entries.filter((movie)=> movie.title.toLowerCase()===texto.toLowerCase())
    readMovies(movieFiltrado)
}

function readMovies(listaPelicular = movies.entries){
    container.innerHTML=""
    listaPelicular.forEach((movie,index)=>{
        container.innerHTML += 
        `<div class="movie">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg"
          alt=""
        />
        <h4>${movie.title}</h4>
        <p>
          ${movie.description}
        </p>
      </div>`
    })
}
// function buscarPelicula(){
//     // movies.entries.forEach((movie)=>{
//     //     console.log(movie.title);
//     // })
//     const peliculas = movies.entries.forEach((movi)=>movi.title)
//     console.log(peliculas);
// }
// buscarPelicula()
readMovies()