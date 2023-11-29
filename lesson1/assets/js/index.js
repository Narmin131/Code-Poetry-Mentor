console.log("it is external jaavscript");
console.log(4 + 3);

// 1.Alert
// 2.Confirm
// 3.Prompt

console.log(window);

// alert('hello')
// confirm('razisiz')

// let res = confirm('razisiz')
// console.log(res);
// prompt('yasinizi daxil edin')

// let response = prompt('yasinizi daxil edin')
// console.log(response);

// Data types

// 1. Sade (primitive)

// 1.String

// let name = 'Narmin'
// let surname = 'Mammadova'
// console.log(name + " " + surname);
// let age = '12'
// let price = "12"

// 2.Number

// let price = 23.345;
// let a = 23;
// let b = "12";
// console.log(a + b);

// 3.Boolean

// let wrong = false;
// let correct = true;
// console.log( 10 == 4);

// 2. Murekkeb (non-primitive, reference)

// 1.Array

let array = [12, 23, "salam", true, {
    name : "Leman"
}];
console.log(array[2]);
console.log(array[5]);
console.log(array[4].name);
// 2.Object

let myObject = {
  name: "Fuad",
  age: 23,
  telebe: true,
  books : [12, 67, 11]
};

console.log(myObject.age);
console.log(myObject.telebe);
console.log(myObject.books[1]);

// 3. Xususi (trivial)

// 1.Null

let c = null;
c = 23;
console.log(c);

// 2.Undefined

let a;
console.log(a);
