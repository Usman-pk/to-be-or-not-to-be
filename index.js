console.log("To Be Or Not To Be");

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
   return {
    toBe: function(val1) {
        if(val1 === val)  return true;
        else throw "Not Equal"
    },
    notToBe: function(val1) {
        if(val1 !== val)  return true;
        else throw "Equal"
    }
   }
};

console.log(expect(5).toBe(5));
console.log(expect(5).notToBe(5));