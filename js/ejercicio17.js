function obtenerTareas() {
    let tareas = localStorage.getItem("tareas"); 
    return tareas ? JSON.parse(tareas) : [];
}

const manejarTareas = (() => {

    const agregar = (tarea) => {
        let tareas = obtenerTareas(); 
        tareas.push(tarea);
        localStorage.setItem("tareas", JSON.stringify(tareas)); 
    };

    const eliminar = (index) => {
        let tareas = obtenerTareas(); 
        tareas.splice(index, 1);
        localStorage.setItem("tareas", JSON.stringify(tareas));
    };

    return { agregar, eliminar };

})();

var tituloApp = "Gestión de Tareas";

function agregarTarea() {
    var tareaInput = document.getElementById("tarea").value;

    if (tareaInput === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor ingresa una tarea.'
        });
        return;
    }

    manejarTareas.agregar(tareaInput); 
    document.getElementById("tarea").value = "";
    renderizarTareas();
}

function eliminarTarea(index) {
    Swal.fire({
        icon: 'warning',
        title: '¿Estás seguro?',
        text: 'La tarea se eliminará permanentemente.',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    }).then((resultado) => {
        if (resultado.isConfirmed) {
            manejarTareas.eliminar(index); 
            renderizarTareas();
            Swal.fire('Eliminada', 'La tarea ha sido eliminada.', 'success');
        }
    });
}

function renderizarTareas() {
    var tareas = obtenerTareas(); 
    var contenedor = document.getElementById("listaTareas");
    var html = "";

    tareas.forEach(function (tarea, index) {
        html += "<div class='tarea-item'>";
        html += "<span>" + tarea + "</span>";
        html += "<button onclick='eliminarTarea(" + index + ")' class='boton-eliminar'>Eliminar</button>";
        html += "</div>";
    });

    contenedor.innerHTML = html;
}

window.onload = function () {
    renderizarTareas();
};