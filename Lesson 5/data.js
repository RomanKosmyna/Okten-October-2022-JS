// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б    (a + b) * 2
function per(a,b) {
    return (a+b) * 2;
}
console.log(per(10, 20));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circle(pi, a) {
    return pi * (a * a);
}
console.log(circle(3.14, 6));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// 2 * Число пі * r (радіус) любе число * h(висота) любе число
function cylinder(pi, r, h) {
    return pi * r *h;
}
console.log(cylinder(3.14, 6, 7));
// - створити функцію яка приймає масив та виводить кожен його елемент
function numArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
let array = [1, 2, 3, 4, 5];
numArray(array)
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function text(greeting, imya, nazvaImeni) {
    return `${greeting}, my ${imya} is ${nazvaImeni}`;
    // document.write(`<p>${text}</p>`);
}
console.log(text('hello', 'name', 'Roman'));
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulElement(product, price) {
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${product}. Price - ${price}</li>`)
    }
    document.write(`</ul>`);
}
ulElement('milk',35);
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li
// визначається другим аргументом, який є числовим (тут використовувати цикл)
function ul(text, numberOfLi) {
    document.write(`<ul>`);
    for (let i = 0; i < numberOfLi; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`);
}
ul('Just some random text :)', 3);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function primative(array) {
    document.write(`<ul>`);
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            document.write(`<li>${array[i]}</li>`);
        }
        if (typeof array[i] === 'string') {
            document.write(`<li>${array[i]}</li>`);
        }
        if (typeof array[i] === 'boolean') {
            document.write(`<li>${array[i]}</li>`);
        }
    }
    document.write(`</ul>`);
}
let arr = [1, 'string', true];
primative(arr)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let arrOfObjects = [
    {id: 1, name: 'John', age: 23},
    {id: 2, name: 'Mark', age: 30},
    {id: 3, name: 'Oleg', age: 44},
    {id: 4, name: 'Ivan', age: 71}
];
function objects(array) {
    for (const key of arrOfObjects) {
        document.write(`<div>ID - ${key.id}, Name - ${key.name}, Age - ${key.age}</div>`);
    }
}
objects(arrOfObjects);
// - створити функцію яка повертає найменьше число з масиву
let smallNumArray = [1, 2, 22, 100, 66, -33, 0, 45];
let small = 0;
function smallestNum(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < small) {
            small = array[i];
            console.log(small);
        }
    }
}
smallestNum(smallNumArray);
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// function addNum() {
//     return arguments[0] + arguments[1] + arguments[2];
// }
// console.log(addNum(1, 2, 10));
function addNum(array) {
    return array[0] + array[1] + array[2];
}
let numArr = [1, 2, 10];
console.log(addNum(numArr));
