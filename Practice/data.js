// const str = 'hello Lviv';
// console.log(str);
// // let concat = str.concat('wqeweqwe');
// // console.log(concat)
//
// console.log(str.toUpperCase());
//
// console.log(str.toLowerCase());
//
// console.log(str.startsWith('h'));
//
// console.log(str.endsWith('!'));
//
// console.log(str.substring(0, 7));
//
// console.log(str.indexOf('v'));
//
// console.log(str.lastIndexOf('v'));
//
// console.log(str.indexOf('L', 3));
//
// function sumArray(array) {
//     if (array == null || array.length < 2) {
//         return 0;
//     } else {
//         array = array.sort(function(a,b) {return a - b;});
//         let total = 0;
//         for (let i = 1; i < array.length - 1; i++) {
//             total += array[i];
//         }
//         return total;
//     }
// }
// console.log(sumArray([1, 2, 3, 4, 5, 6]));


// function grow(x){
//     sum = 1;
//     for (let i = 0; i < x.length; i++) {
//         sum = sum * x[i];
//     }
//     return sum;
// }
// console.log(grow([1, 2, 3, 4]));

// function simpleMultiplication(number) {
//     if (number % 2 === 0) {
//         return number * 8;
//     } else {
//         return number * 9;
//     }
// }
// console.log(simpleMultiplication(3));
//
//
// let result = number => number % 2 === 0 ? number * 8 : number * 9;
// console.log(result(3));

// function boolToWord( bool ){
//     if (bool === true) {
//         return 'Yes';
//     } else {
//         return 'No';
//     }
// }

// let boolToWord = bool => bool ? 'Yes' : 'No';
// console.log(boolToWord(false))

// function areYouPlayingBanjo(name) {
//     if (name.startsWith('R' || 'r')) {
//         return name + ' plays banjo';
//     } else if ((name.startsWith('r'))) {
//         return name + ' plays banjo';
//     }
//     else {
//         return name + ' does not play banjo';
//     }
// }
// console.log(areYouPlayingBanjo('qan'));

// function areYouPlayingBanjo(name) {
//     return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
// }
//
// console.log(areYouPlayingBanjo('Roki'));

// function smash (words) {
//     return words.join(' ').trim()
// }
// console.log(smash(['hello', 'world', 'this', 'is', 'great']));

// let smash = words =>  words.join(' ').trim();

// let min = function(list){
//     list = list.sort((a,b) => a - b);
//     return list[0];
// }
// console.log(min([4, 6, 2, 1, 9, 63, -134, 566]));
//
// let max = function(list){
//     list = list.sort((a,b) => b - a);
//     return list[0];
// }
// console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));
//
// let min = list => list.sort((a,b) => a - b)

// function hero(bullets, dragons){
//     if (bullets === 2 && bullets === dragons) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function evenOrOdd(number) {
//     if (number % 2 === 0) {
//         return 'Even'
//     } else {
//         return 'Odd';
//     }
// }
// console.log(evenOrOdd(1));

// let evenOrOdd = number => number % 2 === 0 ? 'Even' : 'Odd';

// function greet(name){
//     return `Hello, ${name} how are you doing today?`
// }
// console.log(greet('lol'));

// let greet = name => `Hello, ${name} how are you doing today?`;

// let countSheep = function (num){
//     return `${num} sheep...${num} sheep...${num} sheep...`;
// }
// console.log(countSheep(3));

// let test = function (num) {
//     let str = '';
//     for (let i = 1; i <= num; i++) {
//         str += `${i} sheep...`;
//     }
//     return str;
// }
// console.log(test(4));

// function numberToString(num) {
//     return JSON.stringify(num);
// }
// console.log(numberToString([123]));

// function past(h, m, s){
//     return ((h*3600)+(m*60)+s)*1000;
// }
// console.log(past(0, 1, 1));

// function check(a, x) {
//     if (a.includes(x)) {
//         return true;
//     } else {
//         return false;
//     }
// }
// function litres(time) {
//     return Math.floor(time * 0.5);
// }
// console.log(litres(3));
// function descendingOrder(n){
//     return n.split('').sort((a, b) => b - a).join('')
// }

// function digitize(n) {
//    return n.toString().split('').reverse().map(num => Number(num));
// }
// console.log(digitize(35231));

// function getMiddle(s) {
//     let position;
//     let length;
//     if (s % 2 === 1) {
//         position = s.length / 2;
//         length = 1;
//     } else {
//         position = s.length / 2 - 1;
//         length = 2;
//     }
//     return s.substring(position, position + length);
// }
// console.log(getMiddle("test"));

// function findShort(s) {
//     return  Math.min(...s.split(' ').map(a => a.length));
// }
// console.log(findShort(`lol longer longest qw`));

// function oddOrEven(array) {
    // let sum = 0;
    // for (let i = 0; i < array.length; i++) {
    //     sum += array[i];
    // }
    // if (sum % 2 === 0) {
    //     return 'even'
    // } else if (sum % 2 === 1)  {
    //     return 'odd'
    // } else if (array === []) {
    //     return [0];
    // }
// }
// console.log(oddOrEven([]));

// function oddOrEven(array) {
//     return array.reduce((a,b) => a+b, 0) % 2 ? 'odd' : 'even';
// }
// console.log(oddOrEven([0, 1, 5]));

// function sumTwoSmallestNumbers(numbers) {
//     let result = 0;
//     numbers = numbers.sort((a,b)=>a - b);
//     for (let i = 0; i <= 1; i++) {
//         result += numbers[i];
//     }
//     return result;
// }
// function sumTwoSmallestNumbers(numbers) {
//     numbers = numbers.sort((a,b)=>a - b);
//     return numbers[0] + numbers[1];
// }
// console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));

// let makeUpperCase = str => str.toUpperCase();
// console.log(makeUpperCase('qqqqq'));

// function repeatStr (n, s) {
//     let str = '';
//     for (let i = 0; i < n; i++) {
//          str += s;
//     }
//     return str;
// }

// let repeatStr = (n,s) => s.repeat(n);
// console.log(repeatStr(3, ' Roki '));

// const rps = (p1, p2) => {
//     // if (p1 === "scissors" && p2 === "paper") {
//     //     return "Player 1 won!";
//     // } else if (p1 === "scissors" && p2 === "rock") {
//     //     return "Player 2 won!";
//     // } else if (p1 === "paper" && p2 === "paper") {
//     //     return "Draw!"
//     // }
//
// };
// console.log(rps("scissors", 'paper'));