document.getElementById('somar').addEventListener('click', () =>{
    var ini = Number(document.getElementById('inicia').value)
    var fin = Number(document.getElementById('final').value)
    var som = Number(document.getElementById('contador').value)

        for(let c = ini; c<=fin; c+=som){
        document.getElementById('mostrar').textContent += `${c}`
        console.log(c)
    }
    
});