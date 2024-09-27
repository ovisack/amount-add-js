const numbers =[2,5,8,5,40]

function doubleIt(num){
    console.log('numer new', num);
    return num * 2;

}
const result =numbers.filter(doubleIt)
console.log(result);






// const doublet =[];
// for(const num of numbers){
//     const double =num *2 ;
//     doublet.push(double)

// }
// console.log(doublet);