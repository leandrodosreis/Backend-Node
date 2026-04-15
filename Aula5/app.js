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
//Retorna lista de estados
app.get('/v1/senai/estados', function(request, response){
    let estados = estadosCidades.getListaDeEstados()
    if(estados){
        response.status(200) //requisição bem sucedida
        response.json(estados)
    }else{
        response.status(404)
        response.json({'message': "Algo deu errado"})
        
    }
})

//ENDPOINT VIA QUERY
//Retorna dados de um estado filtrando pela sigla
// app.get('/v1/senai/dados/estado/:uf', function(request, response){
    // app.get('/v1/senai/dados/estado/', function(request, response){
    
    //     let sigla = request.query.uf
    //     let estado = estadosCidades.getDadosEstado(sigla)
    //     if(estado){
    //         response.status(200)
    //         response.json(estado)
    //     }else{
    //         response.status(404)
    //         response.json({'message': "Algo deu errado"})
                
    //         }
    // })

    
//ENDPOINNT VIA PARAMS
//Retorna dados de um estado filtrando pela sigla
app.get('/v1/senai/dados/estado/:uf', function(request, response){
    let sigla = request.params.uf
    let estado = estadosCidades.getDadosEstado(sigla)
    if(estado){
        response.status(200)
        response.json(estado)
    }else{
        response.status(404)
        response.json({'message': "Algo deu errado"})
            
    }
})


//Retorna dados da capital filtrando pela sigla do estado
app.get('/v1/senai/dados/capital/estado/:uf', function(request, response){
    let sigla = request.params.uf
    let capitalEstado = estadosCidades.getCapitalEstado(sigla)
    if(capitalEstado){
        response.status(200)
        response.json(capitalEstado)
        
    }else{
        response.status(404)
        response.json({'message': "Algo deu errado"})
        
    }
})

//Retorna os estados filtrando pela regiao
app.get('/v1/senai/dados/estado/regiao/:regiao', function(request, response){
    let regiao = request.params.regiao
    let estadoRegiao = estadosCidades.getEstadoRegiao(regiao)
    if(estadoRegiao){
        response.status(200)
        response.json(estadoRegiao)
        
    }else{
        response.status(404)
        response.json({'message': "Algo deu errado"})
        
    }
})

//Retorna os estados que foram capitais do brasil
app.get('/v1/senai/dados/estados/capitais/brasil', function(request, response){
    let capitalPais = estadosCidades.getCapitalPais()
    if(capitalPais){
        response.status(200) //requisição bem sucedida
        response.json(capitalPais)
    }else{
        response.status(404)
        response.json({'message': "Algo deu errado"})
    }
})

//Retorna as cidades filtrando pela sigla dos estados
app.get('/v1/senai/dados/cidades/estado/:cidade', function(request, response){
    let sigla = request.params.cidade
    let cidade = estadosCidades.getCidades(sigla)
    if(cidade){
        response.status(200)
        response.json(cidade)
        
    }else{
        response.status(404)
        response.json({"message" : 'Algo deu erado'})
        
    }
})

app.get('/v1/senai/help', function(request, response){
    let docAPI = {
        "api-description" : "API para manipular dados de Estado e Cidades",
        "date"            : "02/04/2026",
        "development"     : "Leandro dos Reis Filho",
        "version"         : 1.0,
        "endpoints"       : [
            {
                "rota1"    : "v1/senai/estados",
                "description"   :   "Retorna a lista de todos os estados"
            },
            {
                "rota2"    : "v1/senai/dados/estados/sp",
                "description"   :   "Retorna dados de um estado filtrando pela sigla"
            },
            {
                "rota3"    : "v1/senai/dados/capital/estados/sp",
                "description"   :   "Retorna dados da capital de um estado filtrando pela sigla"
            },
            {
                "rota4"    : "v1/senai/dados/estados/regiao/sul",
                "description"   :   "Retorna a lista doa estados filtrando pela região"
            },
            {
                "rota5"    : "v1/senai/dados/estados/capitais/brasil",
                "description"   :   "Retorna a lista de todos os estados que ja foram capitais do brasil"
            },
            {
                "rota6"    : "v1/senai/dados/cidades/estados/sp",
                "description"   :   "Retorna a lista de cidades filtrando pela sigla do estado"
            }
        ]
    }

    response.status(200)
    response.json(docAPI)
})


//Fazer o start na API(aguardando as requisições)
app.listen(3030, function(){
    console.log('API aguaradando novas requisições ...')
})