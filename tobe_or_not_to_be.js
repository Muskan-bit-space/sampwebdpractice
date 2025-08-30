// https://github.com/Muskan-bit-space/sampwebdpractice/tree/main

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    // var value=true;
    // var error="Not Equal";
    return {
            toBe(v){
                if(v!==val){
                    throw new Error ("Not Equal");                
                }
                return true;
            
            }
        ,

        notToBe(v){
            if(v===val){
                // return true;
                throw new Error ("Equal");                

            }
            return true;

        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
