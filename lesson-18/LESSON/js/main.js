const showImg = document.querySelector("#show img");
const indicators = document.querySelector(".indicators");

indicators.addEventListener("click", (e) => {
  e.target.src && (showImg.src = e.target.src);
});
