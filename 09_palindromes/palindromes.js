const palindromes = function (string) {
    string = string.toLowerCase().replace(/[^a-z]/g, "")
    newString = Array.from(string)
    if (string === newString.reverse().join("")){
        console.log(string)
        console.log(newString.reverse().join(""))
        return true
    } else {
        console.log(string)
        console.log(newString)
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
