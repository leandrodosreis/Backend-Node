/* 
Objetivo: Manipular dados em array e JSON
Data: 05/03/26
Autor: Leandro
Versão: 1.0
*/

/*
[] -> Objeto de tipo array
{} -> Objeto tipo json

ARRAY -> É um espaço na memoria para armazenar dados sem a nevessidade de criar outros objetos
    ex:
        let nome    = 'jose'
        let nome2   = 'maria'
        let nome3   = 'joao'

            INDICES       0       1        2
        let nomes   = ['jose', 'maria', 'joao']

JSON -> É um espaço na memoria para armazenar dados em CHAVE e VALOR
    Ex:
    let nome    = 'jose'
    let telefone = '1999999'
    let email   = 'jose@gmail.com'

                    Atributo
                    chave    valor
    let cliente = {"nome" : "jose", "telefone" : "199999", "email" : "jose@gmail.com"}
*/

// Criando objetos do tipo array
const listaDeAlunos         = ['Jose', 'Maria', 'Luiz', 'Antonio', 'Carlos']
const listaDeClientes       = []
const listaDeFornecedores   = []

const exibirDados = function(){
    //Exibe o objeto array com o seu conteudo
    console.log(listaDeAlunos)

    //exibindo o tipo de dados de um indice
    console.log(typeof(listaDeAlunos[2]))

    //Exibe o objeto array em formato de tabela, mostrando indice e conteudo
    console.table(listaDeAlunos)

    //Exibe um indice 
    console.log(listaDeAlunos[3])
    console.log(listaDeAlunos[0])

    console.log('===============MANUAL===============')
    //Exibindo os dados de forma individual pelo indice
    console.log(`O nome do aluno é : ${listaDeAlunos[0]}`)
    console.log(`O nome do aluno é : ${listaDeAlunos[1]}`)
    console.log(`O nome do aluno é : ${listaDeAlunos[2]}`)
    console.log(`O nome do aluno é : ${listaDeAlunos[3]}`)
    console.log(`O nome do aluno é : ${listaDeAlunos[4]}`)

    //Usando o while
    console.log('===============WHILE===============')
    let cont = 0
    while(cont < 5){
        console.log(`O nome do aluno é : ${listaDeAlunos[cont]}`)
        cont+=1
    }

    console.log('===============WHILE(com lista de aluno.length)===============')
    while(cont < listaDeAlunos.length){
        console.log(`O nome do aluno é : ${listaDeAlunos[cont]}`)
        cont+=1
    }

    //Usando for
    console.log('===============FOR===============')

        //cont = 0 ; enquato/quando cont <5 então cont++ (continue adicionando 1 ao 0 e 5)
    for(cont = 0; cont < 5 ; cont++){
        console.log(`O nome do aluno é : ${listaDeAlunos[cont]}`)
    }

    console.log('===============FOR EACH===============')

    //Usando FOR EACH
    listaDeAlunos.forEach(function(aluno){
        console.log(`O nome do aluno é : ${aluno}`)
    })

    console.log('===============FOR OF===============')

    //Usando for of
        //aluno da listaDeAlunos (variavel aluno recebe os elementos DA listaDeAlunos)
    for(aluno of listaDeAlunos){
        console.log(`O nome do aluno é : ${aluno}`)
    }

    console.log('===============FOR IN===============')

    //Usando for in
    for(aluno in listaDeAlunos){
        console.log(`O nome do aluno é : ${listaDeAlunos[aluno]}`)
    }

    //Retorna a quantidade de itens em um array
    console.log(listaDeAlunos.length)
}

const manipularDados = function(){
    //adicionando elementos de forma manual pelo indice
    listaDeClientes[0] = 'Jose da Silva'
    listaDeClientes[1] = 'Maria da Silva'
    listaDeClientes[2] = 'Luiz da Silva'
    listaDeClientes[3] = 'Ana da Silva'
    listaDeClientes[5] = 'Jose da Silva'
    
    console.log(listaDeClientes)
    console.table(listaDeClientes)

    //permite adcionar novos elementos no array sempre no final
    listaDeFornecedores.push('Antonio')
    listaDeFornecedores.push('Caio')
    listaDeFornecedores.push('Luiz')
    listaDeFornecedores.push('Hugo', 'Maria', 'jose')
    console.log(listaDeFornecedores)

    //permite adicionar novos elementos no array sempre no inicio
    //Após adicionar o elemento, ele reorganiza todos os outros itens
    listaDeFornecedores.unshift('Luciano')
    console.table(listaDeFornecedores)

    //Permite adicionar um novo elemento em uma determinada posição do array
                    //.splice(indice, qtdeDeElementos, 'Novo conteudo')
    listaDeFornecedores.splice(3,0, 'Bernardo')
    console.table(listaDeFornecedores)

    //Permite remover um determinado conteudo com base no indice do elemento array
                    //.splice(indice, qtde de elementos a ser removido)
    listaDeFornecedores.splice(6,1)
    console.table(listaDeFornecedores)

    //Permite remover o ultimo elemento do array
    listaDeFornecedores.pop()
    console.table(listaDeFornecedores)

    //Permite remover o primeiro elemento do array
    //Apos ele remover ira reorganizar todos os elemetnos
    listaDeFornecedores.shift()
    console.table(listaDeFornecedores)
}

// função para percorrer array com while selecionar oque queremos e apagar
function descobrirIndice(nome){
    
    //indexOf() Retorna o indice referente aoo conteudo que esta sendo pesquisado
    listaDeAlunos.splice(listaDeAlunos.indexOf(nome),1)
    console.table(listaDeAlunos)


    // let cont = 0
    // let qtd = listaDeAlunos.length

    // while(cont<qtd){

    //     if(nome == listaDeAlunos[cont]){

    //         listaDeAlunos.splice(cont,1)
    //     }
    //     cont++
    // }
    // console.table(listaDeAlunos.indexOf(nome))

    
    // for(cont in listaDeAlunos){
    //     if(nome == listaDeAlunos[cont]){
    //         listaDeAlunos.splice(cont,1)
    //     }
    // }
    // console.table(listaDeAlunos)


}

const verificarItem = function(nomeAluno){
    //Verifica se o conteudo existe dentro do arraye retorna um boolean
    return listaDeAlunos.includes(nomeAluno)
}

//exibirDados()
//manipularDados()
//descobrirIndice('Maria')
verificarItem('Maria')
