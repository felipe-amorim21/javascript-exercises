const fibonacci = function(number) {
    let n1 = 1;
    let n2 = 1;
    let n3 = 0
    if(number >2){
        for(let i = 2;i<number;i++){
            n3 = n1 + n2;
            n1 = n2;
            n2 = n3;
        }
        return n3;
    } else if(number <=0){
        return "OOPS!"
    } else {
        return n1;
        
    }
    
}
// Do not edit below this line
module.exports = fibonacci;
