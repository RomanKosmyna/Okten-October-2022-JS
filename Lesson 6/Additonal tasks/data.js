// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
// function cutString(str, n) {
//     let result = [];
//     for (let i = 0; i < str.length; i+=n) {
//         result.push(str.slice(i, i+n));
//     }
//     // JSON.stringify(result);
//     return result;
// }
// console.log(cutString('наслаждение', 3));

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
// let str = 'Каждый охотник желает знать';
// function delete_characters(str, length) {
//     return  str.slice(0, length);
// }
// console.log(delete_characters(str, 7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// let str = "HTML JavaScript PHP";
// function insert_dash(str) {
//     console.log(str.replaceAll(' ', '-').toUpperCase());
// }
// insert_dash(str);

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let str = 'dogshit';
// function transform(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1 - 7);
// }
// console.log(transform(str));

// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
// --------
// let n1 = 'Harry..Potter';
// let n2 = 'Ron---Whisley';
// let n3 = 'Hermione__Granger';
// function fixer(str) {
//     if (str.includes('..')) {
//         console.log(str.replace('..', ' '))
//     } else if (str.includes('---')) {
//         console.log(str.replace('---', ' '))
//     } else if (str.includes('__')) {
//         console.log(str.replace('__', ' '))
//     }
// }
// fixer(n1);

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let randomNumsArray = [];
// let generator =  function (arr) {
//     for (let i = 0; i < 10; i++) {
//         arr.push(Math.round(Math.random() * 100));
//     }
//     return arr;
// }
// console.log(generator(randomNumsArray))

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// let sortRandom = randomNumsArray.sort((a, b) => a - b);
// console.log(sortRandom);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати
//  його за допомоги filter, залишивши тільки парні числа (без 0!)
// let filterNums = randomNumsArray.filter(function (num) {
//     if (num % 2 === 0) {
//         return num
//     }
// });
// console.log(filterNums)
// let filter = randomNumsArray.filter((num) => num % 2 === 0);
// console.log(filter);

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let capitalize = ((str) =>  str.charAt(0).toUpperCase() + str.slice(1)) ;
// console.log(capitalize('roki one two'));

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака
// равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не
// чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
// function validator(email) {
//     // let d = email.indexOf('.')
//     let i = email.indexOf('@');
//     let indexOfDot = email.indexOf('.' > i)
//     if (i > 8 && email.includes('@') && email.includes('.') && (email.toUpperCase() || email.toLowerCase())) {
//         console.log(email)
//     } else {
//         throw new Error ('Dogshit code :)');
//     }
// }
// validator('qqqWWqqqWW.@')
// function validator(email) {
//     let indexOfRavlik = email.indexOf('@');
//     let indexOfDot = email.lastIndexOf('.');
//     let sub = email.substring(indexOfRavlik, indexOfDot);
//     if ((indexOfRavlik > 0) &&
//         email.includes( '@') &&
//         email.includes('.') &&
//         (email.toUpperCase() || email.toLowerCase()))  {
//         console.log(email)
//     } else {
//         throw new Error ('Error!!!!!!');
//     }
// }
// validator('qqqqqqqq.@i.ua')
// Приміткa
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.

// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// // відсортувати його в спадаючому порядку за кількістю елементів в полі modules
// let sort = coursesArray.sort((a,b) => b.modules.length - a.modules.length);
// console.log(sort);

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
// let str = "Астрономия это наука о небесных объектах";
// let symb = "о";
// function count(str, stringsearch) {
//     let split = str.split(' ');
//     let newArray =[];
//     let number = 0;
//     for (const word of split) {
//         if (word.includes(stringsearch)) {
//             newArray.push(word);
//         }
//     }
//     for (const newWord of newArray) {
//         if (newWord.includes(stringsearch)) {
//
//         }
//     }
//     // for (const word of split) {
//     //     if (word.includes(stringsearch)) {
//     //         number += 1;
//     //     }
//     //     if (word.)
//     // }
//     return newArray;
// }
// console.log(count(str, symb));

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
// let str = "Сила тяжести приложена к центру масс тела";
// function cutString(str, n) {
//     let newStr = [];
//     let split = str.split(' ');
//     for (let i = 0; i < n; i++) {
//         newStr.push(split[i]);
//     }
//     return newStr.join(' ');
// }
// console.log(cutString(str, 5));

// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
const books = [
    {name: 'LOL', pageCount: 200, authors: 'John', genre: 'fantasy'},
    {name: 'Feeweqew', pageCount: 150, authors: 'Sasha', genre: 'detective'},
    {name: 'Dweqe', pageCount: 300, authors: 'Mary', genre: 'comedy'},
    {name: 'Zaww', pageCount: 450, authors: ['Ivan', 'George'], genre: 'romance'}
]
// -знайти наібльшу книжку.
let max = 0;
for (const book of books) {
    if (max < book.pageCount) {
        max = book.pageCount;
    }
}
// - знайти книжку/ки з найбільшою кількістю жанрів

// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
// - вісортувати книжки по кількості сторінок по зростанню