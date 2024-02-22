const multiplicador = document.getElementById("botao").addEventListener('click', () =>{
    let n = Number(document.getElementById('numero').value)
    for(let c = 1; c<=10; c++){
        let t = document.getElementById('tabuada')
        var item = document.createElement('option')
        item.text = ` ${n} X ${c}  = ${n*c}`
        t.appendChild(item)
    }
})  