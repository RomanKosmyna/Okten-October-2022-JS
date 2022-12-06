// 1) Створити масив з 20 чисел та:
// let numArray = [100, 2, 3, 4, 5, 6, 7, 8, 90, 10, 11, 12, 13, 44, 15, 16, 17, 18, 19, 20];
//     a) відсортувати його від меншого до більшого.
// let sortNum = numArray.sort((a,b) => a - b);
// console.log(sortNum)

//     b) відсортувати його від більшого до меншого.
// let sort = numArray.sort((a,b) => {
//     if ( a < b) {
//         return 1
//     }
//     if (a > b) {
//         return -1
//     }
//     if ( a === b) {
//         return 0
//     }
// })
// console.log(sort)

//     c) Відфілтрувати числа які є кратними 3.
// numArray.filter(number => {
//     if (number % 3 === 0) {
//         console.log(number)
//     }
// })

// d) Відфілтрувати числа які є більшими за 10.
// console.log(numArray.filter(number => number > 10));

// e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
// numArray.forEach(number => document.write(number + ' '));

// f) За допомогою map збільшити кожен елемент в масиві в три рази.
// console.log(numArray.map(number => number * 3));

// g) Порахувати загальну суму всіх елментів у масиві (reduce)
// let sum = numArray.reduce((total, amount) => total + amount);
// console.log(sum)


// 2) Створити масив з 20 стрічок та:
let array = ['long', 'short', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'o', 'lol', 'fifteen', 'sixteen', 'dog', 'eighteen', 'nineteen', 'sea'];
//     a) Відсортувати його в алфавітному порядку
// console.log(array.sort());

// b) Відсортувати в зворотньому порядку
// console.log(array.sort().reverse());

// c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
// let newArray = [];
// array.map(word => word.length > 4 ? newArray.push(word) : false)
// console.log(newArray)

// d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
// let beginningStr = 'Sam says';
// array.map(word => {console.log(`${beginningStr} ${word}`);})
// console.log(array.map(word => beginningStr + ' ' + word));

// 3) Все робити тільки за допомогою методів масивів!
//     Дано масив :
//     const users = [
//         {name: 'vasya', age: 31, isMarried: false},
//         {name: 'petya', age: 30, isMarried: true},
//         {name: 'kolya', age: 29, isMarried: true},
//         {name: 'olya', age: 28, isMarried: false},
//         {name: 'max', age: 30, isMarried: true},
//         {name: 'anya', age: 31, isMarried: false},
//         {name: 'oleg', age: 28, isMarried: false},
//         {name: 'andrey', age: 29, isMarried: true},
//         {name: 'masha', age: 30, isMarried: true},
//         {name: 'olya', age: 31, isMarried: false},
//         {name: 'max', age: 31, isMarried: true}
//     ];
// a) відсортувати його за  віком (зростання , а потім окремо спадання)
// console.log(users.sort((a, b) => a.age - b.age));
// console.log(users.sort((a, b) => {
//     if (a.age < b.age) {
//         return 1
//     }
//     if (a.age > b.age) {
//         return -1
//     }
//     return 0
// }));

// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// console.log(users.sort((a, b) => a.name.length - b.name.length));
// console.log(users.sort((a, b) => {
//     if (a.name.length < b.name.length) {
//         return 1
//     }
//     if (a.name.length > b.name.length) {
//         return -1
//     }
//     return 0
// }));

// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу
// його створювати - ваше рішення),
// та зберегти це в новий масив (первинний масив залишиться без змін)
// let newArrayWithAnId = [];
// users.map((user, i) => {
//     newArrayWithAnId.push({...user, id: i + 1})
// })
// console.log(newArrayWithAnId)
// console.log(users)
// d) відсортувати його за індентифікатором
// console.log(newArrayWithAnId.sort((a, b) => a.id - b.id));

// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)

let everyoneWhoIsMarried = [];

// let reduceUsers = newArrayWithAnId.reduce((accum,value) => {
//     if (value.isMarried === true) {
//         accum.married.push({...value, flat:true});
//     } else {
//         accum.notMarried.push(value)
//     }
//     return accum;
// }, {married: [], notMarried: [] });
// console.log(reduceUsers)
// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
//
// const cars = [
//     {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//     {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//     {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//     {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//     {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//     {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//     {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//     {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//     {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//     {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//     {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//     {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//     {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
// ];
//
// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
// console.log(cars.filter(car => car.volume > 3));

// - двигун = 2л
// console.log(cars.filter(car => car.volume === 2));

// - виробник мерс
// console.log(cars.filter(car => car.producer === 'mercedes'));

// - двигун більше 3х літрів + виробник мерседес
// console.log(cars.filter(car => car.volume >= 3 && car.producer === 'mercedes'));

// - двигун більше 3х літрів + виробник субару
// console.log(cars.filter(car => car.volume > 3 && car.producer === 'subaru'));

// - сили більше ніж 300
// console.log(cars.filter(car => car.power > 300));

// - сили більше ніж 300 + виробник субару
// console.log(cars.filter(car => car.power > 300 && car.producer === 'subaru'));

// - мотор серіі ej
// console.log(cars.filter(car => car.engine.includes('ej')));

// - сили більше ніж 300 + виробник субару + мотор серіі ej
// console.log(cars.filter(car => car.power > 300 && car.producer === 'subaru' && car.engine.startsWith('ej')));

// - двигун меньше 3х літрів + виробник мерседес
// console.log(cars.filter(car => car.volume < 3 && car.producer === 'mercedes'));

