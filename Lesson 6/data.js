// let arr = [];
// arr[arr.length] = 100;
// console.log(arr)
// console.log(Array.isArray(arr));
// console.log(arr.push('new element'));
// console.log(arr)
// console.log(arr.push('new element 2'));
// console.log(arr)
// arr.pop();
// console.log(arr)
// arr.unshift('lol')
// console.log(arr)
// console.log(arr.shift());
// console.log(arr)
// console.log(arr.push('new element 3'));
// console.log(arr.push('new element 4'));
// let join = arr.join('!')
// console.log(join)
//
// let num = [1, 2, 3];
// let concat = arr.concat(num);
// console.log(concat)
// console.log(arr)
// console.log(num.reverse());
// let slice = concat.slice(0, 5);
// console.log(slice)
// let wtf = arr.concat(slice)
// console.log(wtf);
//
// let splice = concat.splice(0, 1);
// console.log(splice);
// console.log(concat);
//
// let lol = concat.splice(concat.indexOf(1), 3 )
// console.log(lol);
//
// console.log(concat);
// console.log(concat.includes('new element 3'));
// let users = [
//     {name: 'vasya', age: 30, status: false},
//     {name: 'olya', age: 31, status: true},
//     {name: 'sergii', age: 20, status: false},
//     {name: 'roman', age: 25, status: true},
//     {name: 'andrii', age: 28, status: false},
//     {name: 'tumofii', age: 34, status: true}
// ]
// users.forEach((value,index) => console.log(value));
// users.forEach(value => console.log(value.name))
// -------- filter -------- //
// console.log(users.filter(value => value.age >= 30));
// -------- map -------- //
// let mapedUsers = users.map( (value, index) => {
//     return  {...value, id: index+1}
// });
// console.log(mapedUsers);
// -------- filter -------- //
// -------- find -------- //
// let finder = users.find(value => value.name === 'roman');
// console.log(finder);
// -------- every -------- //
// console.log(users.every(function (value) {
//     return value.status;
// }));
// -------- some -------- //
// console.log(users.some(value => value.status));
// -------- sort -------- //
// console.log(users.sort((u1, u2) => u1.age - u2.age));
// console.log(users.sort((a, b) => {
//     if (a.age > b.age) {
//         return 1;
//     }
//     if (a.age < b.age) {
//         return -1;
//     }
//     if (a.age === b.age) {
//         return 0;
//     }
// }));
// -------- reduce -------- //
// console.log(users.reduce((accumulator, user) => {
//     if (user.status) {
//         accumulator.statT.push(user);
//     } else {
//         accumulator.statF.push(user);
//     }
//     return accumulator;
// }, {statT: [], statF: []}));
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('hello world'.length);
console.log('lorem ipsum'.length);
console.log('javascript is cool'.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('hello world'.toUpperCase());
console.log('lorem ipsum'.toUpperCase());
console.log('javascript is cool'.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log('HELLO WORLD'.toLowerCase());
console.log('LOREM IPSUM'.toLowerCase());
console.log('JAVASCRIPT IS COOL'.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str.length); // 16
// console.log(str.trim().length); // 12

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str = 'Ревуть воли як ясла повні';
// let arr = str.split(' ');
// console.log(arr);
let arr = function stringToarray(str) {
    return str.split(' ');
};
console.log(arr(str))

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let numArray = [10,8,-7,55,987,-1011,0,1050,0];
// let mapNumArray = numArray.map(String);
let mapNumArray = numArray.map(value => String(value));
console.log(mapNumArray);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11,21,3];
// console.log(nums.sort(function (a, b) {
//     return a - b;
// }));
function sortNums(nums, direction) {
    if (direction === 'ascending') {
        nums.sort((a, b) => a - b);
    }
    if (direction === 'descending') {
        nums.sort((a, b) => b - a);
    }
    return nums;
}
console.log(sortNums(nums, 'ascending'));

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let sortedCourses = coursesAndDurationArray.sort((month1, month2) => month2.monthDuration - month1.monthDuration);
console.log(sortedCourses);
let filteredCourses = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(filteredCourses)

// описати колоду карт
let deck = [
    {cardSuit:'Spade', value: 6, color:'Black'},
    {cardSuit:'Clubs', value: 6, color:'Black'},
    {cardSuit:'Hearts', value: 6, color:'Red'},
    {cardSuit:'Diamonds', value: 6, color:'Red'},
    {cardSuit:'Spade', value: 7, color:'Black'},
    {cardSuit:'Clubs', value: 7, color:'Black'},
    {cardSuit:'Hearts', value: 7, color:'Red'},
    {cardSuit:'Diamonds', value: 7, color:'Red'},
    {cardSuit:'Spade', value: 8, color:'Black'},
    {cardSuit:'Clubs', value: 8, color:'Black'},
    {cardSuit:'Hearts', value: 8, color:'Red'},
    {cardSuit:'Diamonds', value: 8, color:'Red'},
    {cardSuit:'Spade', value: 9, color:'Black'},
    {cardSuit:'Clubs', value: 9, color:'Black'},
    {cardSuit:'Hearts', value: 9, color:'Red'},
    {cardSuit:'Diamonds', value: 9, color:'Red'},
    {cardSuit:'Spade', value: 10, color:'Black'},
    {cardSuit:'Clubs', value: 10, color:'Black'},
    {cardSuit:'Hearts', value: 10, color:'Red'},
    {cardSuit:'Diamonds', value: 10, color:'Red'},
    {cardSuit:'Spade', value: 'Jack', color:'Black'},
    {cardSuit:'Clubs', value: 'Jack', color:'Black'},
    {cardSuit:'Hearts', value: 'Jack', color:'Red'},
    {cardSuit:'Diamonds', value: 'Jack', color:'Red'},
    {cardSuit:'Spade', value: 'Queen', color:'Black'},
    {cardSuit:'Clubs', value: 'Queen', color:'Black'},
    {cardSuit:'Hearts', value: 'Queen', color:'Red'},
    {cardSuit:'Diamonds', value: 'Queen', color:'Red'},
    {cardSuit:'Spade', value: 'King', color:'Black'},
    {cardSuit:'Clubs', value: 'King', color:'Black'},
    {cardSuit:'Hearts', value: 'King', color:'Red'},
    {cardSuit:'Diamonds', value: 'King', color:'Red'},
    {cardSuit:'Spade', value: 'Ace', color:'Black'},
    {cardSuit:'Clubs', value: 'Ace', color:'Black'},
    {cardSuit:'Hearts', value: 'Ace', color:'Red'},
    {cardSuit:'Diamonds', value: 'Ace', color:'Red'}
];
// - знайти піковий туз
let spadeAce = deck.filter(card => card.cardSuit === 'Spade' && card.value === 'Ace');
console.log(spadeAce);
// - всі шістки
let allSix = deck.filter(card => card.value === 6);
console.log(allSix);
// - всі червоні карти
let allRedCards = deck.filter(card => card.color === 'Red');
console.log(allRedCards);
// - всі буби
let allDiamonds = deck.filter(card => card.cardSuit === 'Diamonds');
console.log(allDiamonds);
// - всі трефи від 9 та більше
let allClubsFromNineAndHigher = deck.filter(card => card.cardSuit === 'Clubs' && (card.value > 8 || card.value.length > 2));
console.log(allClubsFromNineAndHigher);
// console.log(deck.filter(function (clubs) {
//     if (clubs.cardSuit === 'Clubs' && clubs.value >= 9) {
//         return clubs
//     }
// }));
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
// deck.forEach(value => console.log(value));


// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let pack = deck.reduce((accum, card) => {
    if (card.cardSuit === 'Spade') {
        accum.spades.push(card);
    } else if (card.cardSuit === 'Diamonds') {
        accum.diamonds.push(card);
    } else if (card.cardSuit === 'Hearts') {
        accum.hearts.push(card);
    } else if (card.cardSuit === 'Clubs') {
        accum.clubs.push(card);
    }
    return accum;
}, {spades:[], diamonds:[], hearts:[], clubs:[]});
console.log(pack);