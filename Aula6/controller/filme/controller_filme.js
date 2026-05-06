/*
Objetivo: Arquivo responsavel pela validação, tratamento, manipulação de dados para realizar o CRUD de filme
Data: 17/04/2026
Autor: Leandro
Versão: 1.0
*/

//Import do arquivo de configurações de mensagens do projeto
const configMessages = require('../modulo/configMessages.js')

//Import do arquivo do DAO para manipular os dados de filme no banco de dados
const filmeDAO = require('../../model/DAO/filme/filme.js')

// Função para inserir um novo filme 
const inserirNovoFilme = async function(filme, contentType){

    //Cria uma copia dos JSON do arquivo de configuração de mensagens
    let customMessage = JSON.parse(JSON.stringify(configMessages))

    try {
            
        if(String(contentType).toUpperCase() == 'APPLICATION/JSON'){

            //Chama a função para validar a entrada de dados do filme
            let validar = await validarDados(filme)


            //Retorna um json de erro caso algum atributo seja invalido, senão retorna um false(Nâo teve erro)
            if(validar){
                return validar //400
            }
            else{
                //Encaminha os dados do filme para o DAO inserir no banco de dados
                let result = await filmeDAO.insertFilme(filme)

                if(result){ //201
                    //Cria o id no Json do filme e adiciona o id gerado no DAO
                    filme.id = result
                    customMessage.DEFAULT_MESSAGE.status = customMessage.SUCCESS_CREATED_ITEM.status
                    customMessage.DEFAULT_MESSAGE.status_code = customMessage.SUCCESS_CREATED_ITEM.status_code
                    customMessage.DEFAULT_MESSAGE.message = customMessage.SUCCESS_CREATED_ITEM.message
                    customMessage.DEFAULT_MESSAGE.response = filme
                
                    return customMessage.DEFAULT_MESSAGE 
                }else{ //erro 500 (Model)
                    return customMessage.ERROR_INTERNAL_SERVER_MODEL
                    // customMessage.DEFAULT_MESSAGE.status = customMessage.ERROR_INTERNAL_SERVER_MODEL.status
                    // customMessage.DEFAULT_MESSAGE.status_code = customMessage.ERROR_INTERNAL_SERVER_MODEL.status_code
                    // customMessage.DEFAULT_MESSAGE.message = customMessage.ERROR_INTERNAL_SERVER_MODEL.message
                }

            }
        }else{
            return customMessage.ERROR_CONTENT_TYPE //415
        }

    } catch (error) {
        return customMessage.ERROR_INTERNAL_SERVER_CONTROLLER //500 (CONTROLLER)
    }

}

// Função para atualizar um filme
const atualizarFilme = async function(filme, id, contentType){
    let customMessage = JSON.parse(JSON.stringify(configMessages))

    try {
        
        //Validação para verificar se o conteudo do body é um JSON
        if(String(contentType).toUpperCase() == 'APPLICATION/JSON'){

            //Chama a função para buscar filme e validar se o id esta correto,se o id existe no bd, e se o filme existe
            let resultBuscarFilme = await buscarFilme(id)

            if(resultBuscarFilme.status){
                //Chama a função para validar os dados de alteração do filme
                let validar = await validarDados(filme)

                if(!validar){

                    //Adiciona um atributo id no json de filme para enviar ao DAO um unico objeto
                    filme.id = Number(id)

                    //Chama a função para atualizar o filme no bd
                    let result = await filmeDAO.updateFilme(filme)

                    if(result){
                        customMessage.DEFAULT_MESSAGE.status      = customMessage.SUCCESS_UPDATED_ITEM.status
                        customMessage.DEFAULT_MESSAGE.status_code = customMessage.SUCCESS_UPDATED_ITEM.status_code
                        customMessage.DEFAULT_MESSAGE.message     = customMessage.SUCCESS_UPDATED_ITEM.message
                        customMessage.DEFAULT_MESSAGE.response    = filme

                        return customMessage.DEFAULT_MESSAGE //200 atualizado
                    }else{
                        return customMessage.ERROR_INTERNAL_SERVER_MODEL //500 model
                    }

                }else{
                    return validar //400 validação dos campos do bd
                }

            }else{
                return resultBuscarFilme //400(id invalido) ou 404(não encontrado) ou 500
            }

        }else{
            return customMessage.ERROR_CONTENT_TYPE //415
        }

    } catch (error) {
        return customMessage.ERROR_INTERNAL_SERVER_CONTROLLER //500 (Controller)
    }
}

// Função para retornar todos os filmes
const listarFilme = async function(){
    
    //Cria uma copia dos JSON do arquivo de configuração de mensagens
    let customMessage = JSON.parse(JSON.stringify(configMessages))

    try {
        //Chama a função do DAO para retornar a lista de filme do banco de dados
        let result = await filmeDAO.selectAllFilme()

        //Validação para verificar se o dao conseguiu processar o script no bd
        if(result){

            //Validação para verificar se o conteudo do arrray tem dados de 
            //retorno ou se esta vazio
            if(result.length > 0){

                customMessage.DEFAULT_MESSAGE.status = customMessage.SUCCESS_RESPONSE.status
                customMessage.DEFAULT_MESSAGE.status_code = customMessage.SUCCESS_RESPONSE.status_code
                customMessage.DEFAULT_MESSAGE.response.count = result.length
                customMessage.DEFAULT_MESSAGE.response.filme = result

                return customMessage.DEFAULT_MESSAGE //200

            }else{
                return customMessage.ERROR_NOT_FOUND //404
            }

        }else{
            return customMessage.ERROR_INTERNAL_SERVER_MODEL //500 (MODEL)
        }
        
    } catch (error) {
        return customMessage.ERROR_INTERNAL_SERVER_CONTROLLER //500 (CONTROLLER)
    }
}

