// window.addEventListener("keydown", (e) => {
//   console.log(e.key);
// });

// window.addEventListener("keyup", (e) => {
//   console.log(e.key);
// });

const searchInput = document.querySelector("nav input");

// searchInput.addEventListener("keydown", function () {
//   console.log(this.value);
// });

searchInput.addEventListener("keyup", function () {
  console.log(this.value);
});

// searchInput.addEventListener("input", function () {
//   console.log(this.value);
// });
