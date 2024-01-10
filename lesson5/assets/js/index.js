// const changeMode = () => {
//   if (document.body.className === "light") {
//     document.body.className = "dark";
//   } else {
//     document.body.className = "light";
//   }
// };

// let toggleBtn = document.querySelector("button");
// toggleBtn.addEventListener("click", changeMode);

// toggleBtn.onclick = changeMode;

// LocalStorage, SessionStorage
// 1.setItem

localStorage.setItem("Age", 12);

// 2.getItem

let a = localStorage.getItem("Age");
console.log(a);

// 3.removeItem

localStorage.removeItem("Age");
localStorage.setItem('Lang', 'AZ')
// 4.clear

localStorage.clear();

let info = [12, "salam", null];
localStorage.setItem("LogIn", JSON.stringify(true));
localStorage.setItem("myArr", JSON.stringify(info));

console.log(JSON.parse(localStorage.getItem("LogIn")));
console.log(localStorage.getItem("LogIn"));

// JSON.stringify();
// JSON.parse();
