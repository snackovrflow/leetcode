/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    
    let numLeft = num;
    let roman = ""
    
    while (numLeft > 0) {
        if (numLeft >= 1000) {
            helper(numLeft, roman, 1000, "M")
        } else if (numLeft >= 500) {
            helper(numLeft, roman, 500, "D")
        } else if (numLeft >= 100) {
            helper(numLeft, roman, 100, "C")
        } else if (numLeft >= 50) {
            helper(numLeft, roman, 50, "L")
        } else if (numLeft >= 10) {
            helper(numLeft, roman, 10, "X")
        } else if (numLeft >= 5) {
            helper(numLeft, roman, 5, "V")
        } else if (numLeft >= 1) {
            helper(numLeft, roman, 1, "I")
        }
    }

    console.log('roman', roman)
    return roman;
};
    
var helper = function(numLeft, roman, value, letter) {
    let amount = numLeft/value;
    console.log('amount', amount)
    numLeft = numLeft%value
    for (let i=0; i<amount; i++) {
        roman += letter
    }

    console.log("-----end")
}

let test = 3;
intToRoman(test);