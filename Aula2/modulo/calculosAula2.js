function calcularMedia(nome, valor1, valor2, valor3, valor4){
    let nomeAluno
    let nota1 = Number(valor1)
    let nota2 = Number(valor2)
    let nota3 = Number(valor3)
    let nota4 = Number(valor4)

    //validação de entrada vazia
    if(nomeAluno == '' || nota1 == '' || nota2 == '' || nota3 == '' || nota4 == ''){
        console.log('ERRO: Existem campos obrigatorios que não foram preeenchidos')

    //validação de numeros abaixo de 0 ou acima de 1000
    nota1 < 0 || nota1 > 100 || nota2 < 0 || nota2 > 100 || nota3 < 0 || nota3 > 100 || nota4 < 0 || nota4 > 100 
        console.log('ERRO: Somente nota abaixo de 0 ou acima de 100')

    //validação de entradas somente de numeros
    //isNaN() permite a validação de numeros ou letras
    (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4))
        console.log('ERRO: Somente numeros são aceitos')

    }else {
    
        //Calculando a media
        let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4))/4

        return Number(media.toFixed(2))
    }
}






module.exports = {calcularMedia}