/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    return validate(root, null, null);
};

var validate = function(root, max, min) {
    if (root === null) {
    // we are at the end of the subtree
        return true;
    } else if (max !== null && root.value >= max || min !== null && root.value <= min) {
        return false;
    } else {
        return validate(root.left, root.value, min) && validate(root.right, max, root.value)
    }
}