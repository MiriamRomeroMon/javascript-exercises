const reverseString = function(str) {
    let arr = str.split("").reverse().join("");
    return arr;
};

reverseString("Hello");

// Do not edit below this line
module.exports = reverseString;
