//permite exibir conteudo no terminal
console.log("Testando o js")

//variavel
var nome = "Leandro"

//ativando variavel
console.log(nome)

//concatenando 
console.log('O nome do usuario é: ' + nome)
console.log(`O nome do usuario é: ${nome} dos Reis`)

//Import da biblioteca do readline
//readline serve para permitir a entrada de dados via terminal
var readline = require("readline")

//Criar um objeto (entradadedados) especialista em entrada de dados pelo terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//callback em ação
//Permite a entrada de dados do usuario
//Question utiliza uma função de callback para devolver o valor digitado
//É uma função particular de um metodo, que é chamada 
//para encaminhaar um conteudo para o desenvolvedor, esse conteudo vem atraves 
//da variavel no argumento nomeusuario
entradaDeDados.question('Digite seu nome: ', function(nomeUsuario){
    console.log('o nome digitado foi: ' + nomeUsuario)

    entradaDeDados.question('digite seu email: ', function(emailUsuario){
        console.log(`o email do usuario ${nomeUsuario} é ${emailUsuario}`)
    })
})

