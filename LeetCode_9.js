// Palindrome Number


var isPalindrome = function(x) {
    let temp = x
    let rev = 0
    while (x > 0){
        const dig = x % 10
        rev = rev * 10 + dig
        x = Math.floor(x / 10)
    }
        if (temp == rev)
            return true
        else{
            return false
        }
};