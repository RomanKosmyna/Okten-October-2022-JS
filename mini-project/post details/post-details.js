let url = new URL(location.href);
let postData = url.searchParams.get('data');
let parsedData = JSON.parse(postData);

let postDiv = document.createElement('div');
postDiv.classList.add('full-post-info-block');
let h2 = document.createElement('h2');
let h3 = document.createElement('h3');
let h4 = document.createElement('h4');
let p = document.createElement('p');
let commentSection = document.createElement('h5');

h2.innerText = `Title: ${parsedData.title}`;
h3.innerText = `User ID: ${parsedData.id}`;
h4.innerText = `ID: ${parsedData.id}`;
p.innerText = `${parsedData.body}`;
commentSection.innerText = `Comments:`;

postDiv.append(h2, h3, h4, p, commentSection);
document.body.appendChild(postDiv);

fetch(`https://jsonplaceholder.typicode.com/posts/${parsedData.id}/comments`)
    .then(response => response.json())
    .then(commentArray => {
        let commentContainer = document.createElement('div');
        commentContainer.classList.add('comment-container');
        for (const commentKey in commentArray) {
            let div = document.createElement('div');
            div.classList.add('comment-block');
            commentContainer.appendChild(div);
            for (const value in commentArray[commentKey]) {
                let p = document.createElement('p');
                p.innerText = `${value}: ${commentArray[commentKey][value]}`;
                div.appendChild(p);
            }
            document.body.appendChild(commentContainer);
        }
    })
//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули . +
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста            +
// (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
