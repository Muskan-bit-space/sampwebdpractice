// https://leetcode.com/problems/array-reduce-transformation/submissions/1753267701/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let val=init;
    for(let i=0;i<nums.length;i++){

        val=fn(val,nums[i]);
        console.log(val)
        // init=val;
    }

    return val;
    // return fn(init,nums[i++]);
};
