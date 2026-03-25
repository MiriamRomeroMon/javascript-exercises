  
const repeatString = function(str, number) {
    let result ="";
    if (number < 0) {
        return "ERROR";
    }
    
    for(let i = 1; i <= number; i++) {
         result += str;
    } 
    
    return result;
};

repeatString("hey", 3);

// Do not edit below this line
module.exports = repeatString;
