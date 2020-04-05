const validator = {
  isValid: function(creditCardNumber){
    let reverse = creditCardNumber.reverse()
    let numPares = []
    let numImpar = []
    let novoArray = []
    for (let i = 1; i < reverse.length; i += 2) {
        let dobroNumero = reverse[i] * 2
    
        if (dobroNumero >= 10) {
            let numeroSeparado = Array.from(dobroNumero.toString())
            let novoNumero = parseInt(numeroSeparado[0]) + parseInt(numeroSeparado[1])
            numPares.push(novoNumero)
        } else {
            numPares.push(dobroNumero)
        }
    }
    
    for (let i = 0; i < reverse.length; i += 2) {
        numImpar.push(parseInt(reverse[i]))
    }
    
    novoArray = [...numPares, ...numImpar]
    
    let soma = 0;
    for (let i = 0; i < novoArray.length; i++) {
        soma += novoArray[i]
    }
    
    
    if(soma%10 == 0){
        console.log('seu cartão é valido')
    } else{
        console.log("seu cartão não é válido")
    }

    return soma%10 == 0

  }

};

export default validator;
