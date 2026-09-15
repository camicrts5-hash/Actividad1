function convertir() {
    var celsiusInput = document.getElementById("celsius").value;
    if(celsiusInput === ""){
        alert("Por favor, ingresa un valor en grados Celsius");
        return;
    }

    var c = parseFloat(celsiusInput);

    var fahrenheit = (c * 9 / 5) + 32;

    document.getElementById("resultado").value = fahrenheit.toFixed(2) + " °F";
    
}