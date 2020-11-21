/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let parenMatch = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    }
    
    for (var i=0; i<s.length; i++) {
        let current = s[i];
        let complement = parenMatch[current];
        if (!complement) {
            stack.push(current);
        } else {
            let lastOpeningParen = stack.pop();
            if (lastOpeningParen !== complement) {
                return false;
            }
        }
    }
    
    return !stack.length
};