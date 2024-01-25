function mostrar(){
    var anoIdade=document.getElementById('ano')
    var data=new Date()
    var anos=data.getFullYear()
    var resultado=document.getElementById('Resultado')
    if(anoIdade.value.length == 0 || Number(anoIdade.value) > anos){
        resultado.innerHTML = 'Ano invalido'
    }else{
        var sexo = document.getElementsByName('sex')
        var idade = anos - Number(anoIdade.value)
        var verifcaSexo = ''    
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (sexo[0].checked) {    
            verifcaSexo = 'Masculino'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'foto-criança.png')
            } else if(idade > 10 && idade <= 40){
                img.setAttribute('src', 'foto-homem.png')
            }else{
                img.setAttribute('src', 'foto-idoso.png')
            }
        }
        else if(sexo[1].checked){
            verifcaSexo = 'Feminino'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'foto-menina.png')
            } else if(idade > 10 && idade <= 40){
                img.setAttribute('src', 'foto-mulher.png')
            }else{
                img.setAttribute('src', 'foto-idosa.png')
            }
        }        

        resultado.innerHTML = `Dectemos sexo ${verifcaSexo} e idade ${idade} anos`
        resultado.appendChild(img)
    } 
}


