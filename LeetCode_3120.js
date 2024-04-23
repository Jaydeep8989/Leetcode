// You are given a string word. A letter is called special if it appears both in lowercase and uppercase in word.

// Return the number of special letters in word.

 

// Example 1:

// Input: word = "aaAbcBC"

// Output: 3

// Explanation:

// The special characters in word are 'a', 'b', and 'c'.

// Example 2:

// Input: word = "abc"

// Output: 0

// Explanation:

// No character in word appears in uppercase.

// Example 3:

// Input: word = "abBCab"

// Output: 1

// Explanation:

// The only special character in word is 'b'.


/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    let lowerArray = new Set();
    let upperArray = new Set();
    
     for (let i = 0; i < word.length; i++){
      let char = word[i];
        if(char.charCodeAt() >= 97){
            lowerArray.add(char);
        }else{
            upperArray.add(char);
        }
    }
    let count = 0;
    for (let char of lowerArray) {
        if (upperArray.has(char.toUpperCase())) {
            count++;
        }
    }
    return count;
}