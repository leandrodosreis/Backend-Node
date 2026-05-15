/*
Objetivo: Arquivo responsavel pela validação, tratamento, manipulação de dados para realizar o CRUD de classificacao
Data: 15/05/2026
Autor: Leandro
Versão: 1.0
*/

const classificacaoDAO = require('../../model/DAO/classificacao/classificacao.js')

const configMessages = require('../modulo/configMessages.js')

const inserirNovaClassificacao = async function (classificacao, contentType) {

    let customMessage = JSON.parse(JSON.stringify(configMessages))

    try {
    
        if(String(contentType).toUpperCase() == 'APPLICATION/JSON'){

            let validar = await validarDados(classificacao)

            if(validar){

                return validar
        
            }else{

                let result = await classificacaoDAO.InsertClassificacao(await tratarDados(classificacao))

                if(result){

                    classificacao.id = result
                    customMessage.DEFAULT_MESSAGE.status = customMessage.SUCCESS_CREATED_ITEM.status
                    customMessage.DEFAULT_MESSAGE.status_code = customMessage.SUCCESS_CREATED_ITEM.status_code
                    customMessage.DEFAULT_MESSAGE.message = customMessage.SUCCESS_CREATED_ITEM.message
                    customMessage.DEFAULT_MESSAGE.response = classificacao

                    return customMessage.DEFAULT_MESSAGE

                }else{
                    return customMessage.ERROR_INTERNAL_SERVER_MODEL
                }
            }

        }else{

            return customMessage.ERROR_CONTENT_TYPE

        }
        
    } catch (error) {
        return customMessage.ERROR_INTERNAL_SERVER_CONTROLLER //500
    }
}

const listarClassificacao = async function () {
    
}

const buscarClassificacao = async function (id) {
    
}

const atualizarClassificacao = async function (classificacao, id, contentType) {
    
}

const excluirClassificacao = async function (id) {
    
}

const validarDados = async function (classificacao) {
    
    let customMessage = JSON.parse(JSON.stringify(configMessages))

    try {
        
        if(classificacao.publico == undefined || classificacao.publico == "" || classificacao.publico == null || classificacao.publico.legth > 35){

            customMessage.ERROR_BAD_REQUEST.field = '[PUBLICO] INVALIDO'

            return customMessage.ERROR_BAD_REQUEST

        }else{

            return false
        }

    } catch (error) {
        return false
    }
}

const tratarDados = async function (classificacao) {
    classificacao.publico            = classificacao.publico.replaceAll("'", "")

    return classificacao
}

module.exports = {
    inserirNovaClassificacao,
    listarClassificacao,
    buscarClassificacao,
    atualizarClassificacao,
    excluirClassificacao
}