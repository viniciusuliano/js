let bt = document.getElementById('botao').addEventListener('click', () =>{
    for(let i =10; i >= 1; i--){
        let r = document.getElementById('resultado')
        r.textContent += ` ${i}`
    }
})