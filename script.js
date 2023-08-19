/*var container = document.querySelector('.container')

function insert(num){
    var value = num
    var texto = document.querySelector('#text')

    texto.innerHTML = `You selected ${value} out of 5`
}

function clickBtn(){
    container.style.display = 'none'
}*/
let containerDisplay = document.querySelector('.container')
let textSelected = document.querySelector('#text')
let form = document.querySelector('#form')
let modal = document.querySelector('.modal')

form.addEventListener('submit', event => {
    event.preventDefault();
    rating = form.inputradio

    let value
    let falso = 0

    for (let index = 0; index < rating.length; index++) {
        if (rating[index].checked === true) {
            value = rating[index].value
            containerDisplay.style.display = 'none'
            textSelected.innerHTML = `You selected ${value} out of 5`
            break
        } else {
            falso = falso + 1
        }
    }

    if(falso === 5){
        modal.style.display = 'flex'
    }
    /*
    rating.forEach(input => {
    
            let value
    
            if (input.checked === true) {
                value = input.value
                containerDisplay.style.display = 'none'
                textSelected.innerHTML = `You selected ${value} out of 5`
            }
        });*/
})

function closeModal(){
    modal.style.display = 'none'
}