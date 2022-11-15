// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let numArray = [1, 2, 3, 4, 5];
let stringArray = ['one', 'two', 'three', 'four', 'five'];
let fullArray = [1, 2, 'three', true, false];
console.log(numArray);
console.log(stringArray);
console.log(fullArray);
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let emptyArray = [];
emptyArray[0] = 1;
emptyArray[1] = 'lol';
emptyArray[2] = true;
emptyArray[3] = 0;
console.log(emptyArray);
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
let firstArray = [2,17,13,6,22,31,45,66,100,-18];
let q = 0;
while (q < firstArray.length) {
    console.log(firstArray[q]);
    q++;
}
console.log(`task №2 starts ------------------------`);
//     2. перебрати його циклом for
for (const number of firstArray) {
    console.log(number)
}
console.log(`task №3 starts ------------------------`);
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let firstArray = [2,17,13,6,22,31,45,66,100,-18];
let w = 0;
while (w < firstArray.length) {
    if (w % 2 === 1) {
        console.log(firstArray[w])
    }
    w++
}
console.log(`task №4 starts ------------------------`);
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = 0; i < firstArray.length; i++) {
    const firstArrayElement = firstArray[i];
    if (i % 2 ===1) {
        console.log(firstArrayElement)
    }
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
console.log(`task №5 starts ------------------------`);
let e = 0;
while (e < firstArray.length) {
    if (firstArray[e] % 2 === 0) {
        console.log(firstArray[e])
    }
    e++
}
console.log(`task №6 starts ------------------------`);
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i = 0; i < firstArray.length; i++) {
    const firstArrayElement = firstArray[i];
    if (firstArrayElement % 2 === 0) {
        console.log(firstArrayElement)
    }
}
console.log(`task №7 starts ------------------------`);
// 7. замінити кожне число кратне 3 на слово "okten"
// let firstArray = [2,17,13,6,22,31,45,66,100,-18];
for (let i = 0; i < firstArray.length; i++) {
    let firstArrayElement = firstArray[i];
    if (firstArrayElement % 3 === 0) {
        console.log(firstArrayElement = 'okten')
    }
}
console.log(`task №8 starts ------------------------`);
// 8. вивести масив в зворотньому порядку.
for (let i = firstArray.length - 1; i >= 0; i--) {
    const firstArrayElement = firstArray[i];
    console.log(firstArrayElement)
}
console.log(`task №9 starts ------------------------`);
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
console.log(`-----`)
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
console.log(`task №10 starts ------------------------`);
let secondArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const number of secondArray) {
    console.log(number);
}
console.log(`task №11 starts ------------------------`);
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let thirdArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
for (const string of thirdArray) {
    console.log(string);
}
console.log(`task №12 starts ------------------------`);
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let fourthArray = [1, 2, true, false, 'text', 6, 'lol', 0, '', undefined];
for (let i = 0; i < fourthArray.length; i++) {
    const fourthArrayElement = fourthArray[i];
    console.log(fourthArrayElement);
}
console.log(`task №13 starts ------------------------`);
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let fifthArray = [1, 'text', true, 4, 0, 7, '', 8, false, NaN];
for (let i = 0; i < fifthArray.length; i++) {
    const fifthArrayElement = fifthArray[i];
    if (typeof fifthArrayElement === "boolean") {
        console.log( fifthArrayElement);
    }
}
console.log(`task №14 starts ------------------------`);
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (let i = 0; i < fifthArray.length; i++) {
    const fifthArrayElement = fifthArray[i];
    if (typeof fifthArrayElement === "number") {
        console.log( fifthArrayElement);
    }
}
console.log(`task №15 starts ------------------------`);
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (let i = 0; i < fifthArray.length; i++) {
    const fifthArrayElement = fifthArray[i];
    if (typeof fifthArrayElement === "string") {
        console.log( fifthArrayElement);
    }
}
console.log(`task №16 starts ------------------------`);
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let sixthArray = [];
sixthArray[0] = 1;
sixthArray[1] = 'two';
sixthArray[2] = 3;
sixthArray[3] = 'four';
sixthArray[4] = true;
sixthArray[5] = 6;
sixthArray[6] = 'seven';
sixthArray[7] = 8;
sixthArray[8] = 'nine';
sixthArray[9] = false;
for (const sixthArrayElement of sixthArray) {
    console.log(sixthArrayElement);
}
console.log(`task №17 starts ------------------------`);
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i++) {
    console.log(i);
    // document.write(`<div>Random text</div>`);
}
console.log(`task №18 starts ------------------------`);
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 1; i < 101; i++) {
    console.log(i);
    // document.write(`<div>One hundred One hundred One hundred One hundred One hundred</div>`);
}
console.log(`task №19 starts ------------------------`);
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i+=2) {
    console.log(i);
    // document.write(`<div>Random text</div>`);
}
console.log(`task №20 starts ------------------------`);
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 100; i+=2) {
    if (i) {
        console.log(i)
    }
}
console.log(`task №21 starts ------------------------`);
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
console.log(`task №22 starts ------------------------`);
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [
    {name: 'eragonwr', pageCount: 200, authors: ['John', 'Christopher'], genre: 'fantasy'},
    {name: 'eragon2wewe', pageCount: 300, authors: ['John2', 'Christopher2'], genre: ['fantasy', 'adventure']},
    {name: 'eragon3qqwewe', pageCount: 400, authors: ['John3'], genre: 'fantasy'}
];
// -знайти наібльшу книжку.
let bookCount = books[0];
for (const book of books) {
    if (book.pageCount > bookCount.pageCount) {
        bookCount = book;
    }
}
console.log(bookCount)
// - знайти книжку/ки з найбільшою кількістю жанрів
// debugger;
let genreCount = books[0];
for (const book of books) {
    if (book.genre > genreCount.genre) {
        genreCount = book;
    }
}
console.log(genreCount)
// - знайти книжку/ки з найдовшою назвою
let nameCount = books[0];
for (const book of books) {
    if (book.name.length > nameCount.name.length) {
        nameCount = book;
    }
}
console.log(nameCount);
// - знайти книжку/ки які писали 2 автори
let authorCount = books[0];
for (const book of books) {
    if (book.authors.length === 2) {
        authorCount = book;
    }
}
console.log(authorCount);
// - знайти книжку/ки які писав 1 автор
let authorCount2 = books[0];
for (const book of books) {
    if (book.authors.length === 1) {
        authorCount2 = book;
    }
}
console.log(authorCount2);