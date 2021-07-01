const palindromes = function (stringinp) {
    stringreverse = stringinp.split("").reverse().join("");
    if (stringreverse === stringinp){
        return true;
    } else {
        return false;
    }
};

console.log(palindromes("racecar"))

module.exports = palindromes;
