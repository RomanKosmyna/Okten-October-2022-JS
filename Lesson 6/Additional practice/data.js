// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let arr = [];
// function generate() {
//     for (let i = 0; i < 10; i++) {
//         arr.push(Math.round (Math.random() * 100) );
//     }
// }
// generate()
// console.log(arr);

// - Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.
// let arr = [];
// function generate(dia) {
//     for (let i = 0; i < 10; i++) {
//         arr.push(Math.round (Math.random() * dia));
//     }
// }
// generate(100)
// console.log(arr);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let arr = [];
function generate() {
    for (let i = 0; i < 10; i++) {
        arr.push(Math.round (Math.random() * 100) );
    }
}
generate()
// arr.sort((a,b) => a - b);
// console.log(arr)

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, за лишивши тільки парні числа
// console.log(arr.filter(num => num % 2 === 0));

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги
// map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let lol = arr.map(num => num.toString());
// console.log(lol)

// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)
'Robiv ranishe'


const number = (number) => {
    let arr = [];
    let index= 0;

    while(number) {
        let i = number % 10 * 10 ** index++;
        arr.unshift(i);
        number /= 10;
        number = parseInt(number);

        if (i === 0) {
            arr.shift();
        }
    }
    return arr.join('+');
}
let s = number(40404);
console.log(s);