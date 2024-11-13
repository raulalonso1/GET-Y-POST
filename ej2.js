// Parte 2: Añadir tareas con POST
// Crea un formulario en la página que permita al usuario ingresar un Titulo para una
// nueva tarea.
// Al enviar el formulario, los datos deben enviarse a la API mediante una solicitud POST.
// Los datos a enviar serán:
// • Título: El texto ingresado en el formulario.
// • Estado: Siempre debe enviarse como false (es decir, la tarea no está completada
// al principio).
// Después de enviar la tarea, muestra la tarea añadida en la página de forma dinámica.
// URL de la API


formulario.addEventListener("submit", async function (event) {
    event.preventDefault();

    const tareaTitulo = document.getElementById("tarea").value.trim();
    console.log(tareaTitulo)

    if (!tareaTitulo) {
        alert("Por favor, ingrese un título para la tarea.");
        return;
    }

    const nuevaTarea = {
        title: tareaTitulo,
        completed: false
    };
    

    try {
        const respuesta = await fetch(urlAPI, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nuevaTarea)
        });

        // const tareaCreada = await respuesta.json();
        agregarTareaDOM(nuevaTarea);
        formulario.reset();


    } catch (error) {
        console.error("Error al añadir la tarea:", error);
    }
});






