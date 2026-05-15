/*
Objetivo: Arquivo responsavel pelo CRUD de dados da classificacao no banco de dados MySQL
Data: 15/05/2026
Autor: Marcel
Versão: 1.0
*/

//Import da biblioteca para manipular dados no banco de dados mysql
const knex = require('knex')

//Import do arquivo de configuração para acesso ao banco de dados
const knexDatabaseConfig = require('../../database_config/knexConfig.js')

// Criar a conexão com o BD Mysql conforme o arquivo de configuração
const knexConection = knex(knexDatabaseConfig.development)

const InsertClassificacao = async function (classificacao) {
    
    try {
        
        let sql = `
        insert into tbl_classificacao (
                    publico
                    ) values (
                    '${classificacao.publico}'
        );`

        let result = await knexConection.raw(sql)

        if(result){
            return result[0].insertId
        }else{
            return false
        }
        
    } catch (error) {
        return false
    }
}

const selectAllClassificacao = async function () {
    
}

const selectByIdClassificacao = async function () {
    
}

const updateClassificacao = async function () {
    
}

const deleteClassificacao = async function () {
    
}

module.exports = {
    InsertClassificacao
}