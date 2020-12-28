/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) return
    
    let index;
    let firstWord = strs[0]
    
    for (let i=0; i<firstWord.length; i++) {
        for (let j=1; j<strs.length; j++) {
            let currentWord = strs[j];
            console.log('currentWord', currentWord)
            if (currentWord[i] === firstWord[i]) {
                index = i
            }
        }
    }
    if (index) {
        let res = firstWord.slice(0, index+1)
        console.log('res: ', res)
        return res
    } else {
        console.log("none")
        return ""
    }
};

let test = ["flower","flow","flight"]
longestCommonPrefix(test);