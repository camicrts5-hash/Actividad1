function convertir() {
    var mxInput = document.getElementById("pesos").value;
    if(mxInput === ""){
        alert("Por favor ingresa un número en Pesos Mexicanos");
        return;
    }

    var m = parseFloat(mxInput);
    var tasa_de_cambio = 0.055;
    var usd = m * tasa_de_cambio;

    document.getElementById("resultado").value = usd.toFixed(2) + " USD";
} 