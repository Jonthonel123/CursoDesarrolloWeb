const users = [
    {id:1,name:"jont",age:18},
    {id:2,name:"jonto",age:13},
    {id:3,name:"jonthonel",age:19}
]


// copiar y recorrer
const nuevoArray= users.map((user)=>{
    return user
})

console.log(nuevoArray);

// filer, para filtrar y ocultar o eliminar

const userFiltrado = users.filter((user)=>user.id !== 2)
console.log(userFiltrado);

// find sirve para buscar elementos

const jonto = users.find((user)=>user.id === 2)
console.log(jonto);

// some comprueba si un elmento existe o no

const existe = users.some((user)=> user.id === 2)
console.log(existe);

const indice = users.findIndex((user)=>user.id === 4)
console.log(indice);

// slice devuelve una copiade un parte del array dentro de unp
// nuevo empezando por inicio hasta fin. El array original 
// no se modificara

const arr =[ "cat","dog","tiger","zebra"]

const arrayNew = arr.slice(1,3)
console.log(arrayNew);

// concat se usa para unir dos o mas array, Este metodo
// no cambia los arrays existentes, si no que devuelve
// un array nuevo

const array1 = ["a","b","c","d"]
const array2 = ["e","f","g"]

const array3 = array1.concat(array2)
console.log(array3);

// sprit operator, nueva forma de concatenar

const array4= [...array1,...array2]
console.log(array4);

// reduce ejecuta una funcion reductora sobre cada elemento
// de un array, devolviendo como resultado un unico valor

const numeros = [1,2,3,4,5]

const sumarTodos = numeros.reduce((acc,valorActual)=> acc + valorActual)

console.log(sumarTodos);

const cadenaMeses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

//split lo pasa a un array
const arrayMeses = cadenaMeses.split(",")
console.log(arrayMeses);

//
const nuevoTexto = arrayMeses.join("-")
console.log(nuevoTexto);

