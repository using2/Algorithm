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
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0);
    let cur = dummy;
    let carry = 0;

    let l1Node = l1;
    let l2Node = l2;

    while (l1Node || l2Node || carry) {
        let val1 = l1Node ? l1Node.val : 0;
        let val2 = l2Node ? l2Node.val : 0;

        let sum = val1 + val2 + carry;

        carry = Math.floor(sum / 10);

        cur.next = new ListNode(sum % 10);
        cur = cur.next;

        if (l1Node) l1Node = l1Node.next;
        if (l2Node) l2Node = l2Node.next;
    }

    return dummy.next;
};