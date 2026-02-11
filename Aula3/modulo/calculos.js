/*
Objetivo: Arquivo tesponsavel pelas funções de calculos financeiros
Autor: Leandro  
Data: 11/02/26
Versão: 1.0
*/

//Função para retornar percentual de um numero
function calcularPercentual (numero){

    //Recebe numero encaminhado
    let numeroPercentual = Number(numero)

    //validações
    if(numero == '' || numero <= 0 || isNaN(numero)){
        return false
    }else{

        //Calcula o percentual do numero
        let percentual = numeroPercentual / 100

        //retorno do valor
        return Number(percentual.toFixed(2))
    }
}

//Função para retornar o montante referente a juros comopostos
function calcularJurosCompostos(valor, taxa, parcelas){

    //Recebe os valores dos args e converte em numero
    let valorPrincipal = Number(valor)
    let taxaDeJuros = Number(taxa)
    let quantidadeParcelas = Number(parcelas)

    if(valor == "" || isNaN(valor) || valor <= 0 || parcelas <= 0 || parcelas == '' || isNaN(parcelas)){

    }else{
    //função para retornar percentual da taxa
    let percentual = calcularPercentual(taxaDeJuros)

        if(percentual){

        //Calculo
            let montante = valorPrincipal * ((1 + percentual)** quantidadeParcelas)
            return Number(montante.toFixed(2))

        }else{
            return false
        }
    }
}

//Tornando as funções publicas
module.exports = {
    calcularPercentual, calcularJurosCompostos
}