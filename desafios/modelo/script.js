function calcular() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, digite valores inteiros.");
        return;
    }

    var resultado = num1 + num2;

    document.getElementById('resultado').innerText = 'resultado: ' + resultado;
}