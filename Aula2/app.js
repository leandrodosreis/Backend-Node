/*
Objetivo: Projeto para realizar o calculo de medias escolares
Autor: Leandro dos reis filho
Data: 29/01/2026
Versão: 1.0
*/

/*Tipos de criação de variaveis 

    var -> 
 Permite criar um espaço em memoria do tipo variavel. 
 Essa forma de criação hoje é considerada mais antiga,
 é provavel que seja encontrda apenas em projetos mais antigos.
 Dica: Caso voce precise utilizar o var, recomenda-se 
 que seja utilizada apenas em escopo global. 
 Global = public / Local = private

    let -> 
 Permite criar um espaço em memoria do tipo variavel.
 Essa forma de criação é realizda somente no escopo
 local, ou seja dentro de bloco de programação{}.
 Esse tipo de variavel deixa de existir ao termino do 
 bloco.

    const -> 
 Permite criar um espaço em memoria do tipo constatnte, 
 ou seja, esse conteudo não podera sofrer mudanças durante 
 o projeto.
 Dica: Se possivel você pode criar essa const escrita em 
 MAIUSCULO para facilitar sua utilização.

 Operadores de comparação
 == -> permite a comparação de dois conteudos (indiferente do tipo)
 != -> permite comparar a diferença de dois conteudos
 <= -> permite validar o valor menor ou igual
 >= -> permite validar o valor maior ou igual
 === -> permite comparar a igualdade dos conteudos e da tipagem
 !== -> permite comparar a diferença dos conteudos e igualdade da tipagem
 =!= -> permite comparar a igualdade de conteudos e diferença da tipagem

 Tabela logica do 'e' / 'ou' e operadores logicos
 e -> and -> &&
 ou-> or -> ||
 nao -> not ->!
*/ 

//Import da biblioteca de entrada de dados
const readline = require('readline')

//Criação do objeto para captar as entradas de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Entrada de dados do nome
entradaDeDados.question('Digite o nome do aluno: ', function(nome){
    //Recebe o nome do aluno    
    let nomeAluno = nome

    //Entrada de dados da nota1
    entradaDeDados.question('digite a nota1: ', function(valor1){
        let nota1 = valor1

        //Entrada de dados da nota2
        entradaDeDados.question('Digite a nota2: ', function(valor2){
            let nota2 = valor2

            //Entrada de dados da nota3
            entradaDeDados.question('Digite a nota3: ', function(valor3){
                let nota3 = valor3

                //Entrada de dados da nota4
                entradaDeDados.question('Digite a nota4: ', function(valor4){
                    let nota4 = valor4

                    //validação de entrada vazia
                    if(nomeAluno == '' || nota1 == '' || nota2 == '' || nota3 == '' || nota4 == ''){
                        console.log('ERRO: Existem campos obrigatorios que não foram preeenchidos')

                    //validação de numeros abaixo de 0 ou acima de 1000
                    }else if(nota1 < 0 || nota1 > 100 || nota2 < 0 || nota2 > 100 || nota3 < 0 || nota3 > 100 || nota4 < 0 || nota4 > 100 ){
                        console.log('ERRO: Nota abixo de 0 ou acima de 100')

                    //validação de entradas somente de numeros
                    //isNaN() permite a validação de numeros ou letras
                    }else if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){
                        console.log('ERRO: Somente numeros são aceitos')
                    }
                })
            })
        })
    })
})