/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const values = {
        I: 1,
        V: 5,
        X: 10, 
        L: 50,
        C: 100,
        D: 500, 
        M: 1000
    }
    let result = 0;
    for (let i=0; i<s.length; i++) {
        let current = s[i];
        let next = s[i+1];
        if (values[current] < values[next]) {
            result -= values[current];
        } else {
            result += values[current];
        }
    }
    return result;
};