// let url = new URL(location.href);
// let postData = url.searchParams.get('data');
// // console.log(parsedData);
// let postDiv = document.createElement('div');
// postDiv.classList.add('full-post-info-block');
// let h2 = document.createElement('h2');
// let h3 = document.createElement('h3');
// let h4 = document.createElement('h4');
// let p = document.createElement('p');
// let commentSection = document.createElement('h5');

let urlUser = new URL(location.href);
let idUser = urlUser.searchParams.get('userID');

let urlPost = new URL(location.href);
let idPost = urlPost.searchParams.get('postID');

fetch(`https://jsonplaceholder.typicode.com/users/${idUser}/posts`)
    .then(response => response.json())
    .then(post => {
        for (const postElement of post) {
            if(postElement.id === +idPost) {
                for (const key in postElement) {
                    let postInfo = document.createElement('div');
                    postInfo.classList.add('post-info');
                    postInfo.innerText = `${key}: ${postElement[key]}`;
                    document.body.appendChild(postInfo);
                }
            }
        }
        fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}/comments`)
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
    })

//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули . +
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста            +
// (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
