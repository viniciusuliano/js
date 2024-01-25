function mostrar(){
var conteudo=window.document.getElementById('conteudo')
var img=window.document.getElementById('imagem')
var data=new Date()
var hora= data.getHours()
 conteudo.innerHTML=`Agora são ${hora} horas.`
 if(hora > 0 && hora <=12){
   img.src = 'manha.png'
   document.body.style.background = '#08b9ff'
 }else if(hora >= 12 && hora <= 18){
   img.src = 'tarde1.png'
   document.body.style.background = '#ffda3b'
 }else{
   img.src = 'noite.png'
   document.body.style.background = '#11373d'
 }

}