// // - є масив
// // let simpsons = [
// //     {
// //         name: 'Bart',
// //         surname: 'Simpson',
// //         age: 10,
// //         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
// //         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
// //     },
// //     {
// //         name: 'Homer',
// //         surname: 'Simpson',
// //         age: 40,
// //         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
// //         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
// //     },
// //     {
// //         name: 'Marge',
// //         surname: 'Simpson',
// //         age: 38,
// //         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
// //         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
// //     },
// //     {
// //         name: 'Lisa',
// //         surname: 'Simpson',
// //         age: 9,
// //         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
// //         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
// //     },
// //     {
// //         name: 'Maggie',
// //         surname: 'Simpson',
// //         age: 1,
// //         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
// //         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
// //     },
// // ];
// // Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
// //     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//
// // for (const simpson of simpsons) {
// //     let simpDiv = document.createElement('div');
// //     simpDiv.classList.add('member');
// //     let h2 = document.createElement('h2');
// //     h2.innerText = `${simpson['name']}`;
// //     let h3 = document.createElement('h3');
// //     h3.innerText = `${simpson['surname']}`;
// //     let h4 = document.createElement('h4');
// //     h4.innerText = `Age - ${simpson['age']}`;
// //     let p = document.createElement('p');
// //     p.innerText = `${simpson['info']}`;
// //     let img = document.createElement('img');
// //     img.src = simpson['photo'];
// //     img.alt = `${simpson.name} ${simpson.surname}`;
// //     simpDiv.append(h2,h3,h4,p,img);
// //     document.body.appendChild(simpDiv);
// // }
//
// //---------------------------------------------------------
// //
// // Цикл в циклі
// // - Є масив
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// // Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих
// // властивостей, для властивості modules зробити список з елементами
// // Приклад структири знаходиться у файлі example.png
// // for (const course of coursesArray) {
// //     let courseDiv = document.createElement('div');
// //     courseDiv.classList.add('course-style');
// //     document.body.appendChild(courseDiv);
// //
// //     let titleDiv = document.createElement('div');
// //     titleDiv.innerHTML = `<h2>${course['title']}</h2>`;
// //     titleDiv.classList.add('title-style');
// //
// //     let monthDiv = document.createElement('div');
// //     monthDiv.innerHTML = `<h3>Course duration - <span>${course['monthDuration']} months</span></h3>`;
// //     monthDiv.classList.add('month-style', 'block');
// //
// //     let hourDiv = document.createElement('div');
// //     hourDiv.innerHTML = `<h3>Course duration - ${course['hourDuration']} hours</h3>`;
// //     hourDiv.classList.add('hour-style', 'block');
// //
// //     let moduleUl = document.createElement('ul');
// //     for (const item of course.modules) {
// //         let li = document.createElement('li');
// //         li.innerText = `${item}`;
// //         moduleUl.appendChild(li);
// //     }
// //     courseDiv.append(titleDiv, monthDiv, hourDiv, moduleUl);
// // }
//
// // ------------------
// //     - створити блок,
// //     - додати йому класи wrap, collapse, alpha, beta
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// // - додати цей блок в body.
// // - клонувати його повністю, та додати клон в body.
//
// // let div = document.createElement('div');
// // div.classList.add('wrap', 'collapse', 'aplha', 'beta');
// // document.body.appendChild(div);
// // let clonedDiv = div.cloneNode()
// // document.body.appendChild(clonedDiv)
//
//
//
//
// // - Є масив:
// //     ['Main','Products','About us','Contacts']
// // Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// // Завдання робити через цикли.
// // let arr = ['Main','Products','About us','Contacts'];
// // ++++++++++++++
//
//
//
// // - Є масив
// // let coursesAndDurationArray = [
// //     {title: 'JavaScript Complex', monthDuration: 5},
// //     {title: 'Java Complex', monthDuration: 6},
// //     {title: 'Python Complex', monthDuration: 6},
// //     {title: 'QA Complex', monthDuration: 4},
// //     {title: 'FullStack', monthDuration: 7},
// //     {title: 'Frontend', monthDuration: 4}
// // ];
// // Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// // Завдання робити через цикли.
// // for (const item of coursesAndDurationArray) {
// //     let mainDiv = document.createElement('div');
// //     document.body.appendChild(mainDiv);
// //     let info = document.createElement('p');
// //     info.innerHTML = `${item.title}, ${item.monthDuration}`;
// //     mainDiv.appendChild(info);
// // }
//
//
//
// // - Є масив
// // let coursesAndDurationArray = [
// //     {title: 'JavaScript Complex', monthDuration: 5},
// //     {title: 'Java Complex', monthDuration: 6},
// //     {title: 'Python Complex', monthDuration: 6},
// //     {title: 'QA Complex', monthDuration: 4},
// //     {title: 'FullStack', monthDuration: 7},
// //     {title: 'Frontend', monthDuration: 4}
// // ];
// // За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з
// // title  елементу, та <p class='description'> з monthDuration елементу.
// //     Завдання робити через цикли.
// // for (const course of coursesAndDurationArray) {
// //     let div = document.createElement('div');
// //     div.classList.add('item');
// //
// //     let h1 = document.createElement('h1');
// //     h1.classList.add('heading');
// //     h1.innerHTML = `${course.title}`;
// //
// //     let p = document.createElement('p');
// //     p.classList.add('description');
// //     p.innerHTML = `${course.monthDuration}`;
// //     div.append(h1, p);
// //     document.body.appendChild(div);
// // }
//
//
//
//
// // -----------
// //
// //     - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
// // let button = document.createElement('button');
// // button.classList.add('btn');
// // button.setAttribute('type','button');
// // button.innerText = `Click me!`;
// //
// // let button2 = document.createElement('button');
// // button2.setAttribute('type','button');
// // button2.innerText = `Click me too!`;
// // document.body.append(button, button2);
// //
// // let id = document.querySelector('#text');
// // button.onclick = function() {
// //     id.style.display = 'none';
// // }
// //
// // button2.onclick = function() {
// //     id.style.display = 'block';
// // }
//
//
// //     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з
// //     інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// // let input = document.createElement('input');
// // input.setAttribute('type','number');
// // input.setAttribute('name','name');
// // input.setAttribute('placeholder','put your age down here');
// // let button = document.createElement('button');
// // button.classList.add('btn');
// // button.setAttribute('type','button');
// // button.innerText = `Confirm!`;
// // document.body.append(input, button);
// //
// // button.addEventListener('click', function() {
// //     if (input.value < 18) {
// //         alert('You are not old enough!!!');
// //     } else {
// //         alert('You are old as fuck!!!');
// //     }
// // })
// //
// // *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// //     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// // (Додатковачастина для завдання)
//
// let input1 = document.createElement('input');
// input1.setAttribute('type','number');
// input1.setAttribute('name','name');
// input1.setAttribute('placeholder','number of rows');
//
// let input2 = document.createElement('input');
// input2.setAttribute('type','number');
// input2.setAttribute('name','name');
// input2.setAttribute('placeholder','number of cells');
//
// let input3 = document.createElement('input');
// input3.setAttribute('type','string');
// input3.setAttribute('name','name');
// input3.setAttribute('placeholder','value of cells');
//
// let button = document.createElement('button');
// button.classList.add('btn');
// button.setAttribute('type','button');
// button.innerText = `Confirm!`;
// document.body.append(input1, input2, input3, button);
//
//
//
// button.addEventListener('click', function() {
//     const tr = input1.value;
//     const td = input2.value;
//     const text = input3.value;
//
//     function generate(row, cell, text) {
//         const tb = document.createElement('table');
//         tb.style.border = '3px solid black';
//         document.body.appendChild(tb);
//
//         for (let i = 0; i < row; i++) {
//             let row = document.createElement('tr');
//             tb.appendChild(row);
//
//             for (let j = 0; j < cell; j++) {
//                 let cell = document.createElement('td');
//                 cell.innerText = `${text}`;
//                 cell.style.border = '3px solid yellow';
//                 row.appendChild(cell);
//             }
//         }
//     }
//     generate(tr, td, text);
// })
//
//
//
