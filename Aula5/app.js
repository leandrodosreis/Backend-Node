/*
Objetivo: Arquivo responsavel pela criação do projeto de estados e cidades
Data: 01/04
Autor: Leandro
Versão: 1.0
*/

/*
Para configurar a API: 
Instalar o express  -> npm install express --save
    Dependencia para configurar e utilizar o protocolo http para criar a API

Instalar o cors     -> npm install cors --save
    Dependencia para configurar as permissoes da APPI

    (ter cuidado com o ^ no package json para que as coisas não atualizem sem necessidade)
*/

//Import das dependencias para criar a API
const express = require('express')
const cors = require('cors')

//Criando um objeto do express para criar a API
const app = express()

//Configurações do cors da API
const cosrsOptions = {
    origin : ['*'],  //Configuração de origem da requisição (IP ou o dominio)
    methods: 'GET', //Configuração dos metodos que serão utilizados na API
    allowedHeaders: ['Content-type', 'Authorization']   //Configurações de permissoes
                    //Tipode de dados   Autorização de acesso

}

//Aplica as configurações do cors no app (Express)
app.use(cors(cosrsOptions))

const estadosCidades = require('./modulo/funcoes.js')

//endpoint para listar os estados (como detalhar a API na url /v1/senai/estados)
app.get('/v1/senai/estados', function(request, response){
    let estados = estadosCidades.getListaDeEstados()
    if(estados){
    response.json(estados)
    response.status(200)} //requisição bem sucedida
    else{
        response.json({'message': "Algo deu errado"})
        response.status(400)
    }
})



app.get('/v1/senai/dados/estado/:uf', function(request, response){
    let sigla = request.params.uf
    let estado = estadosCidades.getDadosEstado(sigla)
    if(estado){
        response.json(estado)
        response.status(200)
    }else{
        response.json({'message': "Algo deu errado"})
        response.status(400)
    }
})

app.get('/v1/senai/dados/capital/estado/:uf', function(request, response){
    let sigla = request.params.uf
    let capitalEstado = estadosCidades.getCapitalEstado(sigla)
    if(capitalEstado){
        response.json(capitalEstado)
        response.status(200)
    }else{
        response.json({'message': "Algo deu errado"})
        response.status(400)
    }
})

app.get('/v1/senai/dados/estado/regiao/:uf', function(request, response){
    let regiao = request.params.uf
    let estadoRegiao = estadosCidades.getEstadoRegiao(regiao)
    if(estadoRegiao){
        response.json(estadoRegiao)
        response.status(200)
    }else{
        response.json({'message': "Algo deu errado"})
        response.status(400)
    }
})


app.get('/v1/senai/dados/capitais/pais', function(request, response){
    let capitalPais = estadosCidades.getCapitalPais()
    if(capitalPais){
    response.json(capitalPais)
    response.status(200)} //requisição bem sucedida
    else{response.json({'message': "Algo deu errado"})
    response.status(400)}
})


app.get('/v1/senai/dados/cidades/:uf', function(request, response){
    let sigla = request.params.uf
    let cidade = estadosCidades.getCidades(sigla)
    if(cidade){
        response.json(cidade)
        response.status(200)
    }else{
        response.json({"message" : 'Algo deu erado'})
        response.status(400)
    }
})


//Fazer o start na API(aguardando as requisições)
app.listen(3030, function(){
    console.log('API aguaradando novas requisições ...')
})