function calcularDivisaoLucros() {
    var lucro = parseFloat(document.getElementById('lucro').value);
    var socios = parseFloat(document.getElementById('socios').value);

    if (isNaN(lucro) || isNaN(socios)) {
        alert("Por favor, digite valores inteiros.");
        return;
    }

    var resultado = lucro / socios;

    document.getElementById('resultado').innerText = 'resultado: ' + resultado;
}