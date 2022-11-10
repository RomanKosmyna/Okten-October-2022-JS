// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
let arrayOne = ['lorem lorem lorem 1', 'lorem lorem lorem 2', 'lorem lorem lorem 3', 'lorem lorem lorem 4', 'lorem lorem lorem 5', 'lorem lorem lorem 6', 'lorem lorem lorem 7', 'lorem lorem lorem 8', 'lorem lorem lorem 9', 'lorem lorem lorem 10'];
// for (const string of arrayOne) {
//     document.write(`<div class="first-task display">
//                         <p>${string}</p>
//                     </div>
// `);
// }
for (let i = 0; i < arrayOne.length; i++) {
    const arrayOneElement = arrayOne[i];
    document.write(`<div class="first-task display">
                        <p>${arrayOneElement}</p>
                    </div>
`);
}
document.write(`</div>`)
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < arrayOne.length; i++) {
    const arrayOneElement = arrayOne[i];
    document.write(`<div class="second-task display">
                        <p>${/*arrayOneElement*/arrayOne[i]}</p>
                    </div>
`);
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0;
while (i < 20) {
    document.write(
        `<div class="wiki">
            <h1>Wikipedia is a free online encyclopedia</h1>
         </div>`
    );
    i++
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let arrayTwo = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'twenty'
]
let iTwo = 0;
document.write(`<div class="number-block">`)
while (iTwo < 20) {
    let array = arrayTwo[iTwo]
    document.write(`<div class="numbers">
                        <h1>${array}</h1>
                    </div>`
    );
    iTwo++
}
document.write(`</div>`)
// ---------------------------------------- TASK STARTS ------------------------------------- //
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul class="ul">`);
for (let j = 0; j < listOfItems.length; j++) {
    const listOfItem = listOfItems[j];
    document.write(`<li>${listOfItem}</li>`);
}
document.write(`</ul>`)
// -----------------------------------------------  TASK STARTS ------------------------------------ //
// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image:
// 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg' }, {
// title: 'juice', price: 27, image:
// 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg' }, {
// title: 'tomato', price: 47, image:
// 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74' }, { title: 'tea',
// price: 15, image:
// 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
// }, ]; ШАБЛОН <div class="product-card"> <h3 class="product-title">TITLE. Price - PRICE</h3> <img src="IMAGE" alt=""
// class="product-image"> </div> Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
document.write(`<div class="main-block">`)
for (let i = 0; i < products.length; i++) {
    const product = products[i];
    document.write(`<div class="product-card">
                        <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
                        <img src="${product.image}" alt="${product.title}" class="product-image">
                    </div>`
    );
}
document.write(`</div>`);
// --------------------------------------------------------------------------- //
// є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
//     - користувачів зі статусом true
document.write(`<div class="super-main">`);
for (const user of users) {
    if (user.status) {
        document.write(`<div class="true main">
                                <p><span class="first-span">${user.name}</span> <span class="second-span">${user.age}</span> <span class="third-span">${user.status}</span></p>
                            </div>`
        );
    }
}
// - користувачів зі статусом false
for (const user of users) {
    if (!user.status) {
        document.write(`<div class="false main">
                                <p><span class="first-span">${user.name}</span> <span class="second-span">${user.age}</span> <span class="third-span">${user.status}</span></p>
                            </div>`
        );
    }
}
// - користувачів які старші за 30 років
for (const user of users) {
    if (user.age > 30) {
        document.write(`<div class="age main">
                                <p><span class="first-span">${user.name}</span> <span class="second-span">${user.age}</span> <span class="third-span">${user.status}</span></p>
                            </div>`
        );
    }
}