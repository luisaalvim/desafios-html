function calcularSaldoFinal() {
    var folhaPagamento = parseFloat(document.getElementById('folhaPagamento').value);
    var impostos = parseFloat(document.getElementById('impostos').value);
    var despesasFixas = parseFloat(document.getElementById('despesasFixas').value);
    var receitas = parseFloat(document.getElementById('receitas').value);

    if (isNaN(folhaPagamento) || isNaN(impostos) || isNaN(despesasFixas) || isNaN(receitas)) {
        alert("Por favor, digite valores inteiros.");
        return;
    }

    var resultado = receitas - (folhaPagamento + impostos + despesasFixas);

    document.getElementById('resultado').innerText = 'resultado: ' + resultado;
}