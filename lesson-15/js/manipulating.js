const productCard = document.createElement("div");
productCard.className = "product-card";

const productCardImg = document.createElement("img");
productCardImg.src = "fsflkdsfjdk";
productCardImg.alt = "Product img";

const productCardTitle = document.createElement("h3");

const productCardTitleText = document.createTextNode("Product title");

productCardTitle.appendChild(productCardTitleText);

const productCardPrice = document.createElement("p");
productCardPrice.innerHTML = "<i>Price</i>";

const productCardContent = document.createElement("p");
productCardContent.textContent =
  "<b>Lorem </b> ipsum dolor sit amet consectetur adipisicing elit. Quas,rem!";

productCard.append(productCardTitle, productCardPrice, productCardContent);

productCard.prepend(productCardImg);

console.log(productCard);

// console.log(productCardImg);
// console.log(productCardTitle);
// console.log(productCardTitleText);
// console.log(productCardPrice);
// console.log(productCardContent);

