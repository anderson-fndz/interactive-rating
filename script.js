var container = document.querySelector('.container')

function insert(num){
    var value = num
    var texto = document.querySelector('#text')

    texto.innerHTML = `You selected ${value} out of 5`
}

function clickBtn(){
    container.style.display = 'none'
}