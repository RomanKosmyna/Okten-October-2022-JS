// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let array = [1, //1
            'two',  //2
            'three', //3
            4, //4
            true, //5
            false, //6
            [1, 2, 3], //7
            {name: 'Roki',  //8
            type: 'parrot',
            age: 18},
            [{id:1, number:1}, ['a', 'b', 'c', 'd'], true], //9
            [                   //10
                11,
                [22, 23, 24],
                {name:"Yoda",
                    skinTone: 'green',
                    id: 'jedi',
                    jedi: {
                    status: 'true',
                        age: 100500}
                }
            ],
            'easy?',  //11
            {number: 'one', numberTwo: 2} //12
];
console.log(array.length);
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
// console.log(typeof array[4]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
// console.log(array[7].name, array[7].age, array[7].type);
console.log(array[8]);
// console.log(array[8] [1] [2]);
// console.log(array[9][2].jedi.status, array[9][2].jedi.age);
console.log(array[10]);
console.log(array[11]);
// console.log(array[11].numberTwo);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let eragon1 = {
    title: 'eragon1',
    pageCount: 650,
    genre: 'fantasy'
}
console.log(eragon1);
let eragon2 = {
    title: 'eragon2',
    pageCount: 750,
    genre: 'fantasy'
}
console.log(eragon2);
let eragon3 = {
    title: 'eragon3',
    pageCount: 550,
    genre: 'fantasy'
};
console.log(eragon3);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив.
// Кожен автор має поля name,age
let theEdgeChronicles = {
    title: 'beyondTheDeepwoods',
    pageCount: 450,
    genre: 'fantasy',
    authors: [
        {name: 'Christopher', age: 42},
        {name: 'Joe', age: 33}
    ]
};
console.log(theEdgeChronicles)
// console.log(theEdgeChronicles.authors[1].name);
let theEdgeChronicles2 = {
    title: 'freeglader',
    pageCount: 330,
    genre: 'fantasy',
    authors: [
        {name: 'Ivan', age: 27},
        {name: 'John', age: 77},
        {name: 'Steven', age: 44}
    ]
};
console.log(theEdgeChronicles2)
let theEdgeChronicles3 = {
    title: 'theDescenders',
    pageCount: 530,
    genre: 'fantasy',
    authors: [
        {name: 'Robert', age: 80},
        {name: 'Andrii', age: 30}
    ]
};
console.log(theEdgeChronicles3)
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача
let superUsersArray = [
    {name: 'Ivan', username: "Ivik", password: "123456ua"}, //1
    {name: 'Scrat', username: "AnyAcorns?", password: "IceAgeisTheBestFranchise"}, //2
    {name: 'Ed', username: "Ed123", password: "edik69"}, //3
    {name: 'Edd', username: "Edward", password: "edd$789"}, //4
    {name: 'Eddy', username: "Eddy", password: "topPassword2010"}, //5
    {name: 'Obama', username: "Obema", password: "Obama2023"}, //6
    {name: 'ObiWan', username: "kenobi666", password: "IgotTheHighGround :-)"}, //7
    {name: 'Simba', username: "simba94", password: "theLionKing"}, //8
    {name: 'Aragorn', username: "dwarf", password: "whereIsTheRing14"}, //9
    {name: 'Borat', username: "BorikSagi", password: "IhaveBoughtMyWife"} //10
];
// console.log(superUserArray[0].password);
// console.log(superUserArray[1].password);
// console.log(superUserArray[2].password);
let user1 = superUsersArray[0]
console.log(user1.password);
let user2 = superUsersArray[1]
console.log(user2.password);
let user3 = superUsersArray[2]
console.log(user3.password);
console.log(superUsersArray[3].password);
console.log(superUsersArray[4].password);
console.log(superUsersArray[5].password);
console.log(superUsersArray[6].password);
console.log(superUsersArray[7].password);
console.log(superUsersArray[8].password);
console.log(superUsersArray[9].password);



let i = 0;
let x = i;
x = x + 2;
console.log(i);
console.log(x);

let arr1 = {name:'marik', id:1}
console.log(arr1);
