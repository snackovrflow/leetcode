/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    let valids = {
        a: 1,
        b: 1,
        c: 1,
        d: 1,
        e: 1,
        f: 1,
        g: 1,
        h: 1,
        i: 1,
        j: 1,
        k: 1,
        l: 1,
        m: 1,
        n: 1,
        o: 1,
        p: 1,
        q: 1,
        r: 1,
        s: 1,
        t: 1,
        u: 1,
        v: 1,
        w: 1,
        x: 1,
        y: 1,
        z: 1,
        0: 1,
        1: 1,
        2: 1,
        3: 1,
        4: 1,
        5: 1,
        6: 1,
        7: 1,
        8: 1,
        9: 1
    }
    let clean = ""
    for (let i=0; i<s.length; i++) {
        if (valids[s[i]]) {
            clean += s[i];
        }
    }

    let halfway = Math.floor(clean.length/2);
    for (let i=0; i<halfway; i++) {
        let first = clean[i];
        let last = clean[clean.length-1-i];
        if (first !== last) {
            console.log('false')
            return false
        }
    }
    console.log('true')
    return true
};