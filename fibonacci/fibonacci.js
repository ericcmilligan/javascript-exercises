const fibonacci = function(numtoloop) {
    numtoinc = numtoloop
    total = 1
    previousnumber = 0
    while (numtoinc > 0){
        total = total + previousnumber 
        numtoinc -= 1
        previousnumber = total
    }
    return total;
};

console.log(fibonacci(4));


module.exports = fibonacci;
