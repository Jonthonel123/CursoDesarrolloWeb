/**
 * Reglas de nuestra clase
 * 1) debemos recibir 3 parametros cuando instanciemos esta
 * 2) tendemos 3 estados
 * *status 1 = create
 * *status 2 = done
 * *status 3 = delete
 * 3) tendremos una function para poder renderizar nuestra tarea
 * 4) tendremos una function para actualizar nuestra tarea
 * 5) tendremos una function para eliminar nuestra tarea
 * CRUD => crear - read - update - delete 
 */

//* ESta es la forma como istanciomos la clase Task
// const task = new Task("tarea 1", new Date(),1)

// !Una clase siempre inicia en Mayuscula ejm: Persona
// Para poder usar import de este archivo, tenemos que decir
// que nuestra clase sea exportable, es decir que pueda ser
// usada desde otro archivo

class Task {
    // estos son parametros
    constructor(id,name,date,status){
        this._id=id
        this._name = name,
        this._date = date,
        this._status = status
    }
    static destroyRender(id){
        const element = document.querySelector(`#task-${id}`)
        element.remove()
    }
    static updateRender(id,name){
        const element = document.querySelector(`#task-name-${id}`)
        element.textContent= name
    }

    render(){
        return `<div id="task-${this._id}" class="item__task">
        <input type="checkbox" />
        <h6 id="task-name-${this._id}">${this._name}</h6>
        <button onclick="edit(${this._id})" class="edit"><img src="./img/edit.png" width="15" alt="" /></button>
        <button onclick="destroy(${this._id})"><img src="./img/delete.png" width="15" alt="" /></button>
      </div>`
    }
}

