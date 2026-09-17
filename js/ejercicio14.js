function calcular() {
    var arreInput = document.getElementById("numeros").value;

    if (arreInput === ""){
        alert("Por favor ingresa números separados con comas.");
        return;
    }

    var arreTexto = arreInput.split(",");
    var numeros = arreTexto.map(Number);

    if (numeros.some(isNaN)) {
        alert("Error: Asegúrate de ingresar solo números válidos separados por comas.");
        return;
    }
    
    var mayor = Math.max(...numeros);
    var menor = Math.min(...numeros);

    var suma = numeros.reduce((acc, valor) => acc + valor, 0);
    var promedio = suma / numeros.length;

    document.getElementById("mayor").value = mayor;
    document.getElementById("menor").value = menor;
    document.getElementById("promedio").value = promedio.toFixed(2);
}