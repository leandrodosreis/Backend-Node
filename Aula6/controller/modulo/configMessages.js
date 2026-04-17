/*
Objetivo: Arquiuvo responsavel pela padronixação das mensagens e status code do projeto de filmes
Data: 17/04/2026
Autor Leandro
Versão: 1.0
*/

//Padrinização dos retornos da API
const DEFAULT_MESSAGE = {
    api_description: 'API para controlar projeto de Filmes',
    development: 'Leandro dos Reis',
    version: '1.0.4.26',
    status: Boolean,
    status_code: Number,
    response: {}
}

//Mensagens de erro do projeto de filmes
const ERROR_BAD_REQUEST = {status: false, status_code: 400, message: 'Não foi possiivel processar a requisição devido a erro de entrada de dados.'}

//Mensagens de SUCESSO do projeto de filmes
const SUCCESS_CREATED_ITEM = {status: true, status_code: 201, message: 'Item inserido com sucesso!'}

const ERROR_INTERNAL_SERVER_MODEL = {status: false, status_code: 500, message: 'Não foi possivel processar a requisição devido a um erro interno no servidor [MODEL]'}

module.exports = {
    DEFAULT_MESSAGE,
    ERROR_BAD_REQUEST,
    SUCCESS_CREATED_ITEM,
    ERROR_INTERNAL_SERVER_MODEL
}