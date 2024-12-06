const cartCount = document.querySelector(".cart-count");

let cartJson = localStorage.getItem("cart");

let cart = JSON.parse(cartJson) || [];

function getCartCount() {
  cartCount.textContent = cart.length;
}

getCartCount();
