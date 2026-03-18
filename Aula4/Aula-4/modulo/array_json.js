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

const manipularDadosJson = function(){
    //Criando um objeto Json
    //A estrutura do json é chave(atributo) : valor(conteudo)
    let aluno = {
        "id" : 1, 
        "nome" : "Jose da Silva", 
        "ra" : 123456, 
        "email" : "jose@gmail.com",
        "habilidades": ["JavaScript", "Python", "Java"]}

    //console.table(aluno)

    //Exibe o conteudo de um atributo
    //console.log(aluno.nome)

    //adiciona um novo atributo no json ja existente
    aluno.telefone = "119888888"
    aluno.data_nascimento = "11/03/8888"
    console.log(aluno)

    delete aluno.email
    console.log(aluno)

    aluno.ra = 99999
    console.table(aluno)

    aluno.nota = null
    console.table(aluno)
}

const cadastroDeProdutos = function(){

    let cores = [
                    {"id" : 1, "cor" : "branco", "hexa": "#ffffff"},    //0
                    {"id" : 2, "cor" : "preto", "hexa": "#000000"},     //1
                    {"id" : 3, "cor" : "azul", "hexa": "#0000ff"},      //2
                    {"id" : 4, "cor" : "amarelo", "hexa": "#000000"},   //3
                    {"id" : 5, "cor" : "rosa", "hexa": "#ffb5c0"}       //4
                ]

    let marcas = [
                    {"id" : 1, "marca" : "samsung", "telefone": 11, "email" : "samsung@gmail"},
                    {"id" : 2, "marca" : "apple", "telefone": 12, "email" : "apple@gmail"},
                    {"id" : 3, "marca" : "dell", "telefone": 13, "email" : "dell@gmail"},
                    {"id" : 4, "marca" : "nokia", "telefone": 14, "email" : "nokia@gmail"},
                    {"id" : 5, "marca" : "asus", "telefone": 15, "email" : "asus@gmail"},
                    {"id" : 6, "marca" : "alienware", "telefone": 16, "email" : "alienware@gmail"}
                ]

    let produtos = [
        {   "id" : 1,
            "nome" : "monitor",
            "descricao" : "monitor de 27 polegadas",
            "valor" : 1500,
            "qtde" : 20,
            "cor" : [
                    cores[0],
                    cores[1]
                    ],
            "marca" : [marcas[3].marca]
        },
        {
            "id" : 2,
            "nome" : "teclado",
            "descricao" : "teclado mecanico rgb",
            "valor" : 250,
            "qtde" : 500,
            "cor" : cores,
            "marca" : [marcas[4].marca, marcas[5].marca, marcas[3].marca]
        },
        {
            "id" : 3,
            "nome" : "mouse",
            "descricao" : "mouse sem fio",
            "valor" : 80,
            "qtde" : 160,
            "cor" : [
                    cores[1],
                    cores[3],
                    cores[4]
            ],
            "marca" : [marcas[1].marca, marcas[4].marca, marcas[2].marca]
        },

       
        
    ]
 //exercicio

    // for(let contIn = 0; produtos.length; contIn+1){
    //     console.log(
    //         `Produto: ${produtos}`
    //     )

    // }

    //permite extrais os produtos
    produtos.forEach(function(itemProduto){
        console.log(`** Produto: ${itemProduto.nome} **\nQuantidade: ${itemProduto.qtde}\nValor: ${itemProduto.valor}` ) 

        //permite extrair as cores de cada produto
        itemProduto.cor.forEach(function(itemCor){
            console.log(`cor ${itemCor.cor}`)
        })

        //permite extrair as marcas de cada produto
        itemProduto.marca.forEach(function(itemMarca){
            console.log(`Marca ${itemMarca}**`)
            
        })
        console.log('*****************\n')
    })

    //filtrando podutos pelo nome
    console.log('Exemplo de como pesquisar um produto pelo nome')

    let nomeProduto = 'Teclado'
    produtos.forEach(function(itemProduto){
        if(String(nomeProduto).toUpperCase() == String(itemProduto.nome).toUpperCase())
            console.log(itemProduto)
    })

    //filtrando podutos pela cor
    console.log('Exemplo de como pesquisar um produto pela cor')

    let filtroCor = "azul"
    produtos.forEach(function(itemProduto){
        
        itemProduto.cor.forEach(function(itemCor){

            if(filtroCor == itemCor.cor){
                console.log(itemProduto)
            }
        })
            

    })


    //console.log(produtos)

    // console.log(produtos[0].cor)

    // //exibindo todas as cores referente ao produto cor
    // produtos[0].cor.forEach(function(itemCor){
    //     console.table(itemCor.cor)
    // })

                // console.table(cores[2].cor)
                // //estou indo no indice 2 do array estou chamando o atributo 'cor' do json

                // cores.forEach(function(itemCor){
                //     console.log(itemCor.cor)
                // })
                // //Percorra todo o array cores e mostre no console o valor da propriedade cor de cada objeto.
}

cadastroDeProdutos()
//manipularDadosJson()
//exibirDados()
//manipularDados()
//descobrirIndice('Maria')
//verificarItem('Maria')
