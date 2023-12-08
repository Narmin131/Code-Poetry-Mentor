// Type conversion
// 1.Implicit - automatic - js ozu tipi deyisir
// 2.Explicit - manual - biz deysiirk

// console.log(!true);
// console.log(!10);

// 7 dene falsy deyer var

// 1.0
// 2. 0n
// 3. false
// 4. NaN
// 5."", '', ``
// 6.null
// 7.undefined

// String(), Number(), Boolean()

// let a = '123a'

// console.log(Number(a));

// console.log(Boolean('true'));

// Postfix, prefix

// let a = 5
// alert(++a)

// let sum = 0;

// for (let i = 0; i < 10; i++) {
//     sum += i
// }

// console.log(`Ededlerin cemi ${sum}`);

let arr = ["salam", 12, null, undefined, "js", "html"];

for (let index = 0; index < arr.length; index++) {
  console.log(arr[index]);
}

// for (let i = 0; i < 10; i++) {
    // console.log(i * i);
    // console.log(i ** 2)
// }

// for in, for of

// for (const a in arr) {
//      console.log(a, typeof arr[a]);
// }

// for (const i of arr) {
//       console.log(i, arr.indexOf(i))
// }

