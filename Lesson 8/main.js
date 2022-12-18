// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let userContainer = [];
// let user1 = new User(1, 'Kyrylo', "Kojym'yaka", 'qwer@gmail.com', '0952312211');
// userContainer.push(user1);
// let user2 = new User(2, 'Kyrylo2', "Kojym'yaka2", 'qwer2@gmail.com', '0952312211(2)');
// userContainer.push(user2);
// let user3 = new User(3, 'Petro', "Kojym'yaka", 'aaaaaaaa@gmail.com', '095233333');
// userContainer.push(user3);
// let user4 = new User(5, 'Danylo', "Kojym'yaka", 'ddddddddddd@gmail.com', '09523344444');
// userContainer.push(user4);
// let user5 = new User(4, 'Roki', "Kojym'yaka", 'dssssssss@gmail.com', '09523342116444');
// userContainer.push(user5);
// let user6 = new User(6, 'Sasha', "Kojym'yaka", 'ffffffffff@gmail.com', '095237777777');
// userContainer.push(user6);
// let user7 = new User(7, 'George', "Kojym'yaka", 'hhhhhhhhhh@gmail.com', '09523387878');
// userContainer.push(user7);
// let user8 = new User(9, 'Ivan', "Kojym'yaka", 'jjjjjjjjjjj@gmail.com', '095233674432');
// userContainer.push(user8);
// let user9 = new User(8, 'Marina', "Kojym'yaka", 'kkkkkkkkkk@gmail.com', '0952356555555');
// userContainer.push(user9);
// let user10 = new User(10, 'Mira', "Kojym'yaka", 'lllllllllll@gmail.com', '09622223355');
// userContainer.push(user10);
// // userContainer.push(user1, user2, ....)
// // console.log(arrayContainer);
//
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let usersWithEvenId = userContainer.filter(user => !(user.id % 2))
// // console.log(usersWithEvenId)
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sortingUsers = userContainer.sort((a,b) => a.id - b.id);
// // console.log(sortingUsers);
//
// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком
// // товарів)
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// // створити пустий масив, наповнити його 10 об'єктами Client
// let clientContainer = [];
// let client1 = new Client(1,'Adolf','Q','adikq@gmail.com','+096-244-77-44',['apples','strawberries']);
// clientContainer.push(client1);
// let client2 = new Client(2,'Danny','W','dannych231@gmail.com','+555-231-45-67',['juice']);
// clientContainer.push(client2);
// let client3 = new Client(3,'Mirak','E','564qwer@proton.mail.com','+787-666-98-72',['oranges', 'lemons', 'apples']);
// clientContainer.push(client3);
// let client4 = new Client(4,'Roki', 'D','roko90@ukr.net','+097-232-11-22',['lego', 'watch', 'candies', 'nose candies']);
// clientContainer.push(client4);
// let client5 = new Client(5,'Dan', 'T', 'aaaasds@gmail.com', '+666-777-88-99', ['fruits', 'books']);
// clientContainer.push(client5);
// let client6 = new Client(6, 'George', 'V', 'zzzzzzzzzzz@gmai.com', '+111-222-33-44', ['sheep']);
// clientContainer.push(client6);
// let client7 = new Client(7, 'Tyr', 'A', 'qqqqqq@ukr.net', '+333-44-55-67', ['1', '2', '3', '4']);
// clientContainer.push(client7);
// let client8 = new Client(8, 'Pan', 'Y', 'wwwwqeff@proton.mail.com', '+666-555-44-31', ['cow']);
// clientContainer.push(client8);
// let client9 = new Client(9, 'Nico', 'C', 'nicoccccc@gmail.com', '+765-453-33-21', ['barbells', 'book']);
// clientContainer.push(client9);
// let client10 = new Client(10, 'John', 'B', 'hhhhhhhhh@gmail.com', '+775-554-33-89', ['1', '2', '3']);
// clientContainer.push(client10);
// // console.log(clientContainer);
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню.
// // (sort)
// let sortUsersWithOrder = clientContainer.sort((a,b) => a.order.length - b.order.length)
// // console.log(sortUsersWithOrder);
//
// // - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// // максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// function Car(model, manufacturer, year, maxSpeed, engine) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
// }
// let car = new Car('audi','VG','2016',500,'Turbo');
// console.log(car)
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// Car.prototype.drive = function() {
// return `їдемо зі швидкістю ${this.maxSpeed} на годину`
// }
// console.log(car.drive());
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// Car.prototype.info = function(model) {
//     return `Model - ${this.model};
//             Manufacturer - ${this.manufacturer}
//             Year - ${this.year}
//             Maximum Speed - ${this.maxSpeed}
//             Engine - ${this.engine}
//             `;
// }
// console.log(car.info());
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// Car.prototype.increaseMaxSpeed = function(newSpeed) {
//     return this.maxSpeed = this.maxSpeed + newSpeed;
// }
// console.log(car.increaseMaxSpeed(400));
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// Car.prototype.changeYear = function(newValue) {
//     return this.year = newValue;
// }
// console.log(car.changeYear(2018));
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// Car.prototype.addDriver = function(driver) {
//     return this.driver = driver;
// }
// console.log(car.addDriver('John'));
//
// // - (Те саме, тільки через клас)
// // Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// class CarCar {
//
//     constructor(model, manufacturer, year, maxSpeed, engine) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//     }
//
//     drive() {
//         return `їдемо зі швидкістю ${this.maxSpeed} на годину`;
//     }
//     info() {
//         return `Model - ${this.model};
//             Manufacturer - ${this.manufacturer}
//             Year - ${this.year}
//             Maximum Speed - ${this.maxSpeed}
//             Engine - ${this.engine}
//             `;
//     }
//     increaseMaxSpeed(newSpeed) {
//         return this.maxSpeed = this.maxSpeed + newSpeed;
//     }
//     changeYear(newValue) {
//         return this.year = newValue;
//     }
//     addDriver(driver) {
//         return Object.assign(driver)
//     }
// }
// let carCar = new CarCar('audi','VG','2014',300,'Turbo V2');
// console.log(carCar);
// console.log(carCar.addDriver('John'));
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// //
// // -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// function Sinderella(name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }
// // let Sinderella1 = new Sinderella('r',23,23);
// // console.log(Sinderella1)
// let arrayOfSinderellas = [];
// for (let i = 0, q = 0, j = 0.5; i < 10; i++) {
//     arrayOfSinderellas.push(new Sinderella(`Sinderella ${q++}`, 23 + q, 33 + (j+=0.5)))
// }
// console.log(arrayOfSinderellas);
//
// // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// function Prince(name, age, shoe) {
//     this.name = name;
//     this.age = age;
//     this.shoe = shoe;
// }
// let prince = new Prince('Jordan', 29, 36.5);
// //     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// for (let i = 0; i < arrayOfSinderellas.length; i++) {
//     if (arrayOfSinderellas[i].footSize === prince.shoe) {
//         console.log(arrayOfSinderellas[i])
//     }
// }
// //     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// console.log(arrayOfSinderellas.find(Sindy => Sindy.footSize === prince.shoe));