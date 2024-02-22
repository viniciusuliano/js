let b = document.getElementById('botao').addEventListener('click', () =>{
    let n = Number(document.getElementById('numero').value)
    let fat = 1
    for(let c = n; c>=1; c--){
        let r = document.getElementById('resultado')
        fat *=c
        r.textContent = `${fat}`
    }
})