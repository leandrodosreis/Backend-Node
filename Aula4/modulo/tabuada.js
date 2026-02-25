/*
Objetivo: Arquivo responsavel por gerar uma tabuada utilizando WHILE e FOR
Data: 25/02/26
Autor: Leandro
Versão: 1.0
*/

//Import da biblioteca de operações matematicas
const calculosMatematicos = require("./calculo.js")

// //Função para imprimir a tabuada
const gerarTabuadaWhile = function(tabuada){

    let tab = Number(tabuada)
    let cont = 0
    let resultado

    while(cont<=10){

        //Processamento
        resultado = calculosMatematicos.multiplicar(tab, cont)
        console.log(tab + " x " + cont + " = " + resultado)

    // cont = cont +1
    // cont++
    cont +=1
    }

}
// gerarTabuadaWhile(9)


//Faz a mesma coisa

// const gerarTabuadaWhile = function(tabuada){

//     let tab = Number(tabuada)
//     let cont = 0
//     let resultado

//     while(cont<=10){

//         //Processamento
//         resultado = tab * cont
//         console.log(tab + " x " + cont + " = " + resultado)

//     cont = cont +1
//     }

// }



// gerarTabuadaWhile(9)

const gerarTabuadaFor = function(tabuada){

    let tab = Number(tabuada)
    let resultado

    //Tabuada com FOR
    for(let cont = 0; cont<=10; cont++){

        //Processamento
        resultado = tab * cont
        console.log(tab + " x " + cont + " = " + resultado)

    }

}

gerarTabuadaFor(8)