function sortear(){
    var sorteio = document.getElementById('resultado')
    var sexo = document.getElementsByName('sex')
    var animal = document.getElementsByName('pet')
    var qualidade = document.getElementsByName('qualidade')
    var professor = document.getElementsByName('teacher')
    var qualSexo = ''
    var qualAnimal = ''
    var qualQualidade = ''
    var qualProfessor = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(sexo[0].checked && animal[0].checked && qualidade[0].checked && professor[0].checked){
        qualSexo = 'Masculino'
        qualAnimal = 'Cervo'
        qualQualidade = 'Coragem'
        qualProfessor = 'Alvo Dumbledore'

        img.setAttribute('src', 'foto-grifinoria.png' )
    }
    
    sorteio.appendChild(img)
}