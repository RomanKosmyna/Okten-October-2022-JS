// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// Всі данні в одному блоці.
// let userAddress = [];
// users.map(user => userAddress.push(user.address));
// console.log(userAddress);
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)
// users.map(user => {
//     let div = document.createElement('div');
//     document.body.appendChild(div);
//
//     let nameDiv = document.createElement('div');
//     nameDiv.innerText = `${user.name}`;
//
//     let ageDiv = document.createElement('div');
//     ageDiv.innerText = `${user.age}`;
//
//     let statusDiv = document.createElement('div');
//     statusDiv.innerText = `${user.age}`;
//
//     let addressDiv = document.createElement('div');
//     addressDiv.innerText = `${Object.values(user.address)}`;
//
//     div.append(nameDiv, ageDiv, statusDiv, addressDiv);
// })
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
// users.map(user => {
//     let mainDiv = document.createElement('div');
//     document.body.appendChild(mainDiv);
//
//     let nameDiv = document.createElement('div');
//     nameDiv.innerText = `${user.name}`;
//
//     let ageDiv = document.createElement('div');
//     ageDiv.innerText = `${user.age}`;
//
//     let statusDiv = document.createElement('div');
//     statusDiv.innerText = `${user.age}`;
//
//     let addressDiv = document.createElement('div');
//
//
//     let addressCityDiv = document.createElement('div');
//     addressCityDiv.innerText = `${user.address.city}`;
//
//     let addressCountryDiv = document.createElement('div');
//     addressCountryDiv.innerText = `${user.address.country}`;
//
//     let addressHouseDiv = document.createElement('div');
//     addressHouseDiv.innerText = `${user.address.houseNumber}`;
//
//     let addressStreetDiv = document.createElement('div');
//     addressStreetDiv.innerText = `${user.address.street}`;
//
//     addressDiv.append(addressCityDiv, addressCountryDiv, addressStreetDiv, addressHouseDiv);
//     mainDiv.append(nameDiv, ageDiv, statusDiv, addressDiv, addressStreetDiv);
// })


// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
// let h2 = document.getElementsByTagName('h2');
// let contentDiv = document.createElement('div');
// contentDiv.setAttribute('id','content');
// document.body.appendChild(contentDiv);
//
// let ul = document.createElement('ul');
// contentDiv.appendChild(ul);
//
// for (let i = 0; i < h2.length; i++) {
//     let li = document.createElement('li');
//     li.innerText = `${h2[i].innerHTML}`;
//     ul.appendChild(li);
// }


// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
//
// ];
//
// rules.map(rule => {
//     let ruleDiv = document.createElement('div');
//     document.body.appendChild(ruleDiv);
//
//     let titleDiv = document.createElement('div');
//     titleDiv.innerHTML = `<h2>${rule.title}</h2>`;
//
//     let bodyDiv = document.createElement('div');
//     bodyDiv.innerHTML = `<p>${rule.body}</p>`;
//     ruleDiv.append(titleDiv, bodyDiv);
// })