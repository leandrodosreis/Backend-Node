/*

Objetivo: Criar uma aplicação que realiza calculo de juros utilizando funções para modularizar o codigo
Autor: Leandro
Data: 11/01/26
Versão: 1.0

*/

const readline = require('readline')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout

})

entradaDeDados.question("Digite o nome do Cliente: ", function(nome){
    let nomeCliente = nome

    entradaDeDados.question('Digite o nome do produto: ', function(produto){
        let nomeProduto = produto

        entradaDeDados.question('Digite o valor do produto: ', function(valor){
            let valorProduto = valor

            entradaDeDados.question('Digite o valor da taxa de juros: ', function(taxa){
                let taxaJuros = taxa

                entradaDeDados.question('Digite a quantidade de parcelas: ', function(parcelas){
                    let quantidadeParcelas = parcelas

                    //Import da biblioteca de calculos
                    let calculos = require('./modulo/calculos.js')

                    //Chama função para calcular o valor do monatnte
                    let montante = calculos.calcularJurosCompostos(valorProduto, taxaJuros, quantidadeParcelas)

                    //validação para verificar se o calculo foi realizado 
                    if(montante){
                        console.log("O Valor é: " + montante)
                    }else{
                        console.log('Erro: Não é possivel procesar  calculo')
                        entradaDeDados.close()
                    }
                    
                })
            })
        })
    })
})

