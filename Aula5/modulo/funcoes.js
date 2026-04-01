const dadosUtilizados = require('./estados_cidades')

const dados  = dadosUtilizados

function getListaDeEstados(){ 
    
    let conteudo
    let resposta = []

    dados.listaDeEstados.estados.forEach(function(itemEstado){
        resposta.push (itemEstado.sigla)
    })

    conteudo = {
        "uf"            : resposta,
        "quantidade"    : resposta.length
    }

    if(conteudo.quantidade == 0 || conteudo.uf == null){
    return false
    }else { return conteudo }
        
}

function getDadosEstado(siglas){

    let siglas2 = siglas.toUpperCase()

    let conteudo = {
        "uf"        : null ,
        "descricao" : null ,
        "capital"   : null ,
        "regiao"    : null
    } 

    dados.listaDeEstados.estados.forEach(function(itemEstado){

        if(itemEstado.sigla == siglas2){
            conteudo.uf = itemEstado.sigla
            conteudo.descricao = itemEstado.nome
            conteudo.capital = itemEstado.capital
            conteudo.regiao = itemEstado.regiao
        }

    })

    if(conteudo.uf == null 
        || conteudo.descricao == null 
        || conteudo.capital == null
        || conteudo.regiao == null){
        return false

    }else{ return conteudo }

}

function getCapitalEstado(siglas){

    let siglas2 = siglas.toUpperCase()

    let conteudo = {
        "uf"        : null ,
        "descricao" : null ,
        "capital"   : null 
    }

    dados.listaDeEstados.estados.forEach(function(itemEstado){
        if(itemEstado.sigla == siglas2){
            conteudo.uf = itemEstado.sigla
            conteudo.descricao = itemEstado.nome
            conteudo.capital = itemEstado.capital
        }
    })

    if(conteudo.uf == null 
        || conteudo.descricao == null 
        || conteudo.capital == null
        || siglas2 == ""){
        return false

    }else{ return conteudo }

}

function getEstadoRegiao(regioes){

    const regioes2 = regioes.toUpperCase()
    const estados = []
    let regiao = null

    dados.listaDeEstados.estados.forEach(function(item) {

        if (item.regiao.toUpperCase() === regioes2) {

            estados.push({
                uf          : item.sigla,
                descricao   : item.nome
            })

            regiao = item.regiao
        }
    })

    if(regioes == ""){
        return false
    }else{
        return {
            regiao,
            estados 
        }
    }
}

function getCapitalPais(){

    const capitais2 = []

    dados.listaDeEstados.estados.forEach(function (itemEstado){

        if(itemEstado.capital_pais){

            capitais2.push({
                capital_atual               : itemEstado.capital_pais.capital,
                uf                          : itemEstado.sigla,
                descricao                   : itemEstado.nome,
                capital                     : itemEstado.capital,
                regiao                      : itemEstado.regiao,
                capital_pais_ano_inicio     : itemEstado.capital_pais.ano_inicio,
                capital_pais_ano_termino    : itemEstado.capital_pais.ano_fim
            })

        }

    })

    if(capitais2 == 0){
        return false
    }else{
    return {capitais : capitais2}}
}

function getCidades(siglas){

    let siglas2 = siglas.toUpperCase()

    let conteudo = null
    let resposta = []

    dados.listaDeEstados.estados.forEach(function(itemEstado){

        if(itemEstado.sigla == siglas2){
            conteudo = {
            "uf"            : itemEstado.sigla,
            "descricao"     : itemEstado.nome,
            "quantidade"    : itemEstado.cidades.length,
            }

            itemEstado.cidades.forEach(function(itemCidade){
            resposta.push (itemCidade.nome)
            })

        }

    })

    conteudo.cidades = resposta

    return conteudo

}

// console.log(getListaDeEstados())
// console.log(getDadosEstado('sp'))
// console.log(getCapitalEstado('ac'))
// console.log(getEstadoRegiao("sul"))
// console.log(getCapitalPais())
// console.log(getCidades("ac"))

module.exports = { getListaDeEstados, getCapitalEstado, getCapitalPais, getCidades, getDadosEstado, getEstadoRegiao}