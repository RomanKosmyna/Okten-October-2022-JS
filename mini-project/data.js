// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users +
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user. +
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html,
// котра має детальну інфорацію про об'єкт на який клікнули  +
let container = document.createElement('div');
container.classList.add('main-container');
document.body.appendChild(container);
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(userInfo => {
        userInfo.map(user => {
            let {id, name, username, email} = user;
            let userDiv = document.createElement('div');
            userDiv.classList.add('user-block');
            userDiv.innerText = `Name: ${name}. ID: ${id}`;
            let a = document.createElement('a');
            a.href = './user details/user-details.html?id=' + id;
            a.classList.add('user-info-link');
            a.innerText = `For more user information, click here.`;
            userDiv.appendChild(a);
            container.appendChild(userDiv);
        })
    })
// Стилізація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user. +
//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .
//     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)