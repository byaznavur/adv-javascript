// console.log(document);

// console.log(document.title);

// document.title = "Document Object Model";

// console.log(document.body);

// console.log(document.head);

const navList = document.querySelector(".nav-list");
const burger = document.querySelector(".burger");
const homeSection = document.querySelector("#home");

function toggle() {
  navList.classList.toggle("d-none");
}

// burger.onclick = toggle;
burger.addEventListener("click", toggle);
// burger.addEventListener("mouseup", toggle);
// burger.addEventListener("dblclick", toggle);

// homeSection.addEventListener("mouseup", function () {
//   this.style.backgroundColor = "red";
// });

// homeSection.addEventListener("mousedown", function () {
//   this.style.backgroundColor = "yellow";
// });

homeSection.addEventListener("mouseenter", function () {
  this.style.backgroundColor = "red";
});

homeSection.addEventListener("mouseleave", function () {
  this.style.backgroundColor = "white";
});
