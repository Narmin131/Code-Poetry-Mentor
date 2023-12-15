// some, every,     sort,     filter, find,    map

let arr = [12, 23, 11 , 21, 100]

let filterMethod = arr.filter((item) => item > 15)
console.log(filterMethod);


let findMethod = arr.find((item) => item > 15)
console.log(findMethod);

let someMethod = arr.some((item)=> item % 2 == 0)
console.log(someMethod);

let everyMethod = arr.every((item)=> item % 2 == 0)
console.log(everyMethod);


let sortMethod = arr.sort((a, b)=> a - b)
console.log(sortMethod);


let sortMethod2 = arr.sort((a, b)=> b - a)
console.log(sortMethod2);

let sortMethod2 = arr.sort((a, b)=> a.title.localeCompare(b.title))
console.log(sortMethod2);

let mapMethod = arr.map((item)=>{
  return item * 2
})

let mapMethod2 = arr.map((item)=> item * 2)

console.log(mapMethod);