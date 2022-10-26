console.log("conect");
// Importar nuestra Task
// import { Task } from "./task.js";
const inpuTask = document.querySelector(".input__task");
const bntCreate = document.querySelector(".btn__create");
const listTask = document.querySelector(".container__list__task");
// const eliminar = document.querySelector(".eliminar")

const url_todoapi = "http://127.0.0.1:4000";

// Vamos a crear un arreglo vacio
let arrayTasks = [];

bntCreate.onclick = function () {
  const taskText = inpuTask.value;
  // console.log("taskText: ", taskText);
  if (taskText === "") {
    alert("debes completar la caja de texto");
    return;
  }
  const task = new Task(arrayTasks.length + 1, taskText, new Date(), 1);

  fetch(url_todoapi + "/task", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  }).then((response) => {
    if (response.ok) {
      fetch(url_todoapi + "/tasks")
        .then((res) => res.json())
        .then((data_json) => {
          console.log(data_json.tasks);
          data_json.tasks.forEach((tarea) => {
            const objTarea = new Task(
              tarea._id,
              tarea._name,
              tarea._date,
              tarea._status
            );
            listTask.innerHTML += objTarea.render();
          });
        });
    }
  });
  // .then((res) => res.json())
  // .then((data) => console.log(data));

  // arrayTasks.push(task)
  // console.log(arrayTasks);
  //   listTask.innerHTML += task.render();
  inpuTask.value = "";
};

function destroy(id) {
  const filterTask = arrayTasks.filter((task) => task._id !== id);
  console.log(filterTask);
  arrayTasks = filterTask;
  Task.destroyRender(id);
}
// edit v1
// function edit(id){
//     const newText = prompt("Ingresa el nuevo nombre de la tarea")
//     console.log(newText);
//     // find solo returna 1 elemento
//     // filter retorna un array
//     const oneTask = arrayTasks.find((task)=>task._id===id)
//     oneTask._name = newText
//     Task.updateRender(id,newText)
// }

// edit v2
function edit(id) {
  const element = document.querySelector(`#task-name-${id}`);
  element.style.display = "none";

  const container = document.createElement("div");
  container.style.display = "flex";
  container.style.gap = "5px";

  const input = document.createElement("input");
  input.id = `task-edit-input-${id}`;
  input.type = "text";
  input.placeholder = "ingresa nuevo texto";

  const button = document.createElement("button");
  button.style.backgroundColor = "#ccc";
  button.textContent = "Save";

  button.onclick = function () {
    if (input.value === "") {
      alert("ingresar un texto");
      return;
    }

    const oneTask = arrayTasks.find((task) => task._id === id);
    oneTask._name = input.value;

    element.textContent = input.value;
    element.style.display = "block";
    container.remove();
  };

  const buttonCancel = document.createElement("button");
  buttonCancel.textContent = "Cancel";
  buttonCancel.style.backgroundColor = "#ccc";

  buttonCancel.onclick = function () {
    container.remove();
    element.style.display = "block";
  };

  container.appendChild(input);
  container.appendChild(button);
  container.appendChild(buttonCancel);
  element.parentNode.insertBefore(container, element.nextSibling);
}
