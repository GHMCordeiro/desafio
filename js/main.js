function somar(){
    var num = Number(window.document.getElementById('num').value)
    var resultado = window.document.getElementById('resultado')
    let soma = 0

    for(let i = 0; i < num; i++){
        if(i % 3 === 0 || i % 5 === 0){
            soma += i
        }
    }

    resultado.innerHTML = soma
}