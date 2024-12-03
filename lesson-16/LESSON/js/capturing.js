const main = document.querySelector("main");
const homeSection = document.querySelector("#home");
const homeContainer = document.querySelector(".home-container");
const homeBtn = document.querySelector("#home button");

main.addEventListener(
  "click",
  () => {
    console.log("Main");
  },
  true
);

homeSection.addEventListener(
  "click",
  () => {
    console.log("HomeSection");
  },
  true
);

homeContainer.addEventListener(
  "click",
  () => {
    console.log("HomeContainer");
  },
  true
);

homeBtn.addEventListener(
  "click",
  () => {
    console.log("HomeBtn");
  },
  true
);
