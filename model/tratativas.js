/*******************************************************************************************************************************************
* Objetivo: Arquivo responsável por realizar as tratativas de erros e validações para o cálculo do fatorial
* Data: 04/03/2026
* Autor: Jean Costa
* Versão 1.0
********************************************************************************************************************************************/
/* O sistema deverá validar as seguintes condições; 
o Não existe fatorial de 0; 
o Se o valor fornecido pelo usuário para calcular for 1, o sistema deve 
informar que não é possível calcular o fatorial, precisa ser um 
número maior do que 1 
● Validação de entrada vazia e tratamento de caracteres inválidos. */

//Função para validar a entrada de dados do usuário
const validarEntrada = function (numeroFatorial) {
    if(numeroFatorial == ''){
        return 'Entrada vazia. Por favor, informe um número para calcular o fatorial.'
    }else if (isNaN(numeroFatorial)){
        return 'Entrada inválida. Por favor, informe um número para calcular o fatorial.'
    }else if (numeroFatorial <= 0){
        return 'Não existe fatorial de 0. Por favor, informe um número maior do que 1 para calcular o fatorial.'
    }else if (numeroFatorial == 1){
        return 'Não é possível calcular o fatorial de 1. Por favor, informe um número maior do que 1 para calcular o fatorial.'
    }else {
        return true
    }
}

module.exports = {
    validarEntrada
}