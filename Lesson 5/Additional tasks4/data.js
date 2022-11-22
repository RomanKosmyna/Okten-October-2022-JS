// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function smallestNum() {
//     if (arguments[0] < arguments[1] && arguments[0] < arguments[2]) {
//         return arguments[0];
//     } else if (arguments[1] < arguments[0] && arguments[1] < arguments[2]) {
//         return arguments[1];
//     } else if (arguments[2] < arguments[0] && arguments[2] < arguments[1]) {
//         return arguments[2];
//     }
// }
// console.log(smallestNum(4, 8, 3));
// function smallestNum() {
//     let min = arguments[0];
//     for (let i = 0; i < arguments.length; i++) {
//         if (min > arguments[i]) {
//             min = arguments[i];
//         }
//     }
//     return min;
// }
// console.log(smallestNum(1, 5, 9));
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function biggestNum() {
//     if (arguments[0] > arguments[1] && arguments[0] > arguments[2]) {
//         return arguments[0];
//     } else if (arguments[1] > arguments[0] && arguments[1] > arguments[2]) {
//         return arguments[1];
//     } else if (arguments[2] > arguments[0] && arguments[2] > arguments[1]) {
//         return arguments[2];
//     }
// }
// console.log(biggestNum(10, 17, 9));
// function biggestNum() {
//     let max = arguments[0];
//     for (let i = 0; i < arguments.length; i++) {
//         if (max < arguments[i]) {
//             max = arguments[i];
//         }
//     }
//     return max;
// }
// console.log(biggestNum(5, 7, 88));
// - створити функцію яка повертає найбільше число з масиву
// let array = [2, 10, 22, 34, 77];
// function returnBiggestNum() {
//     let max;
//     for (let i = 0, q = 0; i < array.length; i++) {
//         max = array[q];
//         if (array[i] > max) {
//             console.log(array[i]);
//         }
//         q++;
//     }
//     return max;
// }
// console.log(returnBiggestNum(array));
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let numArray = [5, 15, 20, 10];
// function arithmeticMean(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i] // / array.length;
//     }
//     return sum / array.length;
// }
// console.log(arithmeticMean(numArray));
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math
// використовувати заборонено);
// function wtf() {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (let i = 0; i < arguments.length; i++) {
//         if (min > arguments[i]) {
//             min = arguments[i];
//         }
//         if (max < arguments[i]) {
//             max = arguments[i];
//         }
//     }
//     console.log(max);
//     return  min;
// }
// console.log(wtf(1, 2, 3));
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let arr = [];
// function generateRandom(array) {
//     for (let i = 0; i < 4; i++) {
//         arr[i] = Math.round(Math.random()*100);
//     }
//     console.log(arr);
// }
// generateRandom(arr);
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який
// характеризує кінцеве значення діапазону.
// let arr = [];
// function generate(array, limit) {
//     for (let i = 0; i < 3; i++) {
//         arr[i] = Math.round(Math.random() * limit);
//     }
//     console.log(arr);
// }
// generate(arr, 10)
// console.log(Math.random() * 10)
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// const arr = [1, 2, 3];
// function backwards(array) {
//     let newArr = [];
//     for (let i = array.length - 1, q = 0; i >= 0; i--) {
//         newArr[q] = array[i];
//         q++;
//     }
//     console.log(newArr)
// }
// backwards(arr);
// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує
// їх між собою.
// let func = function wtf() {
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments.length === 1) {
//             return arguments[i];
//         } else if (arguments.length === 2) {
//             return arguments[0] + arguments[1];
//         } else {
//             console.log(`?????`);
//         }
//     }
// }
// console.log(func(10, 7));
const wtf = (...arguments) => arguments.length === 2 ? arguments[0] + arguments[1] : arguments[0];
// let lol1 = lol(10, 10);
// console.log(lol1);
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий
// результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
const firstArr = [1, 2, 3, 4];
const secondArr = [2, 3, 4, 5];
// function f(firstArray, secondArray) {
//     let newArray = [];
//     for (let i = 0; i < firstArr.length; i++) {
//         newArray[i] = firstArray[i] + secondArray[i];
//     }
//     return newArray;
// }
// console.log(f(firstArr, secondArr));
function sum(first, second) {
    let newArray = [];
    let xxx = first.length >= second.length ? first : second;
    for (let i = 0; i < xxx.length; i++) {
        newArray[i] = (first[i] || 0) + (second[i] || 0);
    }
    return newArray;
}
console.log(sum(firstArr, secondArr));
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
let array = [{name: 'Dima', age: 13}, {model: 'Camry'}];
let keyArray = [];
function keyFun(arr) {
    for (let i = 0, q = 0; i < arr.length; i++) {
        for (const key in arr[i]) {
            keyArray[q] = key;
            q++;
        }
    }
    return keyArray;
}
console.log(keyFun(array));
let valueArr = [];
function valueFun(arr) {
    for (let i = 0, q = 0; i < arr.length; i++) {
        for (const value in arr[i]) {
            valueArr[q++] = arr[i][value];
        }
    }
    return valueArr;
}

console.log(valueFun(array));