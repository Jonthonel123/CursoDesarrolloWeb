const carrito = document.querySelector("#carrito")
const template = document.querySelector("#template")
const footer = document.querySelector("#footer")
const fragment = document.createDocumentFragment()
const templateFooter = document.querySelector("#templateFooter")
// const bntnesBotones = document.querySelectorAll(".card .btn")

document.addEventListener("click", e =>{
    // console.log(e.target.matches(".card .btn-outline-primary"))
    if(e.target.matches(".card .btn-outline-primary")){
        console.log("agregar al carro");
        agregarAlCarrito(e)
    };
    // console.log(e.target.matches(".card .btn-outline-primary"));
    if(e.target.matches(".list-group-item .btn-success")){
        btnAumentar(e)
    }
    if(e.target.matches(".list-group-item .btn-danger")){
        btnQuitar(e)
    }
})

let carritoObjeto = []
const agregarAlCarrito= (e)=>{
    // console.log(e.target.dataset.fruta);
    const producto = {
        titulo : e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
        precio: parseInt(e.target.dataset.precio)
    }

    const indice = carritoObjeto.findIndex((item)=>item.id===producto.id)
    // console.log(indice);

    if(indice === -1){
        carritoObjeto.push(producto)
    } else{
        carritoObjeto[indice].cantidad ++
        // carritoObjeto[indice].precio = carritoObjeto[indice].cantidad * producto.precio
    }
    console.log(carritoObjeto);

    pintarCarrito()
}
const pintarCarrito = ()=>{
    carrito.textContent=""
    carritoObjeto.forEach(item => {
    const clone = template.content.cloneNode(true)
    clone.querySelector(".lead").textContent= item.titulo
    clone.querySelector(".badge").textContent =item.cantidad
    clone.querySelector("div .lead span").textContent = item.precio * item.cantidad
    clone.querySelector(".btn-danger").dataset.id= item.id
    clone.querySelector(".btn-success").dataset.id= item.id

    fragment.appendChild(clone)
   })
   carrito.appendChild(fragment)
   pintarFooter()
}
const btnAumentar = (e) =>{
    console.log("me diste click", e.target.dataset.id);
    carritoObjeto = carritoObjeto.map((item) =>{
        if(item.id === e.target.dataset.id){
            item.cantidad++
        }
        return item
    })
    pintarCarrito()
}
const btnQuitar = (e) =>{
    console.log("me diste click", e.target.dataset.id);
    carritoObjeto = carritoObjeto.filter((item) =>{
        if(item.id === e.target.dataset.id){
           if(item.cantidad>0){
            item.cantidad--
            if(item.cantidad ===0) {
                return
            }
           }
           return item
        } else{
            return item
        }
    })
    pintarCarrito()
}
const pintarFooter = ()=>{
    console.log("pintar footer");
    footer.textContent= ""

    const total = carritoObjeto.reduce((acc,current)=>
    acc + current.cantidad * current.precio,0
    )

    const clone = templateFooter.content.cloneNode(true)
    clone.querySelector("span").textContent=total

    footer.appendChild(clone)

}

