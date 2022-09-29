const frutas = []

const fruta = prompt("Feria market, ¿que fruta desea comprar?")

frutas.push(fruta)

while(confirm("Desea comprar otra fruta")){
    const fruta = prompt("Que fruta desea comprar")
    frutas.push(fruta)
}

console.log("Compraste:");
// for(const fruta of frutas){
//     console.log(fruta);
// }((

frutas.forEach(fruta => console.log(fruta))