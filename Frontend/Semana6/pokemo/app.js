const btnPokemons = document.querySelector("#get-pokemon")
const urlPokemons = "https://pokeapi.co/api/v2/pokemon"
const row=document.querySelector(".row")

btnPokemons.onclick = async function(){


    const respuesta = await fetch(urlPokemons)
    // ahora vamos a crear una variable que guarde la 
    // informacion que el servidor responde
    // lo parsea de JSON => objeto
    // Siempre debemos convertir nuestras peticiones a
    // objetopara qie JS lo pueda entender
    const data = await respuesta.json()
    readPokemon(data.results);
    // Reto1: Con la informacion que tenemos en data.results hagan una galeria
  // de pokemones parecida a la de peliculas
    
}
function readPokemon(pokemones){
    row.innerHTML=""
    pokemones.forEach((poke,ind)=>{
        row.innerHTML+=`<div class="card" style="width:18rem;">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ind + 1}.svg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${poke.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted ">Card subtitle</h6>
          <p class="card-text">${poke.url}</p>
          b5
        </div>
      </div>`
    })
}