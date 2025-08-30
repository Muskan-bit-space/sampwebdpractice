// https://leetcode.com/problems/counter-ii/description/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let current=init; 
    return {
        increment(){
            return ++current;
        },

        decrement(){
            return --current;
        },

        reset(){
            return current=init;
        },

        

    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