// - двигун більше 2л + сили більше 250
// console.log(cars.filter(car => car.volume > 2 && car.power > 250));

// - сили більше 250  + виробник бмв
// console.log(cars.filter(car => car.power > 250 && car.producer === 'bmw'));



// - взять слдующий массив
// const usersWithAddress = [
//     {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//     {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//     {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//     {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//     {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//     {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//     {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//     {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//     {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//     {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// ];
//
// -- Відсортувати їх по ID
// console.log(usersWithAddress.sort((a, b) => a.id - b.id));
// -- Відсортувати їх по ID в зворотньому порядку
// console.log(usersWithAddress.sort((a, b) => b.id - a.id));
// console.log(usersWithAddress.sort((a, b) => {
//     if (a.id < b.id) {
//         return 1
//     }
//     if (a.id > b.id) {
//         return -1
//     }
//     return 0
// }));
// -- Відсортувати по віку
// console.log(usersWithAddress.sort((a, b) => a.age - b.age));
// -- Відсортувати по віку в зворотньому порядку
// console.log(usersWithAddress.sort((a, b) => b.age - a.age));
// -- Відсорутвати по імені
// console.log(usersWithAddress.sort((a, b) => a.name - b.name));
// -- Відсорутвати по назві вулиці
// console.log(usersWithAddress.sort((a, b) => {
//     if (a.address['street'] < b.address['street']) {
//         return -1
//     }
//     if (a.address['street'] > b.address['street']) {
//         return 1
//     }
//     return 0
// }))
// -- Відсорутвати по номеру будинку
// console.log(usersWithAddress.sort((a, b) => a.address.number - b.address.number));
// -- Залигити тільки тих, хто молодший ніж 30 (filter)
// console.log(usersWithAddress.filter(user => user.age < 30));
// -- Залишити тільки одружених
// console.log(usersWithAddress.filter(user => user.isMarried === true));
// -- Залишити тільки одружених, які молодні за 30
// console.log(usersWithAddress.filter(user => user.isMarried === true && user.age < 30));
// -- Залишити лише тих, в кого парні номери будинків.
// console.log(usersWithAddress.filter(user => user.address['number'] % 2 === 0));
// -- Порахувати загальний вік всіх людей. (reduce)
// console.log(usersWithAddress.reduce((total, currentValue) => total + currentValue.age, 0));

// -- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)
// let WithAChild = usersWithAddress.reduce((accum,user) => {
//     if (user.isMarried === true && user.age > 30) {
//         accum.userWithAChild.push({...user, child: true})
//     }
//     return accum;
// }, {userWithAChild: []})
// console.log(WithAChild);
// ______________________________________________________________________________________________________________________________________________________
// Додатково
// ______________________________________________________________________________________________________________________________________________________
//
// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.
//     Для початку вкладіть всі наші створені автомобілі в масив cars.
const cars = [
    {brand: 'subaru', volume: 2, owner: {name: 'Roki', age: 30, drivingExperience: 4}, price: 200, year: 2010},
    {brand: 'subaru', volume: 3, owner: {name: 'Yura', age: 20, drivingExperience: 1}, price: 700, year: 2020},
    {brand: 'subaru', volume: 6, owner: {name: 'John', age: 26, drivingExperience: 2}, price: 500, year: 2008},
    {brand: 'bmw', volume: 1, owner: {name: 'Andrii', age: 34, drivingExperience: 6}, price: 400, year: 2016},
    {brand: 'bmw', volume: 4, owner: {name: 'Olya', age: 27, drivingExperience: 1}, price: 300, year: 2015},
    {brand: 'mercedes', volume: 3, owner: {name: 'Anna', age: 29, drivingExperience: 3}, price: 450, year: 2007},
    {brand: 'audi', volume: 6, owner: {name: 'Obama', age: 57, drivingExperience: 25}, price: 900, year: 2019},
    {brand: 'audi', volume: 1, owner: {name: 'Biden', age: 62, drivingExperience: 30}, price: 1100, year: 2021},
];
//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// let autoparkRepair = cars.map(car => {
//     car.volume = car.volume*(1 + 0.10);
// })
// console.log(cars)
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// let newDrivers = ['1', '2', '3', '4', '5', '6', '7', '8'];
// for (let i = 0; i < cars.length; i++) {
//     cars[i].owner.name = newDrivers[i];
// }
// console.log(cars)
// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та
// ціну на 5%
// for (let i = 0; i < cars.length; i+=2) {
//     cars[i].volume = cars[i].volume*(1 + 0.10);
//     cars[i].price = cars[i].price*(1 + 0.05);
// }
// console.log(cars)
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
//     то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
// let advancedTraining = [];
// let lowExperience = cars.map(car => {
//     if (car.owner.drivingExperience < 5 && car.owner.age > 25) {
//         advancedTraining.push(car);
//     }
// })
//
// let experience = function (advancedTraining) {
//     for (let i = 0; i < advancedTraining.length; i++) {
//         advancedTraining[i].owner.drivingExperience += 1;
//     }
//     console.log(totalPrice);
// }
// let totalPrice = advancedTraining.reduce((total, currentValue) => total + currentValue.price, 0);
// experience(advancedTraining)
// console.log(advancedTraining)
//
// Задача: дан отсортированный по возрастанию массив целых чисел.
//     Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
// Пример:
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.
const arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];
function boom(num) {
    if (arr.includes(num)) {
        return `MinIndex = ${arr.indexOf(num)}, MaxIndex = ${arr.lastIndexOf(num)}`;
    }
    if (!arr.includes(num)) {
        return -1;
    }
}
console.log(boom(4));
