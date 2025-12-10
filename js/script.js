var btnCalcular = document.querySelector("#btnCalcular")

var peso = document.querySelector("#peso")
var altura = document.querySelector("#altura")
var res = document.querySelector(".res")

function calcular(event) {
    event.preventDefault()

    // 1. Correção: 'Value' deve ser 'value' (minúsculo) para acessar o valor do input.
    // Também convertemos os valores para números (usando parseFloat) para garantir que a matemática funcione corretamente.
    var pesoValue = parseFloat(peso.value)
    var alturaValue = parseFloat(altura.value)

    // Validação básica para garantir que os campos foram preenchidos com números válidos
    if (isNaN(pesoValue) || isNaN(alturaValue) || alturaValue === 0) {
        res.innerHTML = `<p style="color: red;">Por favor, insira valores numéricos válidos para peso e altura.</p>`
        return; // Interrompe a função se os dados forem inválidos
    }

    // 2. Correção: A ordem do .toFixed(2) estava errada. Deve ser aplicado ao resultado final do cálculo.
    // O cálculo do IMC é peso / (altura * altura).
    var imc = (pesoValue / (alturaValue * alturaValue)).toFixed(2) // Calcula e já formata para 2 casas decimais

    // 3. Adicionando mais condições (else if) para cobrir todas as faixas de IMC comuns.
    let resultadoTexto = "";
    if (imc < 17) {
        resultadoTexto = "Muito abaixo do peso";
    } else if (imc >= 17 && imc < 18.5) {
        resultadoTexto = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        resultadoTexto = "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        resultadoTexto = "Acima do peso";
    } else if (imc >= 30 && imc < 35) {
        resultadoTexto = "Obesidade Grau I";
    } else if (imc >= 35 && imc < 40) {
        resultadoTexto = "Obesidade Grau II (severa)";
    } else {
        resultadoTexto = "Obesidade Grau III (mórbida)";
    }

    // 4. Inserindo o resultado dinamicamente na div 'res'.
    // Usei crase (template literals) para facilitar a montagem do HTML.
    res.innerHTML = `
       <div class="status">
        <p>Peso</p>
        <p>Altura</p>
        <p>IMC</p>
        <p>Resultado</p>
       </div>
       <div class="parametro">
        <p>${pesoValue} kg</p>
        <p>${alturaValue} m</p>
        <p>${imc}</p>
        <p>${resultadoTexto}</p>
        </div>
    `
}

btnCalcular.addEventListener("click", calcular)