const url = "https://rickandmortyapi.com/api/character"
const card = document.getElementById("card-dinamicas")
const templateCard = document.getElementById("template-card").content
const fragment = document.createDocumentFragment()

document.addEventListener("DOMContentLoaded",()=>{
    fetchData()
})

const fetchData = async()=>{
    // console.log("obtenniendo datos");
    try {
        loadingData(true)
        const res = await fetch(url)
        const data = await res.json()
       pintarCard(data)



    } catch (error) {
        console.log(error);
    } finally{
        loadingData(false)
    }
}
const pintarCard = (data) =>{
    console.log(data);
    data.results.forEach(item => {
        // console.log(item);
        const clone = templateCard.cloneNode(true)
        clone.querySelector("h5").textContent = item.name
        clone.querySelector("p").textContent = item.species
        clone.querySelector(".card-img-top").setAttribute("src",item.image)
        
        // para enviar el reflow
        fragment.appendChild(clone)
    })
    card.appendChild(fragment)
}

const loadingData = estado => {
    const loading = document.getElementById("loading")
    if(estado){
        loading.classList.remove("d-none")
    } else{
        loading.classList.add("d-none")
    }
}