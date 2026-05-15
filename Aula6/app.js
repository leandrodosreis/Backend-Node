//Import das dependencias para criar a API
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
//Permitindo a utilização do body das requisições
const bodyParserJSON = bodyParser.json()

//Criando um objeto do express para criar a API
const app = express()

//Configurações do cors da API
const cosrsOptions = {
    origin : ['*'],  //Configuração de origem da requisição (IP ou o dominio)
    methods: 'GET, POST, PUT DELETE, OPTIONS', //Configuração dos metodos que serão utilizados na API
    allowedHeaders: ['Content-type', 'Authorization']   //Configurações de permissoes
                    //Tipode de dados   Autorização de acesso

}

//Aplica as configurações do cors no app (Express)
app.use(cors(cosrsOptions))

//Import das controllers
const controllerFilme = require('./controller/filme/controller_filme.js')
const controllerGenero = require('./controller/genero/controller_genero.js')
const controllerClassificacao = require('./controller/classificacao/controller_classificacao.js')

//ENDPOINTS FILME
app.post('/v1/senai/locadora/filme', bodyParserJSON, async function(request, response){
    //Recebendo o body da requisição
    let dados = request.body

    //Recebendo o tipo de dados da requisição para validar se é json
    let contentType = request.headers['content-type']

    //Chama a função de inserir e encaminha os dados do filme e o contentType
    let result = await controllerFilme.inserirNovoFilme(dados, contentType)

    response.status(result.status_code)
    response.json(result)
})

//Não precisamos de bodyParserJson pois não vamos inserir nada no 'corpo'
app.get('/v1/senai/locadora/filme', async function(request, response){
    let result = await controllerFilme.listarFilme()

    response.status(result.status_code)
    response.json(result)
})

//Não precisamos de bodyParserJson pois não vamos inserir nada no 'corpo'
app.get('/v1/senai/locadora/filme/:id', async function(request, response){
    //Recebe o id do filme via params
    let id = request.params.id

    let result = await controllerFilme.buscarFilme(id)

    response.status(result.status_code)
    response.json(result)
})

//por id tem que receber 3 coisas id, bodyparser e contenttype
app.put('/v1/senai/locadora/filme/:id', bodyParserJSON, async function(request, response) {

    //Recebe o content-type da requisição para validar se é json
    let contentType = request.headers['content-type']

    //Recebe o id do registro a ser atualizado 
    let id = request.params.id

    //Recebe os dados do body, que seão modificados no bd
    let dados = request.body
    
    //Chama os dados para atualizar o dilme devemos encaminhar as variaveis na mesma sequencia que a função foi criada
    let result = await controllerFilme.atualizarFilme(dados, id, contentType)

    response.status(result.status_code)
    response.json(result)
})

app.delete('/v1/senai/locadora/filme/:id', async function(request, response){

    let id = request.params.id

    let result = await controllerFilme.excluirFilme(id)


    response.status(result.status_code)
    response.json(result)

})

//ENPOINTS GENERO

app.post('/v1/senai/locadora/genero', bodyParserJSON, async function(request, response){
    let dados = request.body

    let contentType = request.headers['content-type']

    let result = await controllerGenero.inserirNovoGenero(dados, contentType)

    response.status(result.status_code)
    response.json(result)
})

app.get('/v1/senai/locadora/genero', async function (request, response) {
    
    let result = await controllerGenero.listarGenero()

    response.status(result.status_code)
    response.json(result)
    
})

app.get('/v1/senai/locadora/genero/:id', async function (request, response) {

    let id = request.params.id

    let result = await controllerGenero.buscarGenero(id)
    
    response.status(result.status_code)
    response.json(result)
})

app.put('/v1/senai/locadora/genero/:id', bodyParserJSON ,async function(request, response){

    let contentType = request.headers['content-type']

    let id = request.params.id

    let dados = request.body

    let result = await controllerGenero.atualizarGenero(dados, id, contentType)

    response.status(result.status_code)
    response.json(result)
})

app.delete('/v1/senai/locadora/genero/:id', async function (request, response) {

    let id = request.params.id

    let result = await controllerGenero.excluirGenero(id)

    response.status(result.status_code)
    response.json(result)
    
})

//ENDPOINTS CLASSIFICACAO

app.post('v1/senai/locadora/classificacao', bodyParserJSON, async function (request, response) {
    
    let dados = request.body

    let contentType = request.headers['content-type']

    let result = await controllerClassificacao.inserirNovaClassificacao(dados, contentType)

    response.status(result.status_code)
    response.json(result)

})

//Logica da ordem DAO > Controller > app

//Fazer o start na API(aguardando as requisições)
app.listen(3030, function(){
    console.log('API aguaradando novas requisições ...')
})