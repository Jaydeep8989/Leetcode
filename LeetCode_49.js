// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let result = [];
    let group = {};
    // if (strs.length === 1) {
    //     result.push(strs[0]);
    // } else {
        strs.forEach((str) => {
            let str_sort = (str.split("").sort().join(""));
            if(str_sort in group){
                group[str_sort] = [...group[str_sort],str];
            }else{
                group[str_sort] = [str];
            }
            // console.log(a);
            // result.push(a);
        })
    for (let data in group) result.push(group[data]);
    return result;
};