// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
//-----------------------------------
// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
//-----------------------------------



// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на
// сторінці всі товари. На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа. До
// кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар
const form = document.createElement('form');
const inputName = document.createElement('input');
inputName.setAttribute('placeholder', 'Product name');
inputName.required = 'true';

const inputQuantity = document.createElement('input');
inputQuantity.setAttribute('placeholder', 'Product quantity');
inputQuantity.setAttribute('type','number');
inputQuantity.required = 'true';

const inputPrice = document.createElement('input');
inputPrice.setAttribute('placeholder', 'Product price');
inputPrice.setAttribute('type','number');
inputPrice.required = 'true';

const inputImg = document.createElement('input');
inputImg.setAttribute('placeholder', 'Product image');
inputImg.required = 'true';

const button = document.createElement('button');
button.innerText = 'Submit data';

const divForA = document.createElement('div');
divForA.classList.add('divForA');
const a = document.createElement('a');
a.innerText = 'For more product information';
a.href = 'list.html';
divForA.appendChild(a);
form.append(inputName, inputQuantity, inputPrice, inputImg, button);
document.body.append(form, divForA);
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на
// сторінці всі товари. На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа. До
// кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар
const formQuery = document.querySelector('form');
button.addEventListener('click', function(event) {
    let productInfo = [];
    if (inputName.value !== '' && !inputQuantity.value !== '' && !inputPrice.value !== '' && !inputImg.value !== '') {
        productInfo.push(inputName.value, inputQuantity.value, inputPrice.value, inputImg.value);
        localStorage.setItem('productInfo', JSON.stringify(productInfo));
    }
});
