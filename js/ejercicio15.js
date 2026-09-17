let estudiantes = [];

function agregarEstudiante() {
    var nombreInput = document.getElementById("nombre").value;
    var caliInput = document.getElementById("calificacion").value;

    if (nombreInput === "" || caliInput === "") {
        alert("Por favor llena los campos.");
        return;
    }

    let estudiante = {
        nombre: nombreInput,
        calificacion: Number(caliInput)
    };

    estudiantes.push(estudiante);
    alert("¡Estudiante agregado!");

    document.getElementById("nombre").value = "";
    document.getElementById("calificacion").value = "";

}

function calcularResultados() {
    if (estudiantes.length === 0) {
        alert("Agrega al menos un estudiante.");
        return;
    }

    estudiantes.forEach(estudiante => {
        console.log(estudiante.nombre);
    });

    var promedio = estudiantes.reduce((total, estudiante) => total + estudiante.calificacion, 0) / estudiantes.length;

    var calificacionMaxima = Math.max(...estudiantes.map(e => e.calificacion));
    var calificacionMinima = Math.min(...estudiantes.map(e => e.calificacion));

    var nombreMayor = "";
    var nombreMenor = "";

    estudiantes.forEach(estudiante => {
        if (estudiante.calificacion === calificacionMaxima) {
            nombreMayor = estudiante.nombre;
        }
        if (estudiante.calificacion === calificacionMinima) {
            nombreMenor = estudiante.nombre;
        }
    });

    document.getElementById("promedio").value = promedio.toFixed(2);
    document.getElementById("maxima").value = nombreMayor;
    document.getElementById("minima").value = nombreMenor;
}