/*d) Elaborar um programa que leia 2 notas de um aluno em uma disciplina.
Calcule e informe a média das notas.
Exemplo:
1ª Nota: 7.0
2ª Nota: 8.0
Média: 7.5*/


function media(){
    var n1 = document.getElementById('nota1')
    var n2 = document.getElementById('nota2')
    var media = document.getElementById('medias')

    var soma = Number(n1.value) + Number(n2.value)
    var mediaNotas = soma / 2

    if(mediaNotas >= 7){
        media.innerHTML = `Sua média é ${mediaNotas.toFixed(1)} e você foi aprovado`
    }else if(mediaNotas  >= 5 && mediaNotas <= 6){
        media.innerHTML = `Sua média é ${mediaNotas.toFixed(1)} e você está em exame`
    }else {
        `Sua média é ${mediaNotas.toFixed(1)} e você foi reprovado`
    }

}