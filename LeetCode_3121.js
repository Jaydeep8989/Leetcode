// You are given a string word. A letter c is called special if it appears both in lowercase and uppercase in word, and every lowercase occurrence of c appears before the first uppercase occurrence of c.

// Return the number of special letters in word.

 

// Example 1:

// Input: word = "aaAbcBC"

// Output: 3

// Explanation:

// The special characters are 'a', 'b', and 'c'.

// Example 2:

// Input: word = "abc"

// Output: 0

// Explanation:

// There are no special characters in word.

// Example 3:

// Input: word = "AbBCab"

// Output: 0

// Explanation:

// There are no special characters in word.


/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    let indexDict = {}
    let lower = []
    let count = 0
    for (let i = 0; i < word.length; i++){
        let char = word[i]
        if(char>='a' && char<='z' && lower.indexOf(char) == -1){
            lower.push(char)
        }
        if(char.charCodeAt()>=65 && char.charCodeAt()<=91){
            if(!(char in indexDict)){
                indexDict[char] = i
            }
        }
        else {
            indexDict[char] = i
        } 
    }
    for(let i=0;i<lower.length;i++){
        let lowerCase = lower[i];
        let upperCase = lower[i].toUpperCase();
        if(upperCase in indexDict && indexDict[lowerCase]<indexDict[upperCase]){
            count += 1;
        }
    }
    return count;
};