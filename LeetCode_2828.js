// Given an array of strings words and a string s, determine if s is an acronym of words.

// The string s is considered an acronym of words if it can be formed by concatenating the first character of each string in words in order. For example, "ab" can be formed from ["apple", "banana"], but it can't be formed from ["bear", "aardvark"].

// Return true if s is an acronym of words, and false otherwise.


// Input: words = ["alice","bob","charlie"], s = "abc"
// Output: true
// Explanation: The first character in the words "alice", "bob", and "charlie" are 'a', 'b', and 'c', respectively. Hence, s = "abc" is the acronym.


var isAcronym = function(words, s) {
    if(words.length !== s.length){
      return false;
    }else{
      let result = [];
      let cnt = 0;
      let n = words.length;
      for (let i = 0; i < n; i++){
          if(words[i][0] === s[i]) cnt++;
          else return false;
      }
      if(cnt === n) return true;
      // let result = [];
      // for (let i = 0; i < words.length; i++){
      //     result.push(words[i][0]);
      // }
      // result = result.join("");  
      // if(result == s){
      //   return true;
      // }else{
      //     return false;
      // }
  }
}