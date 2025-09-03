// ele quer saber se dois valores somados dentro do array são igual ao target e a retorno seja o index dos elementos

nums = [2, 7, 11, 15];
nums1 = [2, 3, 4];
nums2 = [3, 3];

var twoSum = function (nums, target) {
    l = 0;
    r = 1;

    while (l < nums.length) {
        while (r < nums.length) {
            if ((nums[l] + nums[r]) != target) {
                r += 1;
            }
            else return [l, r];
        }
        l += 1;
        r = l + 1;
    }
    return -1;
};


console.log(twoSum(nums, 9)); // [0,1]
console.log(twoSum(nums1, 6)); //[0,2]
console.log(twoSum(nums2, 6)); //[0,1]

// resposta de 0ms do leetcode -- big O(1)

var twoSumLeetcode = function (nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])){ 
        return [map.get(target - nums[i]), i];
        }
        map.set(nums[i], i);
    }
    map.entries(0, 2);
};

console.log(twoSumLeetcode(nums1, 6)); //[0,2]
console.log(twoSumLeetcode(nums2, 6)); //[0,1]
