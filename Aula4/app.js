/*
Objetivo: Arquivo responsavel SOMENTE pelas entradas e saidas de dados
Data: 20/02/26
Autor: Leandro
Versão: 1.0
*/

//import da biblioteca de calculos
const calculosMatematicos = require('./modulo/calculo.js')

//Chamando as funções

//let result1 = calculosMatematicos.dividir(80, 55)
// OU
//let result2 = calculosMatematicos.calcular(80, 55, "dividir")

//console.log(result1)
//console.log(result2)

let n1 = 12
let n2 = 11
let operador = "somar"

let validar = calculosMatematicos.validacaoLetras(n1, n2, operador)

if(validar){
    let result = calculosMatematicos.calcular(n1, n2, operador)
    if(result)
        console.log(result)
    else
        console.log("Erro no calculo")
}else{
    console.log("Erro na validação")
}