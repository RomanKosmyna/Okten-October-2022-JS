// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let sum = (a, b, c) => {
//     if (a > c && b > c) {
//         console.log(c);
//     } else if (b > a && c > a) {
//         console.log(a);
//     } else if (a > b && c > b) {
//         console.log(b);
//     }
// }
// sum(7,9,16);
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let sum = (a, b, c) => {
//     if (a > b && a > c) {
//         console.log(a);
//     } else if (b > a && b > c) {
//         console.log(b);
//     } else if (c > a && c > b) {
//         console.log(c);
//     }
// }
// sum(22, 30, 20);
// - створити функцію яка повертає найбільше число з масиву
// let array = [10, 7, 22, 19, 201, 79, 0];
// let fun = (arr) => {
//     let max = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (max < arr[i]) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(fun(array));
// - створити функцію яка повертає найменьше число з масиву
// let array = [10, 7, 22, 19, 201, 79, 9];
// let fun = (arr) => {
//     let min = arr[0];
//     for (let i = 0, q = 0; i < arr.length; i++) {
//         if (min > arr[i]) {
//             min = arr[i];
//         }
//     }
//     return min;
// }
// console.log(fun(array));
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let array = [1, 2, 10];
// let fun = (arr) => {
//     let sum = 0;
//     for (const value of arr) {
//         sum += value;
//     }
//     return sum;
// }
// console.log(fun(array));
// - Дано натуральное число n. Выведите все числа от 1 до n.
// const num = (n) => {
//     for (let i = 1; i <= n; i++) {
//         console.log(i);
//     }
// }
// num(10)
// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или
// в порядке убывания в противном случае.
// const num = (a, b) => {
//         if (a < b) {
//             for (let i = a; i <= b; i++) {
//                 console.log(i)
//             }
//         } else if (a > b) {
//             for (let i = a; i >= b; i--) {
//                 console.log(i)
//             }
//         }
// }
// num(6,1)
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
const arr = [9,8,0,4];
const func = (array, num) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i + 1]) {
            let temp = array[num];
            array[num] = array[num + 1];
            array[num + 1] = temp;
        }
    }
    return array;
}
console.log(func(arr, 0));
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не
// нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

