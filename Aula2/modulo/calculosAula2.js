function calcularMedia(nome, valor1, valor2, valor3, valor4){
    let nomeAluno = nome
    let nota1 = Number(valor1)
    let nota2 = Number(valor2)
    let nota3 = Number(valor3)
    let nota4 = Number(valor4)

    //validação de entrada vazia
    if(nomeAluno == '' || nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '' ||
        nota1 < 0 || nota1 > 100 || nota2 < 0 || nota2 > 100 || nota3 < 0 || nota3 > 100 || nota4 < 0 || nota4 > 100 ||
        (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4))  
    ){
    //validação de numeros abaixo de 0 ou acima de 1000
        return false

    //validação de entradas somente de numeros
    //isNaN() permite a validação de numeros ou letras
    

    }else {
        
        //Calculando a media
        let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4))/4

        return Number(media.toFixed(2))
    }
}

function analiseStatusAluno(mediaAluno){
    let analiseMedia = Number(mediaAluno)

    let statusAluno 

        if(analiseMedia == '' || analiseMedia <= 0 || isNaN(analiseMedia)){
        return false

        }else{
            if(media > 69.99 ){ statusAluno = "Aprovado"

            } else if(media < 50){ statusAluno = "Reprovado"
    
            }else{ statusAluno = "Recuperação"}

            return statusAluno
        }
    

}

module.exports = {calcularMedia , analiseStatusAluno}