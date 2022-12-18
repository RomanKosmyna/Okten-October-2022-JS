// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let div = document.createElement('div');
// div.setAttribute('id', 'text');
// div.style.height = '30px';
// div.style.background = 'red';
//
// let button = document.createElement('button');
// button.addEventListener('click', function() {
//     div.style.display = 'none';
// })
// document.body.append(div, button);

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let button = document.createElement('button');
// button.innerText = `Click on me!`;
// button.addEventListener('click', function() {
//     button.style.display = 'none';
// })
// document.body.appendChild(button);

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let input = document.createElement('input');
// let button = document.createElement('button');
// button.innerText = `Click on me!`;
// input.setAttribute('type','number');
// input.setAttribute('placeholder','put your age here');
// document.body.append(input, button);
//
// button.onclick = function () {
//     if (input.value < 18 && input.value > 0) {
//         alert('you are not old enough');
//     } else if (input.value.length === 0) {
//         alert('you need to put a value');
//     } else {
//         alert('Welcome');
//     }
// }

// - Создайте меню, которое раскрывается/сворачивается при клике

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
// let comments = [{title : 'lorem', body:'lorem ipsum dolo sit ameti'}];

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.


// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
//
//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
// const nextBtn = document.getElementById("carousel-btn-next");
// const prevBtn = document.getElementById("carousel-btn-prev");
// const slides = document.getElementsByClassName("carousel-item");
// const totalSlides = slides.length;
// let slidePosition = 0;
// nextBtn.addEventListener("click", moveToNextSlide)
// prevBtn.addEventListener("click", moveToPrevSlide)
//
// function moveToNextSlide() {
//     hideAllSlides();
//     if (slidePosition === totalSlides - 1) {
//         slidePosition = 0;
//     } else {
//         slidePosition++;
//     }
//     slides[slidePosition].classList.add("carousel-item-visible");
// }
//
// function moveToPrevSlide() {
//     hideAllSlides();
//     if (slidePosition === 0) {
//         slidePosition = totalSlides - 1;
//     } else {
//         slidePosition--;
//     }
//     slides[slidePosition].classList.add("carousel-item-visible");
// }
//
// function hideAllSlides() {
//     for (let slide of slides) {
//         slide.classList.remove("carousel-item-visible");
//         slide.classList.add("carousel-item-hidden");
//     }
// }


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
// let badWords = ['хуй', 'хуйло', 'хуйленко', 'хуйленкович'];
// let input = document.createElement('input');
// input.setAttribute('type', 'text');
// input.setAttribute('placeholder', 'put a bad word down here!');
// let button = document.createElement('button');
// button.innerText = `Click on me!`;
// document.body.append(input, button);
//
// button.onclick = function () {
//     for (let i = 0; i < badWords.length; i++) {
//         if (input.value.includes(badWords[i])) {
//             alert('Warning');
//         }
//     }
// }
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
// let badWords = ['хуй', 'хуйло', 'хуйленко', 'хуйленкович'];
// let input = document.createElement('input');
// input.setAttribute('type', 'text');
// input.setAttribute('placeholder', 'put a bad word down here!');
// let button = document.createElement('button');
// button.innerText = `Click on me!`;
// document.body.append(input, button);
// //
// button.onclick = function () {
//     for (let i = 0; i < badWords.length; i++) {
//         if (input.value.includes(badWords[i])) {
//             alert('Warning');
//         }
//     }
// }
//
// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем
// заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте



// -- взять массив пользователей
let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
// let input1 = document.createElement('input');
// input1.setAttribute('type', 'checkbox');
// let input2 = document.createElement('input');
// input2.setAttribute('type', 'checkbox');
// let input3 = document.createElement('input');
// input3.setAttribute('type', 'checkbox');
//
// input1.onclick = function () {
//     usersWithAddress.filter(user => {
//         if (!user.status) {
//                 let ul = document.createElement('ul');
//                 let li = document.createElement('li');
//                 li.innerText = `${user.id} ${user.name} ${user.age} ${user.status} ${user.address.city} ${user.address.street} ${user.address.number}`;
//                 ul.appendChild(li);
//                 document.body.append(ul);
//         }
//     });
// };
//
// input2.onclick = function () {
//     usersWithAddress.filter(user => {
//         if (user.age > 29) {
//             let ul = document.createElement('ul');
//             let li = document.createElement('li');
//             li.innerText = `${user.id} ${user.name} ${user.age} ${user.status} ${user.address.city} ${user.address.street} ${user.address.number}`;
//             ul.appendChild(li);
//             document.body.append(ul);
//         }
//     });
// }
//
// input3.onclick = function () {
//     usersWithAddress.filter(user => {
//         if (user.address.city === 'Kyiv') {
//             let ul = document.createElement('ul');
//             let li = document.createElement('li');
//             li.innerText = `${user.id} ${user.name} ${user.age} ${user.status} ${user.address.city} ${user.address.street} ${user.address.number}`;
//             ul.appendChild(li);
//             document.body.append(ul);
//         }
//     });
// }
// document.body.append(input1, input2, input3);



// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
//
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
