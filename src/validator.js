const validator = {
  isValid: function (creditCardNumber) {
    let reverse = Array.from(creditCardNumber).reverse()
    let numPairs = []
    let numOdd = []
    let newArray = []
    for (let i = 1; i < reverse.length; i += 2) {
      let doubleNumber = reverse[i] * 2

      if (doubleNumber >= 10) {
        let separateNumber = Array.from(doubleNumber.toString())
        let newNumber = parseInt(separateNumber[0]) + parseInt(separateNumber[1])
        numPairs.push(newNumber)
      } else {
        numPairs.push(doubleNumber)
      }
    }

    for (let i = 0; i < reverse.length; i += 2) {
      numOdd.push(parseInt(reverse[i]))
    }
    newArray = [...numPairs, ...numOdd]

    let sum = 0;
    for (let i = 0; i < newArray.length; i++) {
      sum += newArray[i]
    }
    return sum % 10 == 0
  },

  maskify: function (creditCardNumber) {
    let maskifyNumber = ""
    let separator = " "
    let check = 0
    for (let i = 0; i < creditCardNumber.length - 4; i++) {
      check++
      maskifyNumber += "#"
      if ((check % 4) == 0) {
        maskifyNumber += separator
      }
    }

    for (let j = 4; j >= 1; j--) {
      let lastCharacter = creditCardNumber.charAt(creditCardNumber.length - j);
      let lastNumber = lastCharacter;
      maskifyNumber += lastNumber;
    }
    return maskifyNumber
  }
};

export default validator;
