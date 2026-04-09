const palindromes = function (str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reverse = str.split("").reverse().join("");
    if (str === reverse) {
        return true;
    } else {
        return false;
    }
}

// Do not edit below this line
module.exports = palindromes;
