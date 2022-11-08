// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 1;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}
// if (x !== 0 ? 'Вірно' : 'Невірно') {}
let a =[1, 0, -3]
if (a.length !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}
// let a = 1;
// if (a !== 0) {
//     console.log('Вірно');
// } else {
//     console.log('Невірно');
// }



// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 16;
if (time <= 15) {
    console.log('first part');
} else if (time <= 30) {
    console.log('second part');
} else if (time <= 45) {
    console.log('third part');
} else if (time <= 59) {
    console.log('fourth part');
} else {
    console.log('error');
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 30;
if (day <= 10) {
    console.log('first');
} else if (day <= 20) {
    console.log('second');
} else if (day <= 31) {
    console.log('third');
} else {
    console.log('error');
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let dayNumber = +prompt('If 1 is a Monday and 2 is a Tuesday, then write the number of the day of the week');
switch (dayNumber) {
    case 1:
        document.write('Monday');
        break;
    case 2:
        document.write('Tuesday');
        break;
    case 3:
        document.write('Wednesday');
        break;
    case 4:
        document.write('Thursday');
        break;
    case 5:
        document.write('Friday');
        break;
    case 6:
        document.write('Saturday');
        break;
    case 7:
        document.write('Sunday');
        break;
    default:
        document.write('???????');
}
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let firstNumber = +prompt('Enter a number');
let secondNumber = +prompt('Enter a number');

if (firstNumber > secondNumber) {
    alert('First number is higher');
    console.log(firstNumber);
} else if (firstNumber < secondNumber) {
    alert('Second number is higher');
    console.log(secondNumber);
} else if (firstNumber === secondNumber && firstNumber > 0 || secondNumber > 0 && firstNumber < 0 || secondNumber > 0) {
    alert('Both numbers are equal');
    console.log(`${firstNumber} = ${secondNumber}`);
}
// } else {
//     alert('Both numbers are equal');
//     console.log(`${firstNumber} = ${secondNumber}`);
// }


//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

// let x1 = '';
// console.log(x1)
// if (x1 === false) {
//     x1 = 'default';
//     console.log(x1);
// }

// let x1;
// let falseTrash = ['', 0, undefined, null]
// if (x1 === falseTrash[0]) {
//     x1 = 'default';
// };

// let x1;
// if (x1) {
//     alert(x1);
//     console.log(x1);
// } else {
//     x1 = 'default';
//     console.log(x1);
// }

// let x1;
// if (x1 === null) {
//     x1 = 'default';
// } else if (x1 === undefined) {
//
// }
let x1 = prompt() || 'default';
console.log(x1)

// let x1 = ''? true : 'default';
// console.log(x1)