/*
Objetivo: Arquivo responsavel pela validação, tratamento, manipulação de dados para realizar o CRUD de genero
Data: 17/04/2026
Autor: Leandro
Versão: 1.0
*/

const configMessages = require('../modulo/configMessages.js')

const generoDAO = require('../../model/DAO/genero/genero.js')

const inserirNovoGenero = async function(genero, contentType){

    //Cria uma copia das mensagens de resposta
    let customMessage = JSON.parse(JSON.stringify(configMessages))

    try {
        
        //Verificação do tipo de dados ou seja conferindo se é uma aplicação json (APLICATION/JSON) 
        if(String(contentType).toUpperCase() == 'APPLICATION/JSON'){
    
            //Validando o argumento genero
            let validar = await validarDados(genero)

            //Se a validação apontar algo ela retorna oque ela apontou
            if(validar){
                return validar

                //Se a validação não apontou então ela fará:
            }else{

                //A tratativa e o insert do genero no DAO para o banco e o retorno sera guardado em result
                let result = await generoDAO.insertGenero( await tratarDados(genero))

                //Se o retorno do result for o desejado:
                if(result){

                    //Cria o id no Json do filme e adiciona o id gerado no DAO
                    genero.id = result
                    customMessage.DEFAULT_MESSAGE.status = customMessage.SUCCESS_CREATED_ITEM.status
                    customMessage.DEFAULT_MESSAGE.status_code = customMessage.SUCCESS_CREATED_ITEM.status_code
                    customMessage.DEFAULT_MESSAGE.message = customMessage.SUCCESS_CREATED_ITEM.message
                    customMessage.DEFAULT_MESSAGE.response = genero

                    return customMessage.DEFAULT_MESSAGE //201
                }else{
                    return customMessage.ERROR_INTERNAL_SERVER_MODEL //500
                }
            }
            
        }else{
            return customMessage.ERROR_CONTENT_TYPE //415
        }
    } catch (error) {
        return customMessage.ERROR_INTERNAL_SERVER_CONTROLLER //500
    }
    
}

const listarGenero = async function () {
    let customMessage = JSON.parse(JSON.stringify(configMessages))

    try {
        //Retorna a lista de generos do DB
        let result = await generoDAO.selectAllGenero()

        //Se o retorno for o esperado
        if(result){
            
            //Validamos se o retorno (objeto json) nos trouxe algo e se ele trouxe:
            if(result.length > 0){

                customMessage.DEFAULT_MESSAGE.status = customMessage.SUCCESS_RESPONSE.status
                customMessage.DEFAULT_MESSAGE.status_code = customMessage.SUCCESS_RESPONSE.status_code
                customMessage.DEFAULT_MESSAGE.response.count = result.length
                customMessage.DEFAULT_MESSAGE.response.genero = result

                return customMessage.DEFAULT_MESSAGE

            }else{
                return configMessages.ERROR_NOT_FOUND
            }

        }else{
            return customMessage.ERROR_INTERNAL_SERVER_MODEL
        }

    } catch (error) {
        return customMessage.ERROR_INTERNAL_SERVER_CONTROLLER
    }

}

const buscarGenero = async function (id) {
    let customMessage = JSON.parse(JSON.stringify(configMessages))

    try {

        if(id == undefined || String(id).replaceAll(' ','') == "" || id == null || isNaN(id) || id <= 0 ){
            customMessage.ERROR_BAD_REQUEST.field = "[ID] INVALIDO"
            return customMessage.ERROR_BAD_REQUEST
        }
        
    } catch (error) {
        return customMessage.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

const atualizarGenero = async function (genero, id, contentType) {

    let customMessage = JSON.parse(JSON.stringify(configMessages))

    try {

        if(String(contentType).toUpperCase() == 'APPLICATION/JSON'){
            
        }
        
    } catch (error) {
        return customMessage.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

const excluirGenero = async function (id) {
    let customMessage = JSON.parse(JSON.stringify(configMessages))
}

const validarDados = async function(genero){

    let customMessage = JSON.parse(JSON.stringify(configMessages))

    if(genero.nome == undefined || genero.nome == "" || genero.nome == null || genero.nome.length > 40){
        customMessage.ERROR_BAD_REQUEST.field = '[NOME] INVALIDO'
        return customMessage.ERROR_BAD_REQUEST 
    }else{
        return false
    }
}

const tratarDados = async function(genero) {
    genero.nome            = genero.nome.replaceAll("'", "")

    return genero
} 


module.exports = {
    inserirNovoGenero,
    atualizarGenero,
    listarGenero,
    buscarGenero,
    excluirGenero
}