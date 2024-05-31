function decimalABinario(decimal) {
    if (decimal < 0) {
        return "Ingrese un número positivo";
    }

    if (decimal === 0) {
        return "0";
    }

    let binario = "";
    let numero = decimal;

    while (numero > 0) {
        let residuo = numero % 2;
        binario = residuo + binario;
        numero = Math.floor(numero / 2);
    }

    return binario;
}

function convertir() {
    const decimalInput = document.getElementById('decimalInput').value;
    const decimalNumero = parseInt(decimalInput, 10);
    const binarioResultado = decimalABinario(decimalNumero);
    document.getElementById('resultadoBinario').textContent = binarioResultado;
}
