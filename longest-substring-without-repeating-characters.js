/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longestCount = 0;
    let current = [];

    if (s.length === 1) {
        return 1;
    }
    
    for (let i=0; i<s.length; i++) {
        let currentLetter = s[i];
        console.log(s[i])
        if (currentLetter === " ") {
            currentLetter = "sp"
        }
        if (current.includes(currentLetter)) {
            if (current.length > longestCount) {
                longestCount = current.length;
            }
            let indexOfFirstLetter = current.indexOf(currentLetter);
            current = current.slice(indexOfFirstLetter + 1)
        }
        current.push(currentLetter)
        console.log('current', current);
    }
    return Math.max(longestCount, current.length);
};

// let test = "pwwkew";
// let test = " "
// let test = "au"
// let test = "aab"
let test = "dvdf"
lengthOfLongestSubstring(test);
