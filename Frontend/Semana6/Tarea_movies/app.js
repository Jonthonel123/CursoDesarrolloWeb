const api = "https://www.omdbapi.com/?s=avengers&apikey=4b229795&"
const row = document.querySelector(".row")
const boton = document.getElementById("boton")

boton.onclick = async function(){
    const respuesta = await fetch(api)
    const data = await respuesta.json()
    console.log("entro");
    // const cards = data.Search
    console.log(data);
    getMovies(data.Search)
}
async function getMovies(cards){
    row.innerHTML=""
    cards.forEach((movie,index)=>{
        row.innerHTML+=`
        <div class="col"       
        <div class="img">
        <img src="${movie.Poster}" alt="">
        <h2>${movie.Title}</h2>
        <p>${movie.imdbID}</p>
        </div>
        </div>     
        `
    })
}

