// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
//------
// function User(id, name, username, email, address, phone, website, company) {
//     this.id = id;
//     this.name = name;
//     this.username = username;
//     this.email = email;
//     this.address = address;
//     this.phone = phone;
//     this.company = company;
// }
// let user = new User(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz',
//     {street: 'Kulas Light', suite: 'Apt. 556', city: 'Gwenborough', zipcode: '92998-3874', geo:{lat: '-37.3159', lng: '81.1496'}},
//     '1-770-736-8031 x56442', 'hildegard.org', {name: 'Romaguera-Crona', catchPhrase: 'Multi-layered client-server' +
//             ' neural-net', bs: 'harness real-time e-markets'})
// console.log(user)



// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// class Description {
//         constructor(titleOfTag, action, attrs) {
//             this.titleOfTag = titleOfTag;
//             this.action = action;
//             this.attrs = attrs;
//         }
// }
// let descriptionOftagA = new Description('a', 'The <\a> tag defines a hyperlink, which is used to link from one page' +
//     ' to another.', [{titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {titleOfAttr: 'accesskey2', actionOfAttr: 'Переход к области с помощью комбинации клавиш2'},
//     {titleOfAttr: 'accesskey3', actionOfAttr: 'Переход к области с помощью комбинации клавиш3'}]);
// console.log(descriptionOftagA)