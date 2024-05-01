// Given two binary strings a and b, return their sum as a binary string. 

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    // let num1 = parseInt(a,2); // Convert the binary number into the based 10 digit
    // let num2 = parseInt(b,2);
    // let sum = num1 + num2;
    // return sum.toString(2);
    return (BigInt(`0b${a}`)+BigInt(`0b${b}`)).toString(2);
    // let dhat = 0;
    // let dhat2 = 0;
    // let num1 = 0;
    // let num2 = 0;
    // for (let i = a.length-1; i >= 0; i--){
    //     num1 += a[i] * Math.pow(2,dhat);
    //     dhat++;
    // }
    // for (let i = b.length-1; i >= 0; i--){
    //     num2 += b[i] * Math.pow(2,dhat2);
    //     dhat2++;
    // }
    // console.log(num1);
    // console.log(num2);
    // return (num1+num2).toString(2);
};