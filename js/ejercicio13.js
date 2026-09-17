function convertir() {
    var edInput = document.getElementById("edad").value;
    if(edInput === ""){
        alert("Por favor ingresa una Edad válida");
        return;
    }

    if(edInput >=18 && edInput <=100){
        mensaje = "Puedes votar";
    }else{
        mensaje= "No puedes votar";
    }
    
    document.getElementById("resultado").value = mensaje;
} 