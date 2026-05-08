/*
Objetivo: Arquivo responsavel pelo CRUD de dados do filme no banco de dados MySQL
Data: 8/05/2026
Autor: Marcel
Versão: 1.0
*/

//Import da biblioteca para manipular dados no banco de dados mysql
const knex = require('knex')

//Import do arquivo de configuração para acesso ao banco de dados
const knexDatabaseConfig = require('../../database_config/knexConfig.js')

// Criar a conexão com o BD Mysql conforme o arquivo de configuração
const knexConection = knex(knexDatabaseConfig.development)

const insertGenero = async function(genero){
    try {
        
    } catch (error) {
        return false
    }
}

const updateGenero = async function(genero){
    
}

const selectAllGenero = async function(){
    
}

const selectByIdGenero = async function(id){

}

const deleteGenero = async function(id){

}