module.exports = function toReadable (number) {
    if (number===0) return "zero"
    const digits = {
      0: "", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine"
    }
    const secDigits = {
      0: "ten", 1: "eleven", 2: "twelve", 3: "thirteen", 4: "fourteen", 5: "fifteen", 6: "sixteen", 7: "seventeen", 8: "eighteen", 9: "nineteen"
    }
    const otherSecondDigits = {
      2: "twenty", 3: "thirty", 4: "forty", 5: "fifty", 6: "sixty", 7: "seventy", 8: "eighty", 9: "ninety"
    }
    
    const tempArray = String(number).split('')
    const tAL = tempArray.length
    if (tempArray.length<3) {
        for (let i=1; i<=(3-tAL); i++) {tempArray.unshift(0)}
    }
  
    let resultPhrase = []
  
    if (tempArray[0]) resultPhrase.push(digits[Number(tempArray[0])] + " hundred")
    if (tempArray[1] && Number(tempArray[1])!==0) {
      if (Number(tempArray[1])===1) {
          resultPhrase.push(" " + secDigits[Number(tempArray[2])])
      } else {
          resultPhrase.push(" " + otherSecondDigits[Number(tempArray[1])] + " " + digits[Number(tempArray[2])])
      }
    } else {
        resultPhrase.push(" " + digits[Number(tempArray[2])])
    }
    return resultPhrase.join('').trim()
}