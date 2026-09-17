function convertir() {
    var kmInput = document.getElementById("kilometros").value;
    if(kmInput === ""){
        alert("Por favor ingresa un número en Kilómetros");
        return;
    }

    var c = parseFloat(kmInput);
    var millas = c * 0.621371;

    document.getElementById("resultado").value = millas + " millas";
} 