// Parte 1: Obtener y mostrar tareas con GET
// Realiza una solicitud GET para obtener una lista de tareas desde la siguiente API:
// • URL: https://jsonplaceholder.typicode.com/todos
// Los datos obtenidos son una lista de tareas.
// Cada tarea (ene los siguientes campos:
// • Título: El nombre de la tarea.
// • Estado: Si la tarea está completada o no (campo completed).
// Muestra las tareas en la página, indicando su Utulo y si está completada o no.
// Puedes usar una lista para mostrar las tareas.

const urlAPI = "https://jsonplaceholder.typicode.com/todos";
let lista = document.getElementById("lista");


async function solicitarDatos(url) {
    try {
        let respuesta = await fetch(url);
        if (!respuesta.ok) {
            console.log("Error de red")
        } else {
            let datos = await respuesta.json()
            console.log(datos)
            imprimirDatos(datos)
        }
    } catch (error) {
        console.log("Error : ", error)
        lista.textContent = "Error al cargar las tareas.";
    }
}

// Mostraremos usando el fetch las primeras 20
function imprimirDatos(data) {
    if (data) {
        for (let i = 0; i < 20; i++) {
            agregarTareaDOM(data[i]);
        }
    } else {
        console.log("Error al recibir los datos en imprimirDatos");
    }
}


function agregarTareaDOM(tarea) {
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = `Título: ${tarea.title} - Estado: ${tarea.completed ? "Completada" : "No completada"}`;
    lista.appendChild(nuevoElemento);
}

solicitarDatos(urlAPI)





