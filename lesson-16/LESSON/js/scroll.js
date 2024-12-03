const backtop = document.querySelector(".backtop");

window.addEventListener("scroll", () => {
  if (scrollY > 200) {
    backtop.classList.add("backtop-show");
  } else {
    backtop.classList.remove("backtop-show");
  }
});
