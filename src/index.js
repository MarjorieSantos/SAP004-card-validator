import validator from './validator.js';

let numCard = document.getElementById("cartao")
let showNumCard = document.getElementById("showNumCard")
let validar = document.getElementById("btn-validar")
let result = document.getElementById("result")


numCard.oninput = function(event){
    showNumCard.innerHTML = validator.maskify(numCard.value)  
}

validar.onclick = function(){
    console.log(numCard.value)
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





