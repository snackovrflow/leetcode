function binarySearch(target, nums) {
    
    let floorIndex = -1;
    let ceilingIndex = nums.length;

    
    while (ceilingIndex - floorIndex > 1) {
        let halfIndex = Math.floor((ceilingIndex - floorIndex)/2);
        let guessIndex = floorIndex + halfIndex;

        if (nums[guessIndex] === target) {
            return guessIndex;
        }

        if (target < nums[guessIndex]) {
            ceilingIndex = guessIndex;
        } else {
            floorIndex = guessIndex;
        }

    }
    return -1;

}


let target = 5
let nums = [1,2,3,4]
console.log(binarySearch(target, nums))

