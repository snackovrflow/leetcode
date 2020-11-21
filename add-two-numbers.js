/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
    let current1 = l1.val;
    let current2 =l2.val;
    let returnList = ListNode(current1+current2);
    
    while (l1.next && l2.next) {
        current1 = l1.next;
        current2 = l2.next;
        
        let currentNode = ListNode(current1+current2);
        returnList.next = currentNode;
    }
    return returnList;
};