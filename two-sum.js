/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let ret = []
    let previousNums = {}
    for (var i=0; i<nums.length; i++) {
        const complement = target - nums[i]
        if (previousNums.hasOwnProperty(complement)) {
            const indexOfComplement = previousNums[complement]
            ret = [indexOfComplement, i]
            console.log('ret', ret)
            return ret
        }
        previousNums[nums[i]] = i
    }
};

const nums = [2,7,11,15];
const target = 9

twoSum(nums, target)