// array !!!!!!!! //
let array = [1, 2, 'three', true, 0];
console.log(array)

array[4] = 'new value';
console.log(array)
array[5] = 'dog';
console.log(array);
array[array.length] = 'new dog';
console.log(array);

let arr = [
    [11, false, '33'], // 0
    ['true', 2], // 1
    [true]  // 2
];
// console.log(arr)
// let innerArray = arr[2]
// console.log(innerArray[0])
console.log(arr[1][1])
console.log(arr[1], [1]);

// object !!!!!!! //
let object = {
    name: 'Roki',
    age: 18,
    id: 'Roko',
    type: 'parrot',
    secondObj: {
        name: 'name',
        age: 'two'
    }
};
console.log(object.secondObj.age);