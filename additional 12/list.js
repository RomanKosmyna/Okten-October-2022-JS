const productInfo = JSON.parse(localStorage.getItem('productInfo'));
const container = document.createElement('div');
container.classList.add('container');
const resetData = document.createElement('button');
resetData.innerText = `Clear all data from LS`;
container.appendChild(resetData);
document.body.appendChild(container);

for (let i =0; i < productInfo[1]; i++) {
    const slotContainer = document.createElement('div');
    slotContainer.classList.add('slotContainer');
    const infoName = document.createElement('div');
    infoName.innerText = `${productInfo[0]}`;
    const infoQuantity = document.createElement('div');
    const infoPrice = document.createElement('div');
    infoPrice.innerText = `Price - ${productInfo[2]} $`;
    const infoImg = document.createElement('img');
    infoImg.src = productInfo[3];
    const resetSlot = document.createElement('button');
    resetSlot.innerText = `Delete this`;
    slotContainer.append(infoName, infoQuantity, infoPrice, infoImg, resetSlot);
    container.appendChild(slotContainer);

    resetSlot.addEventListener('click', function () {
        slotContainer.style.display = 'none';
    })
}
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа. До
// кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар
resetData.addEventListener('click', function () {
    localStorage.clear();
    container.style.display = 'none';
})

