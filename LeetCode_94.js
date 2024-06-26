// Given the root of a binary tree, return the inorder traversal of its nodes' values.
// Input: root = [1,null,2,3]
// Output: [1,3,2]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [1]
// Output: [1]

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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let data = [];
    function traver(node){
        if(!node) return [];
        if(node.left) traver(node.left);
        data.push(node.val);
        if(node.right) traver(node.right);
    }
    traver(root);
    return data;
};