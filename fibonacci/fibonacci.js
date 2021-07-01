const fibonacci = function(numtoloop) {
    numtoinc = numtoloop
    total = 0
    startnum = 1
    while (numtoinc > 0){
        temp = total;
        console.log("this is the temp: " + temp)
        total = total + startnum;
        startnum = temp;
        numtoinc -= 1
    }
    return total;
};

console.log(fibonacci(10));


module.exports = fibonacci;
