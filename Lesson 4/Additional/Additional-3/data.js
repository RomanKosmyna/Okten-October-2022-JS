// 1. Створити пустий масив та :
// let emptyArr = [];
// //     a. заповнити його 50 парними числами за допомоги циклу.
// for (let i = 0; i < 50; i++) {
//     emptyArr[i] = 2 * i;
// }
// console.log(emptyArr);
//     b. заповнити його 50 непарними числами за допомоги циклу.
// for (let i = 0; i < 50; i++) {
//     emptyArr[i] = 2 * i + 1;
// }
// console.log(emptyArr)
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// let randomArray = [];
// for (let i = 0; i < 20; i++) {
//     randomArray[i] = Math.floor(Math.random() * 100);
// }
// console.log(randomArray)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
let randomArray2 = [];
for (let i = 0; i < 20; i++) {
    randomArray2[i] = Math.floor(Math.random() * (732 - 8) + 8);
}
console.log(randomArray2)

// 2. Вивести за допомогою console.log кожен третій елемен
// for (let i = 0; i < randomArray2.length; i+=3) {
//     console.log(randomArray2[i])
// }

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// for (let i = 0; i < randomArray2.length; i+=3) {
//     if (randomArray2[i] % 2 === 0) {
//         console.log(randomArray2[i])
//     }
// }

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let newArray = [];
// for (let i = 0, q = 0; i < randomArray2.length; i+=3) {
//     if (randomArray2[i] % 2 === 0) {
//         newArray[q] = randomArray2[i];
//         q++;
//     }
// }
// console.log(newArray)

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// let arr = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// let newArr = [];
// for (let i = 0, p = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0){
//         newArr[p] = arr[i-1];
//         console.log(newArr[p]);
//     }
// }
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i+1] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// let array = [100,250,50,168,120,345,188];
// let voucher = 0;
// for (let i = 0; i < array.length; i++) {
//     voucher += array[i];
// }
// let result = Math.floor(voucher / array.length);
// console.log(result);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let randomArray = [];
for (let i = 0; i < 20; i++) {
    randomArray[i] = Math.floor(Math.random() * (3 - 1))
}
console.log(randomArray)

let newRandomArray = [];
// for (let i = 0, p = 0; i < randomArray.length; i++) {
//     newRandomArray[p] = randomArray[i] * 5;
//     p++;
// }
// console.log(newRandomArray)
for (let i = 0; i < randomArray.length; i++) {
    newRandomArray[i] = randomArray[i] * 5;
}
console.log(newRandomArray)

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
// let array = ['string', 23, undefined, 'two', 220, 5];
// let emptyArray = [];
// for (let i = 0, q = 0; i < array.length; i++) {
//     if (typeof array[i] === 'number') {
//         emptyArray[q] = array[i]
//         q++
//     }
// }
// console.log(emptyArray)

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
    let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];

    let citiesWithId = [
        {user_id: 3, country: 'USA', city: 'Portland'},
        {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
        {user_id: 2, country: 'Poland', city: 'Krakow'},
        {user_id: 4, country: 'USA', city: 'Miami'}
    ];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
for (const user of usersWithId) {
    for (const city of citiesWithId) {
        if (user.id === city.user_id) {
            user.address = city;
        }
    }
}
console.log(usersWithId)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let abc = [ 'a', 'b', 'c'];
// let word = '';
// for (let i = 0; i < abc.length; i++) {
//     word += abc[i];
// }
// console.log(word)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let word1 = '';
// let i = 0;
// while (i < abc.length) {
//     word1 += abc[i];
//     i++
// }
// console.log(word1)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let word2 = '';
for (const string of abc) {
    word2 += string;
}
console.log(word2)