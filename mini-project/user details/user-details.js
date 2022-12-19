let url = new URL (location.href);
let id = url.searchParams.get('id');
let api = 'https://jsonplaceholder.typicode.com/users/';

fetch(api + id)
    .then(response => response.json())
    .then(user => {
        for (const userInfo in user) {

            if (typeof user[userInfo] !== 'object') {
                let div = document.createElement('div');
                div.innerText = `${userInfo}: ${user[userInfo]}`;
                div.classList.add('user-fullInfo-block');
                document.body.appendChild(div);
            } else {
                let div = document.createElement('div');
                div.innerText = `${userInfo}:`;
                div.classList.add('user-fullInfo-block');
                document.body.appendChild(div);

                for (const key in user[userInfo]) {
                    if (typeof user[userInfo][key] !== 'object') {
                        let keyDiv = document.createElement('div');
                        keyDiv.innerText = `${key}: ${user[userInfo][key]}`;
                        div.appendChild(keyDiv);
                    } else {
                        let keyDiv = document.createElement('div');
                        keyDiv.innerText = `${key}:`
                        div.appendChild(keyDiv);

                        for (const element in user[userInfo][key]) {
                            let geoDiv = document.createElement('div');
                            geoDiv.innerText = `${element}: ${user[userInfo][key][element]}`;
                            keyDiv.appendChild(geoDiv);
                        }
                    }
                }

            }

        }
        let button = document.createElement('button');
        button.innerText = `user posts`;
        button.setAttribute('type','button');
        button.classList.add('post-btn');
        let buttonDiv = document.createElement('div');
        buttonDiv.classList.add('post-btn-block')
        buttonDiv.appendChild(button);
        document.body.appendChild(buttonDiv);

        button.onclick = function () {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then(response => response.json())
                .then(userPostArray => {
                    let postTitleContainer = document.createElement('div');
                    postTitleContainer.classList.add('post-title-container');

                    for (const userPost in userPostArray) {
                        let titleDiv = document.createElement('div');
                        titleDiv.classList.add('post-title-block');
                        titleDiv.innerText = `Post title: ${userPostArray[userPost].title}`;
                        let aForPosts = document.createElement('a');
                        aForPosts.classList.add('post-link');
                        aForPosts.href = `../post details/post-details.html?postID=${userPostArray[userPost].id}&userID=${userPostArray[userPost].userId}`;
                        aForPosts.innerText = `For full post information, click here.`;
                        titleDiv.appendChild(aForPosts);
                        document.body.appendChild(postTitleContainer);
                        postTitleContainer.appendChild(titleDiv);
                    }
                })
            button.disabled = 'true';
            }
    })
// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули  +
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
//     котра має детальну інфу про поточний пост.