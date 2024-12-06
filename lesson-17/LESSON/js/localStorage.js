localStorage.setItem("language", "uz");
localStorage.setItem("mode", "dark");
localStorage.setItem("id", 1);
localStorage.setItem("arr", JSON.stringify([1, 2, 3]));
localStorage.setItem("obj", JSON.stringify({ a: 1, b: 2, c: 3 }));

// localStorage.removeItem("mode");
// localStorage.clear();

// let language = localStorage.getItem("language");
// let mode = localStorage.getItem("mode");
// let id = localStorage.getItem("id");

// console.log(language);
// console.log(mode);
// console.log(id, typeof id);

let arrJson = localStorage.getItem("arr");

let arr = JSON.parse(arrJson);

console.log(arr);

let objJson = localStorage.getItem("obj");

let obj = JSON.parse(objJson);

console.log(obj);
