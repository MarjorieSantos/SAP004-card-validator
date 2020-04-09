import validator from './validator.js';

let name = document.getElementById("name")
let name_card = document.getElementById("name_card")
let numCard = document.getElementById("cartao")
let showNumCard = document.getElementById("showNumCard")
let validar = document.getElementById("btn-validar")
let result = document.getElementById("result")


numCard.oninput = function(){
    showNumCard.innerHTML = validator.maskify(numCard.value)  
}

name.oninput = function(){
    name_card.innerHTML = name.value
}

validar.onclick = function(){
    if (numCard.value == ""){
        alert('Digite os 16 números da tarjeta')
    } else{
        if(validator.isValid(numCard.value)){
            result.innerHTML = "Valid Card Number"
        } else{
            result.innerHTML = "Invalid Card Number"
        }
        result.style.display = "block"
    }
}





