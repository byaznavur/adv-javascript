const navbarOpenBtn = document.querySelector("#navbar-open");
const navbarCloseBtn = document.querySelector("#navbar-close");
const navbarResponsive = document.querySelector("#navbar-responsive");
const nav = document.querySelector("nav");
const navBtn = document.querySelector(".nav-btn");
const modalOpenBtn = document.querySelector(".modal-open-btn");
const modalCloseBtn = document.querySelector(".modal-close-btn");
const modal = document.querySelector(".modal");
const modalBody = document.querySelector(".modal-body");
const loginForm = document.querySelector(".login-form");

navbarOpenBtn.addEventListener("click", function () {
  navbarResponsive.style.left = "0";
  let img = this.querySelector("img");
  console.log(img.src);
  if (img.src.includes("images/menu.svg")) {
    img.src = "images/close.svg";
  } else {
    img.src = "images/menu.svg";
    navbarResponsive.style.left = "-100%";
  }
});

// navbarCloseBtn.addEventListener("click", () => {
//   navbarResponsive.style.left = "-100%";
// });

window.addEventListener("scroll", () => {
  if (scrollY > 100) {
    nav.classList.add("navbar-shrink");
  } else {
    nav.classList.remove("navbar-shrink");
  }
});

navBtn.addEventListener("click", function () {
  if (document.body.classList.contains("dark")) {
    this.innerHTML = "Dark";
  } else {
    this.innerHTML = "Light";
  }
  document.body.classList.toggle("dark");
});

function modalOpen() {
  modal.classList.add("modal-show");
  modalBody.classList.add("modal-body-show");
}

modalOpenBtn.addEventListener("click", modalOpen);

// modalCloseBtn.addEventListener("click", () => {
//   modal.classList.remove("modal-show");
//   modalBody.classList.remove("modal-body-show");
// });

function modalClose() {
  modal.classList.remove("modal-show");
  modalBody.classList.remove("modal-body-show");
}

window.addEventListener("click", (e) => {
  if (e.target === modal || modalCloseBtn.contains(e.target)) {
    modalClose();
  }
});

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const elements = this.querySelectorAll("[required]");
  for (let el of elements) {
    console.log(el.parentElement);
    if (el.validity.valid) {
      el.parentElement.querySelector(".valid-feedback").style.display = "block";
      el.parentElement.querySelector(".invalid-feedback").style.display =
        "none";
    } else {
      el.parentElement.querySelector(".invalid-feedback").style.display =
        "block";
      el.parentElement.querySelector(".valid-feedback").style.display = "none";
    }
  }
  if (this.checkValidity()) {
    modalClose();
  }
});
