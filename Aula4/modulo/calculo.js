/*
Objetivo: Arquivo responsavel pelo processamento de calculos matematicos
Data: 20/02/26
Autor: Leandro
Versão: 1.0
*/

//toUpperCase() retorna uma string em maiusculo
//toLowerCase() retorna uma string em minusculo

//*******************************************************
//Exemplo de função anonima
//*******************************************************

//Função para calcular as 4 operações matematicas
const calcular = function(numero1, numero2, operador){
    let valor1      = Number(numero1)
    let valor2      = Number(numero2)
    let operadorMat = String(operador).toUpperCase()

    let resultado = false

    //Processamento 1
    // if(operadorMat == "SOMAR")
    //     resultado = valor1 + valor2

    // else if(operadorMat == "SUBTRAIR")
    //     resultado = valor1 - valor2

    // else if(operadorMat == "MULTIPLICAR")
    //     resultado = valor1 * valor2

    // else if(operadorMat == "DIVIDIR")
    //     if(valor2 != 0)
    //         resultado = valor1 / valor2

    //Processamento 2
    switch (operadorMat) {
        case "SOMAR":
            resultado = somar(valor1, valor2)
            break;

        case "SUBTRAIR":
            resultado = subtrair(valor1, valor2)
            break

        case "DIVIDIR":
            resultado = dividir(valor1, valor2)
            break

        case "MULTIPLICAR":
            resultado = multiplicar(valor1, valor2)
            break
    
        default:
            return false
            break;
    }
    
    
    //else{return false} SAIDA1

    //SAIDA2
    // if(resultado != undefined){
    //     return resultado
    // }else{
    //     return false
    // }

    //SAIDA3
    return resultado
    

}

//Função baseada em formato de seta (Arrow function)
const somar = (numero1, numero2) => Number(numero1) + Number(numero2)
const subtrair = (numero1, numero2) => Number(numero1) - Number(numero2)
const multiplicar = (numero1, numero2) => Number(numero1) * Number(numero2)
const dividir = (numero1, numero2) => Number(numero1) / Number(numero2)
// OU
//     {
//     let valor1 = Number(numero1)
//     let valor2 = Number(numero2)

//     let resultado = valor1 + valor2

//     return resultado
// }

//chamando a função para testar
// let result = calcular(20, 20, "subtrair")
// console.log(result)

function validacaoLetras(numero1, numero2, operador){

    let digito1 = Number(numero1)
    let digito2 = Number(numero2)
    let tipoCalculo = String(operador)

    if(operador == "" || numero1 == "" || numero2 == "" || isNaN(numero1) || isNaN(numero2) || !isNaN(operador)){
        return false
        
    }

    return true
}



module.exports = {
    calcular, somar, subtrair, dividir, multiplicar, validacaoLetras
}