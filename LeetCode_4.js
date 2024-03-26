// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

 

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5..

var findMedianSortedArrays = function(nums1, nums2) {
    let len2 = nums2.length;
    for(let i = 0; i < len2; i++){
        nums1.push(nums2[i]);
    }

    let length = nums1.length;
    for(let i = length; i > 0; i--){
        for(let j = 0; j < i-1; j++){
            if(nums1[j] > nums1[j+1]){
                let temp = nums1[j];
                nums1[j] = nums1[j+1];
                nums1[j+1] = temp;
            }
        }
    }
    if(length  % 2 !== 0){
        return nums1[Math.floor(length/2)].toFixed(5);
    }
    else{
        return (nums1[length/2]+nums1[length/2 - 1]) / 2;
    }
};