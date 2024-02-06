function calcularArea() {
    var largura = parseFloat(document.getElementById('largura').value);
    var comprimento = parseFloat(document.getElementById('comprimento').value);

    if (isNaN(largura) || isNaN(comprimento)) {
        alert("Por favor, digite valores inteiros.");
        return;
    }

    var resultado = largura * comprimento;

    document.getElementById('resultado').innerText = 'resultado: ' + resultado;
}