console.log("concetado");
const pi_decimals = "1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109";
const button = document.getElementById("button_start")
const game = document.getElementById("game")
const input_decimals = document.getElementById("input_decimals")
const result_decimals = document.getElementById("result_decimals")
const result_score = document.getElementById("result_score")
const live_qty = document.querySelector(".live_qty")

let posicion = 0
// variable para contar la cantidad de errores
let errors = 0

button.addEventListener("click", function(){
    // game.style.display="block"
    game.classList="game"
})
// funcion alterar valor de vidas
function renderLives(){
    // cada vez que err sea true vamos a disminuir un corazon
    live_qty.textContent=""
    for(let i=0; i < 5 - errors; i++){
        live_qty.textContent +="❤️"
    }
    
}

renderLives()
input_decimals.addEventListener("keyup",function(){
    this.value=""
    this.focus()
})
function getSixCharacter(){
    const numeros = pi_decimals.split("")
    const newNumeros = numeros.filter((num,ind)=> ind <= posicion + 5)
    result_decimals.textContent=  "3." + newNumeros.join("")
}
input_decimals.addEventListener("keydown",function(e){
    if(e.code=="Enter") return
    const decimal = String.fromCharCode(e.keyCode)
    if(decimal==="") return
    if(isNaN(decimal)) return
    console.log(decimal);

    if(decimal==pi_decimals.charAt(posicion)){
        //acerto
        result_decimals.textContent+=decimal
        result_decimals.style.color="green"
        posicion++      
        result_score.textContent=posicion  
    }else{
        //error
        errors++
        result_decimals.style.color="red"
        renderLives()
        if(errors===5){
            input_decimals.disabled=true
            //llamar a 6 numeros para aprender
            getSixCharacter()
        }
        
        
    }
    //volver a negro
    setTimeout(()=>{
        result_decimals.style.color="black"
    },1000)
})