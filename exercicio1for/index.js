function contar(){
    var inicia = document.getElementById('inicializador')
    var iniciaContagem = Number(inicia.value)
    var condicao = document.getElementById('condicao')
    var condicaoContagem = Number(condicao.value)
    var somatoria = document.getElementById('somador')
    var somatoriaContagem = Number(somatoria.value)
    var resultadoContagem = document.getElementById('resultado')
    if(condicao.value == 0 || somatoria.value == 0){
        resultadoContagem.innerHTML = 'Numero invalido'
    }else { 
        if(inicia < condicao){   
         for(c = iniciaContagem; c <= condicaoContagem; c+=somatoriaContagem){
            resultadoContagem.innerHTML += `${ c } \u{1F92F}`
            console.log(c)
        }
    }else{
        for(c = iniciaContagem; c>=condicaoContagem; c-=somatoriaContagem){
            resultadoContagem.innerHTML += `${c} \u{1F92F}`
            console.log(c)
        }
    }
}
}
