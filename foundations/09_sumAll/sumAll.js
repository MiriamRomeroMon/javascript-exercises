const sumAll = function(a, b) {
    //ERROR
    if (!Number(a) || !Number(b)) {
        return "ERROR";
    } else if (a < 0 || b < 0) {
        return "ERROR";
    } else if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR";
    }

    //poner los numeros en el rango que hay entre a y b
    start = Math.min(a, b);
    end = Math.max(a, b);
    
    //sumar todos los numeros
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    //hacer return
    console.log(sum);
    return sum;

};

sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10

// Do not edit below this line
module.exports = sumAll;
