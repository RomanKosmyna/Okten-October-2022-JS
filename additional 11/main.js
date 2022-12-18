// є масив -
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
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву
// favorites улюблених обраних об'єктів в локальному сховищі.
let favourites = [];
users.map(user => {
    let div = document.createElement('div');
    let p = document.createElement('p');
    p.innerText = `${user.name} ${user.age} ${user.status}`;
    let button = document.createElement('button');
    button.innerText = `Add to favourite`;
    div.append(p, button);

    button.addEventListener('click', function() {
        favourites.push(p.innerHTML);
        console.log(favourites)
    })
    document.body.appendChild(div);
})

let a = document.createElement('a');
a.setAttribute('href','favourites.html');
a.innerText = 'Click here to see your favourites!';
document.body.append(a);
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.
