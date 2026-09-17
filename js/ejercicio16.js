const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';

function calcularOperacion(operacion) {
    var val1 = document.getElementById("numero1").value;
    var val2 = document.getElementById("numero2").value;

    if (val1 === "" || val2 === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor ingresa ambos números.'
        });
        return;
    }

    var num1 = parseFloat(val1);
    var num2 = parseFloat(val2);

    if (isNaN(num1) || isNaN(num2)) {
        Swal.fire({
            icon: 'error',
            title: 'Valor inválido',
            text: 'Asegúrate de ingresar solo números válidos.'
        });
        return;
    }

    var res = 0;

    if (operacion === 'sumar') {
        res = sumar(num1, num2);
    } else if (operacion === 'restar') {
        res = restar(num1, num2);
    } else if (operacion === 'multiplicar') {
        res = multiplicar(num1, num2);
    } else if (operacion === 'dividir') {
        res = dividir(num1, num2);
    }

    document.getElementById("resultado").value = res;
}