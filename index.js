
// const arr = [1,2,3,4,54,5,6];

// function sumArr(arr){
//     let sum = 0
//     for(let i = 0; i < arr.length; i++){
//      sum += arr[i]
//     }
//     console.log(sum)
// }

// sumArr(arr);

// const arr1 = [true, false, true, false, false];

// function sumTruFalse(arr){
//     let trues = 0;
//     let fal = 0;
//     for(let i = 0; i < arr.length; i++){
//      if(arr[i]){
//      trues++
//     } else{
//         fal++
//     }
// }
//     console.log({trues, fal})
// }

// sumTruFalse(arr1);

// function lessThan100(num1, num2){
//     return (num1 + num2) > 100;
// }
// console.log(lessThan100(12,34));

// function lessThan100(num1, num2, num3){
//     return (num1 * 2) + (num2 * 4) + (num3 * 4);
// }
// console.log(lessThan100(2, 3, 5));

// function isSameNum(num1, num2){
//     return (num1 === num2);
// }
// console.log(isSameNum(2, 2));

// function footballPoints(wins,draws, loses){
//     return (wins * 3) + (draws * 1);
// }
// console.log(footballPoints(5,0,2));

// function convert(h, m){
//     return (h * 3600) + (m * 60)
// }
// console.log(convert(1,3))

// function isSeven(x) {
// 	return x === 7;
// }
// console.log(isSeven(7));

// function profitableGame(prob, prize, pay){
//     return (prob * prize) > pay;
// }
// console.log(profitableGame(0.2, 50, 9))

// function profitableGame(val){
//     return val + '';
// }
// console.log(profitableGame(2))

function tipTwo(val) {
    return val.toString();
};
console.log(tipTwo(false));