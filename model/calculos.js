/*******************************************************************************************************************************************
* Objetivo: Arquivo responsável por realizar os cálculos do fatorial de um número fornecido pelo usuário
* Data: 04/03/2026
* Autor: Jean Costa
* Versão 1.0
********************************************************************************************************************************************/
//Função para calcular o fatorial de um número
const calcularFatorial = function (numeroFatorial) {
    let fatorial = 1

    //O fatorial de um número é o produto de todos os números inteiros positivos menores ou iguais a ele.
    // Por exemplo, o fatorial de 5 (5!) é 5 x 4 x 3 x 2 x 1 = 120.
    for (let i = numeroFatorial; i > 1; i--) {
        fatorial *= i
    }

    let resultadoFatorial = `O fatorial de ${numeroFatorial} é: ${fatorial}`
    return resultadoFatorial
}

module.exports = {
    calcularFatorial
}
