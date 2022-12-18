// let url = new URL(location.href);
// let id = url.searchParams.get('id');
// let apiUrl = `http://jsonplaceholder.typicode.com/users/`;
// fetch(apiUrl + id)
//     .then(response => response.json())
//     .then(user => {
//         for (const item in user) {
//             let div = document.createElement('div');
//             if (typeof user[item] !== 'object') {
//                 div.innerText = `${item}: ${user[item]}`;
//             } else {
//                 div.innerText = `${item}:`;
//                 div.style.color = 'red';
//
//                 for (const key in user[item]) {
//                     let userInnerDiv = document.createElement('div');
//                     if (typeof user[item][key] !== 'object') {
//                         userInnerDiv.innerText = `${key}: ${user[item][key]}`;
//                         userInnerDiv.style.color = 'green';
//                     } else {
//                         userInnerDiv.innerText = `${key}:`;
//
//                         for (const element in user[item][key]) {
//                             let elementDiv = document.createElement('div');
//                             if (typeof user[item][key][element] !== 'object') {
//                                 elementDiv.innerText = `${element}: ${user[item][key][element]}`;
//                             }
//                             userInnerDiv.appendChild(elementDiv)
//                         }
//                     }
//                     div.appendChild(userInnerDiv);
//                 }
//             }
//             div.style.fontSize = '30px';
//             document.body.appendChild(div)
//         }
//     })

// function foo(user){
//     for (const userKey in user) {
//         let objKey = user[userKey]
//         if(typeof objKey === "object"){
//             let div = document.createElement('div');
//             div.innerHTML = `${userKey}:`
//             div.style.color = 'red'
//             document.body.appendChild(div)
//             foo(objKey)
//         }else {
//             let div = document.createElement('div');
//             div.innerHTML = `<b>${userKey}</b> ${objKey}`
//             document.body.appendChild(div)
//         }
//     }
// }
// foo(userInfo)