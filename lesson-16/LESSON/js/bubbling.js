const main = document.querySelector("main");
const homeSection = document.querySelector("#home");
const homeContainer = document.querySelector(".home-container");
const homeBtn = document.querySelector("#home button");

main.addEventListener("click", () => {
  console.log("Main");
});

homeSection.addEventListener("click", (e) => {
  // console.log(e);
  e.stopPropagation();
  console.log("HomeSection");
});

homeContainer.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("HomeContainer");
});

homeBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("HomeBtn");
});
