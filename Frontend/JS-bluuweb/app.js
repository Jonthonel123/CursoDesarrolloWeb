// document.addEventListener("DOMContentLoaded",() =>{
//     console.log(document.getElementById("titulo").textContent);

// })

// const h1 = document.getElementById("titulo")
// h1.textContent = "Nuevo text since JS"
// h1.style.backgroundColor= "red"
// h1.style.color="white"

// console.log(document.querySelectorAll(".container .text-danger"));

const lista = document.querySelector("#lista");
const arrayPaises = ["peru", "colombia", "chile"];
const liTemplate = document.querySelector("#liTemplate")

const fragment = document.createDocumentFragment();

const clickPaises = e=>{console.log("me diste click",e.target);}

arrayPaises.forEach((pais)=>{
    const clone =liTemplate.content.firstElementChild.cloneNode(true)
    clone.querySelector("span").textContent = pais

    clone.addEventListener("click", clickPaises)

    fragment.appendChild(clone)
})
lista.appendChild(fragment)

// const clone = liTemplate.content.cloneNode(true)

// clone.querySelector(".text-primary").textContent = "Agrege un texto";

// lista.appendChild(clone)
// arrayPaises.forEach(pais =>{
//     const li = document.createElement("li")
//     li.className="list"
//     const b = document.createElement("b")
//     b.textContent="Pais: "
//     const span = document.createElement("span")
//     span.textContent= pais
//     span.className="text-primary"

//     li.appendChild(b)
//     li.appendChild(span)

//     fragment.appendChild(li)
// })
// lista.appendChild(fragment)

// resumen

// arrayPaises.forEach((pais) => {
//   lista.innerHTML += `<li class="list">
//         <b>Pais: </b>
//         <span class="text-primary>${pais}</span>
//     </li>`;
// });
