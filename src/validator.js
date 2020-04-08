const validator = {
  isValid: function (creditCardNumber) {
    let reverse = Array.from(creditCardNumber).reverse()
    let numPares = []
    let numImpar = []
    let newArray = []
    for (let i = 1; i < reverse.length; i += 2) {
      let doubleNumber = reverse[i] * 2

      if (doubleNumber >= 10) {
        let numeroSeparado = Array.from(doubleNumber.toString())
        let newNumber = parseInt(numeroSeparado[0]) + parseInt(numeroSeparado[1])
        numPares.push(newNumber)
      } else {
        numPares.push(doubleNumber)
      }
    }

    for (let i = 0; i < reverse.length; i += 2) {
      numImpar.push(parseInt(reverse[i]))
    }

    newArray = [...numPares, ...numImpar]

    let sum = 0;
    for (let i = 0; i < newArray.length; i++) {
      sum += newArray[i]
    }

    return sum % 10 == 0
  },

  maskify: function (creditCardNumber) {
    let maskifyNumber = ""
    let separator = " "
    let verifica = 0
    for (let i = 0; i < creditCardNumber.length - 4; i++) {
      verifica++
      maskifyNumber += "#"
      if((verifica % 4) == 0){
        maskifyNumber += separator
      }

    }

    for (var j = 4; j >= 1; j--) {
      var lastCharacter = creditCardNumber.charAt(creditCardNumber.length - j);
      var lastNums = lastCharacter;
      maskifyNumber += lastNums;
    }

    return maskifyNumber
  }

};

export default validator;