// Função para retornar um filme filtrando pelo ID
const buscarFilme = async function(id){

    //Cria uma copia dos JSON do arquivo de configuração de mensagens
    let customMessage = JSON.parse(JSON.stringify(configMessages))

    try {

        //validaçãopara garantir que o id seja um numero valido
        if(id == undefined || String(id).replaceAll(' ', '') == '' || id == null || isNaN(id) || id <= 0){

            customMessage.ERROR_BAD_REQUEST.field = '[ID] INVALIDO'
            return customMessage.ERROR_BAD_REQUEST //400 

        }else{

            //Chama a função do DAO para pesquisar filme pelo id
            let result = await filmeDAO.selectByIdFilme(id)

            //Validação para verificar se o DAO retornou dados ou um false
            if(result){

                //Validação para verificar se o DAO tem algum dado no Array
                if(result.length > 0){

                    customMessage.DEFAULT_MESSAGE.status = customMessage.SUCCESS_RESPONSE.status
                    customMessage.DEFAULT_MESSAGE.status_code = customMessage.SUCCESS_RESPONSE.status_code
                    customMessage.DEFAULT_MESSAGE.response.filme = result

                    return customMessage.DEFAULT_MESSAGE //200 

                }else{
                    return customMessage.ERROR_NOT_FOUND //404
                }

            }else{
                return customMessage.ERROR_INTERNAL_SERVER_MODEL //500 MODEL
            }
            
        }

    } catch (error) {
        return customMessage.ERROR_INTERNAL_SERVER_CONTROLLER //500 CONTROLLER
    }
}

// Função para excluir um filme
const excluirFilme = async function(id){

    let customMessage = JSON.parse(JSON.stringify(configMessages))

    try {

        let resultBuscarFilme = await buscarFilme(id)

        if(resultBuscarFilme.status){

            let result = await filmeDAO.deleteFilme(id)
            if(result){
                return customMessage.SUCCESS_DELETED_ITEM//204 ou 200

            }else{
                return customMessage.ERROR_INTERNAL_SERVER_MODEL //500 Model
            }

        }else{
            return resultBuscarFilme //400 id invalido, 404 não encontrado ou 500 
        }

    } catch (error) {
        return customMessage.ERROR_INTERNAL_SERVER_CONTROLLER //500 CONTROLLER
    }
}

const validarDados = async function(filme){

    let customMessage = JSON.parse(JSON.stringify(configMessages))

    if(filme.nome == undefined || filme.nome == '' || filme.nome == null || filme.nome.length > 80){
        customMessage.ERROR_BAD_REQUEST.field = '[NOME] INVALIDO'
        return customMessage.ERROR_BAD_REQUEST

    }else if(filme.sinopse == undefined || filme.sinopse == '' || filme.sinopse == null){
        customMessage.ERROR_BAD_REQUEST.field = '[SINOPSE] INVALIDO'
        return customMessage.ERROR_BAD_REQUEST

    }else if(filme.capa == undefined || filme.capa == '' || filme.capa == null || filme.capa.length > 255){
        customMessage.ERROR_BAD_REQUEST.field = '[CAPA] INVALIDO'
        return customMessage.ERROR_BAD_REQUEST

    }else if(filme.data_lancamento == undefined || filme.data_lancamento == '' || filme.data_lancamento == null || filme.data_lancamento.length != 10){
        customMessage.ERROR_BAD_REQUEST.field = '[DATA DE LANÇAMENTO] INVALIDO'
        return customMessage.ERROR_BAD_REQUEST

    }else if(filme.duracao == undefined || filme.duracao == '' || filme.duracao == null || filme.duracao.length < 5){
        customMessage.ERROR_BAD_REQUEST.field = '[DURAÇÃO] INVALIDO'
        return customMessage.ERROR_BAD_REQUEST
    
    }else if(filme.valor == undefined || isNaN(filme.valor) || filme.valor.length > 5){
        customMessage.ERROR_BAD_REQUEST.field = '[VALOR] INVALIDO'
        return customMessage.ERROR_BAD_REQUEST

    }else if(filme.avaliacao == undefined || isNaN(filme.avaliacao) || filme.avaliacao.length > 3){
        customMessage.ERROR_BAD_REQUEST.field = '[AVALIAÇÃO] INVALIDO'
        return customMessage.ERROR_BAD_REQUEST

    }else{
        return false
    }

}

module.exports = {
    inserirNovoFilme,
    atualizarFilme,
    listarFilme,
    buscarFilme,
    excluirFilme
}