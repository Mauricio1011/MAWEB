document.addEventListener("DOMContentLoaded", function () {
    const botonAgregar = document.getElementById("boton-agregar-01");
    const inputNombreTarea = document.getElementById("input-nombre-tarea");
    const inputFechaTarea = document.getElementById("input-fecha-tarea");
    const listaTareas = document.getElementById("lista-tareas");

    botonAgregar.addEventListener("click", () => {
        const nombreTarea = inputNombreTarea.value.trim();
        const fechaTarea = inputFechaTarea.value;

        if (nombreTarea && fechaTarea) {
            const nuevaTarea = document.createElement("li");
            nuevaTarea.classList.add("tarea");
            nuevaTarea.innerHTML = `
                <span>${nombreTarea} - ${fechaTarea}</span>
                <button class="boton-completar">Completar</button>
            `;
            nuevaTarea.querySelector(".boton-completar").addEventListener("click", () => {
                listaTareas.removeChild(nuevaTarea);
            });

            listaTareas.appendChild(nuevaTarea);

            inputNombreTarea.value = "";
            inputFechaTarea.value = "";
        } else {
            alert("Por favor, completa ambos campos para agregar una tarea.");
        }
    });
});