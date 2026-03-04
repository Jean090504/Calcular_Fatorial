/*******************************************************************************************************************************************
* Objetivo: Desenvolver um sistema para calcular o fatorial de um número fornecido pelo usuário
* Data: 04/03/2026
* Autor: Jean Costa
* Versão 1.0
********************************************************************************************************************************************/
//Importe da biblioteca para entrada e saída de dados
const readline = require('readline')

const entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Importe das funções para cálculos e tratativas
const calculos = require('./model/calculos')
const tratativas = require('./model/tratativas')

//Entrada de dados
entradaDados.question('Digite um número para calcular o fatorial: \n', function (numeroInformado) {
    let numeroFatorial = Number(numeroInformado)
    
    //Validação da entrada de dados
    let validarEntrada = tratativas.validarEntrada(numeroFatorial)

    if(validarEntrada === true){
    let resultado = calculos.calcularFatorial(numeroFatorial)
        console.log(resultado)
        entradaDados.close()
    }else {
        console.log(validarEntrada)
        entradaDados.close()
    }

})