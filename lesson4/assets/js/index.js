// some, every,     sort,     filter, find,    map

let arr = [12, 23, 11, 21, 100];

let sort = arr.sort((a, b) => a.year - b.year);

// let filterMethod = arr.filter((item) => item > 15)
// console.log(filterMethod);

// let findMethod = arr.find((item) => item > 15)
// console.log(findMethod);

// let someMethod = arr.some((item)=> item % 2 == 0)
// console.log(someMethod);

// let everyMethod = arr.every((item)=> item % 2 == 0)
// console.log(everyMethod);

// let sortMethod = arr.sort((a, b)=> a - b)
// console.log(sortMethod);

// let sortMethod2 = arr.sort((a, b)=> b - a)
// console.log(sortMethod2);

// let sortMethod2 = arr.sort((a, b)=> a.title.localeCompare(b.title))
// console.log(sortMethod2);

// let mapMethod = arr.map((item)=>{
//   return item * 2
// })

// let mapMethod2 = arr.map((item)=> item * 2)

// console.log(mapMethod);

let a = new Date("08/02/2022 ");
console.log(a);

// Math


document.querySelector('p').style.color = 'red'

console.log(document.querySelector('p').removeAttribute('class'));


let myBtn = document.querySelector('button')

const message = ()=>{
  alert('salam')
}


myBtn.addEventListener("submit", message)