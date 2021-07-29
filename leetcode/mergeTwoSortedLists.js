//  Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var mergeTwoLists = function (l1, l2) {
  if (!l1 || !l2) {
    return l1 || l2;
  } // return the non-empty one

  if (l1.val > l2.val) {
    [l1, l2] = [l2, l1];
  }

  l1.next = mergeTwoLists(l1.next, l2);

  return l1;
};

l1 = [2, 2, 4, 6];
l2 = [1, 4, 6, 8];
console.log(mergeTwoLists(l1, l2));
