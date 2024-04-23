// You are given an integer array nums.

// Return an integer that is the maximum distance between the indices of two (not necessarily different) prime numbers in nums.

 

// Example 1:

// Input: nums = [4,2,9,5,3]

// Output: 3

// Explanation: nums[1], nums[3], and nums[4] are prime. So the answer is |4 - 1| = 3.

// Example 2:

// Input: nums = [4,8,2,8]

// Output: 0

// Explanation: nums[2] is prime. Because there is just one prime number, the answer is |2 - 2| = 0.


// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var maximumPrimeDifference = function(nums) {
//     let maxDiff = 0;
//     let result = [];
//     for(let i = 0; i < nums.length; i++){
//         let digit1 = isPrime(nums[i])
//         if(digit1){
//             result.push(i);
//             // for(let j = i+1; j < nums.length; j++){
//             //     let digit2 = isPrime(nums[j]);
//             //     if(digit2){
//             //         let dif = j-i;
//             //         if(maxDiff < dif) maxDiff = dif;
//             //     }
//             // }
//         }
//     }
//     return maxDiff;
// };
// // function isPrime(n,k=2){
// //     if (n == 0 || n == 1) return false; 
// //     if (n == k) return true; 
// //     if (n % k == 0) return false; 
// //     return isPrime(n,k+1); 
// // }
// function isPrime(n) {
//     if (n < 2) return false;
//     for (let i = 2; i <= Math.sqrt(n); i++){
//         if(n % i === 0){
//             return false;
//         }
//     }
//     return true;
// }

/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumPrimeDifference = function(nums) {
    let maxDiff = 0;
    let result = [];
    for(let i = 0; i < nums.length; i++){
        let digit1 = isPrime(nums[i])
        if(digit1){
            result.push(i);
            // for(let j = i+1; j < nums.length; j++){
            //     let digit2 = isPrime(nums[j]);
            //     if(digit2){
            //         let dif = j-i;
            //         if(maxDiff < dif) maxDiff = dif;
            //     }
            // }
        }
    }
    // console.log(result);
    
    return result[result.length-1] - result[0];
};
// function isPrime(n,k=2){
//     if (n == 0 || n == 1) return false; 
//     if (n == k) return true; 
//     if (n % k == 0) return false; 
//     return isPrime(n,k+1); 
// }
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}