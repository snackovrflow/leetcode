/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    x = x + ''
    let result = '';
    let isNegative = false;
    let startIndex = 0;
    if (x[0] === "-") {
        isNegative = true;
        startIndex = 1
    }

    for (let i=x.length-1; i>=startIndex; i--) {
        // console.log('i', i)
        result += x[i]
    }
    
    if (isNegative) {
        result = '-' + result
    }
    
    let res = Number(result)
    console.log(res)
    
    if (res > (Math.pow(2, 31) -1) || res < Math.pow(-2, 31)) {
        return 0
    }
    return res;
};
